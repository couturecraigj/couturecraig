import React from 'react'
import BgImage from './BgImage'

const SecondaryBanner = props => (
  <section id="banner" className={`style${props.style || 2}`}>
    {/* <BgImage /> */}
    <div className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </div>
  </section>
)

export default SecondaryBanner
