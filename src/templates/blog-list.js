import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import SecondaryBanner from '../components/SecondaryBanner'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Pagination = ({ index, pageCount, group }) => {
  // if (pageCount === 1) {
  //   return null
  // }
  return (
  <ul className="pagination">
    <li><span className={`button small ${index === 1 ? 'disabled' : ''}`}>Prev</span></li>
    {group.map((item, key) => {
      return <li><a href={key + 1 === index ? '#' : `/blog/${index + 1}`} className={`page ${key + 1 === index ? 'active' : ''}`}>{key + 1}</a></li>
    })}
    <li><a href={`${index === pageCount ? '#' : index + 1}`} className={`button small ${index === pageCount ? 'disabled' : ''}`}>Next</a></li>
  </ul>)
}

const Blog = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <div>
        <Helmet>
            <title>Blog</title>
            <meta name="description" content="Blog Page" />
        </Helmet>

        <SecondaryBanner title='Blog' description='Lorem ipsum dolor sit amet nullam consequat sed veroeros. tempus adipiscing nulla.' />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Sed amet aliquam</h2>
                    </header>
                    <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
              {group.map(({ node }) => (
                <section>
                  <Link to={`/${node.frontmatter.path}`} className="image">
                    <img src={node.frontmatter.mainImg.childImageSharp.resize.src} alt="" />
                  </Link>
                  <div className="content">
                    <div className="inner">
                      <header className="major">
                        <h3>{node.frontmatter.title}</h3>
                      </header>
                      <p>{node.excerpt}</p>
                      <ul className="actions">
                        <li><Link to={`/post${node.frontmatter.path}`} className="button">Learn more</Link></li>
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
              <Pagination index={index} pageCount={pageCount} group={group} />
            </section>
        </div>

    </div>
)}

export default Blog