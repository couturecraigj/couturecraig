const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const createPaginatedPages = require('gatsby-paginate')
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  let query = `
  {
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            draft
            mainImg{
              childImageSharp {
                resize {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
  if (process.env.NODE_ENV === 'production') {
    query = `
  {
    allMarkdownRemark(limit: 1000,
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { draft: { eq: false }}}) {
      edges {
        node {
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            draft
            mainImg{
              childImageSharp {
                resize {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
  }
  return new Promise((resolve, reject) => {
    /**
     * TODO: Using this you can create all the pagination
     */
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const blogPageList = path.resolve('./src/templates/blog-list.js')
    resolve(
      graphql(query).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        if (_.get(result, 'data.allMarkdownRemark.edges', []).length === 0) {
          createPage({
            path: `/blog/`,
            component: blogPageList
          })
        } else {
          createPaginatedPages({
            edges: _.get(result, 'data.allMarkdownRemark.edges', []),
            createPage: createPage,
            pageTemplate: './src/templates/blog-list.js',
            // pageLength: 5, // This is optional and defaults to 10 if not used
            pathPrefix: 'blog',
          })
        }
        
        // Create blog posts pages.
        _.each(_.get(result, 'data.allMarkdownRemark.edges', []), edge => {
          createPage({
            path: `/post${edge.node.frontmatter.path}`,
            mainImg: edge.node.frontmatter.mainImg,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
              mainImg: edge.node.frontmatter.mainImg,
            },
          })
        })
      })
    )
  })
}
