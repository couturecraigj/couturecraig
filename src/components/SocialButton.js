import React from 'react'

import posed from 'react-pose'
import { spring, transform } from 'popmotion'

const { interpolate } = transform

const config = {
  // draggable: true,
  // initialPose: 'closed',
  opening: {
    scale: 1.3,
    transition: {
      type: 'spring',
    },
  },
  undefined: {
    scale: 1,
    transition: {
      type: 'spring',
    },
  },
}

const Box = posed.li(config)

class SocialButton extends React.Component {
  state = {
    pose: 'undefined',
    timeout: null,
  }
  onMouseOver = () => {
    this.setState({
      pose: 'undefined',
    })
    // setTimeout(() => {
    this.setState({
      pose: 'opening',
    })
    setTimeout(() => {
      this.setState({
        pose: 'undefined',
      })
    }, 500)
    // }, 2000)
  }
  render() {
    const { children, ...props } = this.props
    return (
      <Box onMouseOver={this.onMouseOver} pose={this.state.pose}>
        <a {...props} className={`icon alt fa-${props.type}`}>
          <span className="label">{children}</span>
        </a>
      </Box>
    )
  }
}

export default SocialButton
