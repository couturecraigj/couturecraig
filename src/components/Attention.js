import React from 'react'

import posed from 'react-pose'
import { spring, transform } from 'popmotion'

const { interpolate } = transform

const config = {
  // draggable: true,
  // initialPose: 'closed',
  attention: {
    scale: 1.1,
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

const Box = posed.div(config)

class Attention extends React.Component {
  state = {
    pose: 'undefined',
    timeout: null,
  }
  componentDidMount() {
    this.setState({
      pose: 'undefined',
    })
    setTimeout(() => {
      this.setState({
        pose: 'attention',
      })
      setTimeout(() => {
        this.setState({
          pose: 'undefined',
        })
      }, 500)
    }, 2000)
  }
  render() {
    return (
      <Box {...this.props} pose={this.state.pose}>
        {this.props.children}
      </Box>
    )
  }
}

export default Attention
