import React from 'react'
import Link from 'gatsby-link'
import { get } from 'lodash'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const edgesNodes = get(this.props, 'data.allMarkdownRemark.edges', [])
      .filter(edge => {
        if (
          process.env.NODE_ENV === 'production' &&
          edge.node.frontmatter.draft === true
        ) {
          return false
        }
        return true
      })
      .map(({ node }) => node)
    return (
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
                style={{
                  backgroundImage: `url(${
                    node.frontmatter.mainImg.childImageSharp.resize.src
                  })`,
                }}
              >
                <header className="major">
                  <h3>{node.frontmatter.title}</h3>
                  <p>{node.excerpt}</p>
                </header>
                <Link
                  to={`/post${node.frontmatter.path}`}
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
              <h4>Software Engineer/Design enthusiast/Salesforce.com expert</h4>
              <p>
                I have been in this space for about 6 years now and have found a
                nice little niche. I can build applications that fit nearly any
                need that range from out of the box to custom built full-stack
                developed applications. I love building backends and oddly
                enough like building authentication. I hope you enjoy my website
                and if there is anything you want to talk about I have added a
                contact form at the bottom of every screen as well as additional
                ways of contacting me in the Social section below.
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
        {edgesNodes.map(edge => <div>{edge.frontmatter.mainImg.id}</div>)}
      </div>
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
    allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          frontmatter {
            draft
            mainImg {
              childImageSharp {
                resize(width: 1000) {
                  src
                }
                responsiveSizes(maxWidth: 400) {
                  src
                  srcSet
                  sizes
                }
              }
            }
            path
            title
          }
        }
      }
    }
  }
`
