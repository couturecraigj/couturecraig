import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Projects = props => (
  <div>
    <Helmet>
      <title>Thank You</title>
      <meta name="description" content="Thank you" />
    </Helmet>

    <div id="main" class="alt">
      <section id="one">
        <div class="inner">
          <header class="major">
            <h1>Thank you!</h1>
          </header>
          <p>Your form submission has been received. 🤘🎉</p>
        </div>
      </section>
    </div>
  </div>
)

export default Projects
