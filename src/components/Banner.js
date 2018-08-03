import React from 'react'
import GlideIn from './GlideIn'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>
          Hi, my name is <GlideIn>Craig Couture</GlideIn>
        </h1>
      </header>
      <div className="content">
        <ul className="actions">
          <li>
            <a href="#one" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
