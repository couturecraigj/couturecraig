import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import get from 'lodash/get'

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const author = get(props,'data.markdownRemark.frontmatter.author', get(props, 'data.site.siteMetadata.author', 'Craig Couture'))
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
            <span className="image main">
              <Img
                sizes={post.frontmatter.mainImg.childImageSharp.sizes}
                alt=""
              />
            </span>
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
                color: "#8d82c4",
                turnPolicy: TURNPOLICY_MINORITY,
                blackOnWhite: false
              },
              cropFocus: ATTENTION,
              maxHeight: 1000,
              maxWidth: 1000,
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
