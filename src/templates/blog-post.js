import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import pic11 from '../assets/images/pic11.jpg'

// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = this.props.data.markdownRemark
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')

//     return (
//       <div>
//         <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
//         <h1>{post.frontmatter.title}</h1>
//         <p>
//           {post.frontmatter.date}
//         </p>
//         <div dangerouslySetInnerHTML={{ __html: post.html }} />
//         <hr/>
//       </div>
//     )
//   }
// }

const BlogPostTemplate = (props) => {
  console.log(props.data.markdownRemark.html)
  const post = props.data.markdownRemark
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  return (
  <div>
      <Helmet>
          <title>{`${post.frontmatter.title} | ${siteTitle}`}</title>
          <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header className="major">
                      <h1>{post.frontmatter.title}</h1>
                  </header>
                  <span className="image main"><img src={post.frontmatter.mainImg.childImageSharp.resize.src} alt="" /></span>
                  <h4>{post.frontmatter.date}</h4>
                  <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
          </section>
      </div>

  </div>
)}

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
      html
      frontmatter {
        title
        mainImg {
          childImageSharp {
            resize(width: 1500) {
              src
            }
            responsiveSizes(maxWidth: 400) {
              src
              srcSet
              sizes
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
