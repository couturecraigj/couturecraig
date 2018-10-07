import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import get from 'lodash/get'
import has from 'lodash/has'
import SecondaryBanner from '../components/SecondaryBanner'

const structuredData = `{
  "@context": "http://schema.org",
  "@type": "Organization",
  "url": "https://www.couturecraig.com/",
  "name": "Couture Craig Consulting",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-802-387-0237",
    "contactType": "Customer service",
  }
}`

const LandingByPath = props => {
  // Some Reason if this is removed it is firing an error.
  if (!props.data) return null
  return (
    <Layout>
      <div>
        <Helmet>
          <title>{props.data.wordpressPage.title}</title>
          <meta
            name="description"
            content={`${props.data.wordpressPage.title}, ${
              props.data.wordpressPage.excerpt
            }`}
          />
        </Helmet>
        <SecondaryBanner
          title={props.data.wordpressPage.title}
          style={props.pageContext.style || 1}
          description={props.data.wordpressPage.excerpt}
        />
        <div id="main" className="alt">
          <section id="one">
            {has(props, 'data.wordpressPage.featured_media.localFile') && (
              <div className="inner">
                <Img
                  fluid={get(
                    props,
                    'data.wordpressPage.featured_media.localFile.childImageSharp.fluid'
                  )}
                />
              </div>
            )}
            <div
              className="inner"
              dangerouslySetInnerHTML={{
                __html: props.data.wordpressPage.content,
              }}
            />
          </section>
        </div>
        <script type="application/ld+json">{structuredData}</script>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query LandingByPath($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      excerpt
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(
              cropFocus: ENTROPY
              maxWidth: 1000
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

export default LandingByPath
