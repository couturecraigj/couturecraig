import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import { get } from 'lodash'
import Helmet from 'react-helmet'
import BgImage from '../components/BgImage'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

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
class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const edgesNodes = get(this.props, 'data.allWordpressPost.edges', [])
      .filter(edge => {
        if (
          process.env.NODE_ENV === 'production' &&
          edge.node.status !== 'publish'
        ) {
          return false
        }
        return true
      })
      .map(({ node }) => node)
    return (
      <Layout>
        <div>
          <Helmet>
            <title>Home</title>
            <meta name="description" content={siteDescription} />
            <link rel="shortcut icon" href="/favicon.ico?v=1" />
          </Helmet>

          <Banner />

          <div id="main">
            <section id="one" className="tiles">
              {edgesNodes.map(node => (
                <article
                  key={node.slug}
                  style={{
                    backgroundImage: `url(${get(
                      node,
                      'featured_media.localFile.childImageSharp.resize.src',
                      get(this.props.data, 'defaultImage.resize.src')
                    )})`,
                  }}
                >
                  <header className="major">
                    <h3 dangerouslySetInnerHTML={{ __html: node.title }} />
                    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                  </header>
                  <Link
                    to={`/${node.date}/${node.slug}`}
                    className="link primary"
                  />
                </article>
              ))}
            </section>
            <section id="two">
              <div className="inner">
                <header className="major">
                  <h2>Craig Couture</h2>
                </header>
                <h4>
                  Software Engineer/Design enthusiast/Salesforce.com expert
                </h4>
                <p>
                  I have been in this space for about 6 years now and have found
                  a nice little niche. I can build applications that fit nearly
                  any need that range from out of the box to custom built
                  full-stack developed applications. I love building backends
                  and oddly enough like building authentication. I hope you
                  enjoy my website and if there is anything you want to talk
                  about I have added a contact form at the bottom of every
                  screen as well as additional ways of contacting me in the
                  Social section below.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/blog" className="button next">
                      Get Started
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <script type="application/ld+json">{structuredData}</script>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

// let query

// if (process.env.NODE_ENV === 'production') {
// query =
// }

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    defaultImage: imageSharp(
      original: { src: { regex: "/pexels-photo-132340/" } }
    ) {
      resize(height: 500, cropFocus: ATTENTION, width: 1000) {
        src
      }
    }
    allWordpressPost(
      filter: { status: { eq: "publish" } }
      sort: { fields: [date], order: DESC }
    ) {
      edges {
        node {
          slug
          date(formatString: "YYYY/MM/DD")
          title
          excerpt
          content
          status
          featured_media {
            localFile {
              childImageSharp {
                resize(height: 500, cropFocus: NORTH, width: 1000) {
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
