import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Services = (props) => (
  <div>
      <Helmet>
          <title>{`Services | CoutureCraig.com`}</title>
          <meta name="description" content="Generic Page" />
      </Helmet>

      <div id="main" className="alt">
          <section id="one">
              <div className="inner">
                  <header className="major">
                      <h1>Services</h1>
                  </header>
                  {/* <span className="image main"><img src={post.frontmatter.mainImg.childImageSharp.resize.src} alt="" /></span> */}
                  <div>
                      <p>Salesforce.com</p>
                      <p>Web Development</p>
                      <p>Web Design</p>
                  </div>
              </div>
          </section>
      </div>

  </div>
)

export default Services