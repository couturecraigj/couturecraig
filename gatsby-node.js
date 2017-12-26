const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require(`unist-util-select`)
const createPaginatedPages = require('gatsby-paginate')
const fs = require(`fs-extra`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  // pexels-photo-132340
  let query = `
  {
    sizes: imageSharp(id: { regex: "/pexels-photo-132340.jpeg/" }) {
      sizes(
        traceSVG: {
          color: "#8d82c4"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        },
        toFormat: PNG
      ) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
      }
    }
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
                resize(width: 1500) {
                  src
                }
                sizes(
                  traceSVG: {
                    color: "#8d82c4"
                    turnPolicy: TURNPOLICY_MINORITY
                    blackOnWhite: false
                  },
                  toFormat: PNG,
                ) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
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
    sizes: imageSharp(id: { regex: "/pexels-photo-132340.jpeg/" }) {
      sizes(
        traceSVG: {
          color: "#8d82c4"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        },
        toFormat: PNG
      ) {
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
      }
    }
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
                sizes(
                  traceSVG: {
                    color: "#8d82c4"
                    turnPolicy: TURNPOLICY_MINORITY
                    blackOnWhite: false
                  },
                  toFormat: PNG
                ) {
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
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
            component: blogPageList,
          })
        } else {
          createPaginatedPages({
            edges: _.get(result, 'data.allMarkdownRemark.edges', []).map(
              edge =>
                _.has(edge, 'node.frontmatter.mainImg.childImageSharp.sizes')
                  ? edge
                  : Object.assign({}, edge, {
                    node: Object.assign({}, _.get(edge, 'node', {}), {
                      frontmatter: Object.assign({}, _.get(edge, 'node.frontmatter', {}), {
                        mainImg: Object.assign({}, _.get(edge, 'node.frontmatter.mainImage', {}), {
                          childImageSharp: Object.assign({}, _.get(edge, 'node.frontmatter.mainImage.childImageSharp', {}), {
                            sizes: _.get(result, 'data.sizes.sizes')
                          })
                        })
                      })
                    })
                  })
            ),
            createPage: createPage,
            pageTemplate: './src/templates/blog-list.js',
            context: {
              sizes: _.get(result, 'data.sizes.sizes'),
            },
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
