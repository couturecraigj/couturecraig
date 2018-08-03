import React from 'react'

import posed from 'react-pose'
import { spring, transform } from 'popmotion'

const { interpolate } = transform

const config = {
  draggable: true,
  // initialPose: 'closed',
  left: {
    x: -700,
    transition: spring,
  },
  center: {
    x: 0,
    transition: spring,
  },
  passive: {
    opacity: ['x', interpolate([-600, -200, 200, 600], [0, 1, 1, 0])],
  },
  dragEnd: {
    transition: spring,
    // delay: 50,
  },
}

const Box = posed.strong(config)

class GlideIn extends React.Component {
  state = {
    pose: 'left',
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        pose: 'center',
      })
    }, 2000)
  }
  onClick = () => {
    this.setState({
      pose: this.state.pose === 'left' ? 'center' : 'left',
    })
  }
  render() {
    return <Box pose={this.state.pose}>{this.props.children}</Box>
  }
}

export default GlideIn
