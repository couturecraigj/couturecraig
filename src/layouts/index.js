import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import '../assets/scss/main.scss'
import '../assets/css/index.css'
import './magical-underline'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import Menu from '../components/Menu'
import Contact from '../components/Contact'
import BgImage from '../components/BgImage'
import Footer from '../components/Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState({
      isMenuVisible: !this.state.isMenuVisible,
    })
  }

  render() {
    const { children } = this.props

    return (
      <div
        className={`body ${this.state.loading} ${
          this.state.isMenuVisible ? 'is-menu-visible' : ''
        }`}
      >
        {/* <BgImage sizes={this.props.data.sizes.sizes} /> */}
        <Helmet
          titleTemplate={`%s | ${this.props.data.site.siteMetadata.title}`}
        >
          <meta
            name="description"
            content={this.props.data.site.siteMetadata.description}
          />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Helmet>
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children()}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Template.propTypes = {
  children: PropTypes.func,
}

export default Template

export const pageQuery = graphql`
  query LayoutPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    sizes: imageSharp(id: { regex: "/pexels-photo-185699.jpeg/" }) {
      sizes(
        traceSVG: {
          color: "#8d82c4"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        }
        toFormat: PNG
      ) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
