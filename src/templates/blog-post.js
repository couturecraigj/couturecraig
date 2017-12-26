import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'
import has from 'lodash/has'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const author = get(
    props,
    'data.markdownRemark.frontmatter.author',
    get(props, 'data.site.siteMetadata.author', 'Craig Couture')
  )
  const keywords = get(props, 'data.markdownRemark.frontmatter.keywords', [])
  return (
    <div>
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{post.frontmatter.title}</h1>
            </header>
            {(
              <span className="image main">
                <Img
                  sizes={get(post, 'frontmatter.mainImg.childImageSharp.sizes', get(props.data, 'sizes.sizes'))}
                  alt=""
                />
              </span>
            )}
            <h4>{post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      excerpt(pruneLength: 250)
      html
      frontmatter {
        title
        author
        keywords
        mainImg {
          childImageSharp {
            resize(width: 1500) {
              src
            }
            sizes(
              traceSVG: {
                color: "#8d82c4"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
              cropFocus: ATTENTION
              toFormat: PNG
            ) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
