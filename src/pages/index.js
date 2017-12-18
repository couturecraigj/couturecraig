import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        
        const siteDescription = this.props.data.site.siteMetadata.description
        const edgesNodes = this.props.data.allMarkdownRemark.edges.map(({ node }) => node)
        const images = edgesNodes.map(edge => edge.frontmatter.mainImg.childImageSharp.resize.src)
        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        {edgesNodes.map(node => 
                             <article style={{backgroundImage: `url(${node.frontmatter.mainImg.childImageSharp.resize.src})`}}>
                                <header className="major">
                                    <h3>{node.frontmatter.title}</h3>
                                    <p>{node.excerpt}</p>
                                </header>
                                <Link to={`/post${node.frontmatter.path}`} className="link primary"></Link>
                            </article>
                        )}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
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

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
        allMarkdownRemark(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                excerpt(pruneLength: 250)
                html
                frontmatter {
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