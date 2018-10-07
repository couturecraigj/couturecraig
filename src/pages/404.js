import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import SecondaryBanner from '../components/SecondaryBanner'

const Error404Page = props => (
  <Layout>
    <div>
      <Helmet>
        <title>404</title>
        <meta name="description" content="Page Not Found" />
      </Helmet>
      <SecondaryBanner title="404" style={1} description="Wah Wah Waaaaaah" />
      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <h2 id="title">Page Not Found</h2>
            <p>
              It Appears that you were taken here in error. If you believe you
              received this in error please contact using the following details
              below.
            </p>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Error404Page
