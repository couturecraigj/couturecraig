import React from 'react'

import posed from 'react-pose'
import { spring, transform } from 'popmotion'

const { interpolate } = transform
const config = {
  draggable: true,
  initialPose: 'closed',
  passive: {
    opacity: ['x', interpolate([-800, -200, 200, 800], [0, 1, 1, 0])],
  },
  dragEnd: {
    transition: spring,
    delay: 50,
  },
}

const Box = posed.strong(config)

class Draggable extends React.Component {
  state = {
    mounted: false,
  }
  componentDidMount() {
    this.setState({
      mounted: true,
    })
  }
  render() {
    return <Box>{this.props.children}</Box>
  }
}

export default Draggable
