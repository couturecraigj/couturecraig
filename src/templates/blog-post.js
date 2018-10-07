import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Layout from '../components/Layout'
import { sterilizeText } from '../utils/wordpress-helpers'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import has from 'lodash/has'

const BlogPostTemplate = props => {
  const post = props.data.wordpressPost
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const author = get(
    props,
    'data.wordpressPost.author',
    get(props, 'data.site.siteMetadata.author', 'Craig Couture')
  )
  const keywords = get(props, 'data.wordpressPost.keywords', [])
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{sterilizeText(post.title)}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="author" content={get(author, 'name')} />
          <meta name="keywords" content={keywords} />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              </header>
              <span className="image main">
                <Img
                  fluid={get(
                    post,
                    'featured_media.localFile.childImageSharp.fluid',
                    get(props.data, 'fluid.fluid')
                  )}
                  alt=""
                />
              </span>
              <h4>{post.date}</h4>
              <hr />
              <h5>{get(author, 'name')}</h5>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    fluid: imageSharp(original: { src: { regex: "/pexels-photo-132340/" } }) {
      fluid(
        quality: 100
        traceSVG: {
          color: "#8d82c4"
          background: "#252a43"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        }
        maxWidth: 1400
        toFormat: PNG
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      excerpt
      title
      content
      date(formatString: "MM.DD.YY")
      author {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(
              cropFocus: ENTROPY
              maxWidth: 1400
              quality: 100
              traceSVG: {
                color: "#8d82c4"
                background: "#333856"
                turnPolicy: TURNPOLICY_MINORITY
                blackOnWhite: false
              }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
