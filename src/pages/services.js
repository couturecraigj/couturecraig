import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Services = props => (
  <div>
    <Helmet>
      <title>Services</title>
      <meta name="description" content="Services that Craig can provide" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Services</h1>
          </header>
          {/* <span className="image main"><img src={post.frontmatter.mainImg.childImageSharp.resize.src} alt="" /></span> */}
          <div>
            <h3>Salesforce.com</h3>
            <ul>
              <li>Visualforce</li>
              <li>Apex</li>
            </ul>
            <h3>Web Design</h3>
            <ul>
              <li>Marketing</li>
              <li>Mockups</li>
            </ul>
            <h3>Front-end Development</h3>
            <ul>
              <li>React</li>
              <li>AngularJs</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>WebSockets</li>
              <li>WebRTC</li>
            </ul>
            <h3>Back-end Server Development</h3>
            <ul>
              <li>REST endpoints</li>
              <li>GraphQL</li>
              <li>Authentication</li>
              <li>WebSockets</li>
              <li>JWT</li>
              <li>Cookies</li>
            </ul>
            <h3>Full-stack Development</h3>
            <ul>
              <li>REST endpoints</li>
              <li>GraphQL</li>
              <li>Authentication</li>
              <li>JWT</li>
              <li>Cookies</li>
              <li>React</li>
              <li>Redux</li>
              <li>CSS</li>
              <li>WebSockets</li>
              <li>WebRTC</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
)

export default Services
