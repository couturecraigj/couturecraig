import React from 'react'
import BgImage from './BgImage'
import Attention from './Attention'

const SecondaryBanner = props => (
  <section id="banner" className={`style${props.style || 1}`}>
    {/* <BgImage /> */}
    <Attention className="inner">
      <header className="major">
        <h1>{props.title}</h1>
      </header>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: props.description }}
      />
    </Attention>
  </section>
)

export default SecondaryBanner
