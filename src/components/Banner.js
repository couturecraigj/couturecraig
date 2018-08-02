import React from 'react'
import posed from 'react-pose'
import { spring, transform } from 'popmotion'

const { interpolate } = transform
const config = {
  draggable: true,
  initialPose: 'closed',
  // attention: {
  //   scale: 1.3,
  //   transition: {
  //     type: 'spring',
  //     stiffness: 200,
  //     damping: 0,
  //   },
  // },
  passive: {
    opacity: ['x', interpolate([-800, -200, 200, 800], [0, 1, 1, 0])],
  },
  dragEnd: {
    transition: spring,
    delay: 50,
  },
}

const Box = posed.strong(config)

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>
          Hi, my name is <Box>Craig Couture</Box>
        </h1>
        <p>
          <small>Drag my name</small>
        </p>
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
