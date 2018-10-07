import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import '../assets/scss/main.scss'
import '../assets/css/index.css'
import '../utils/magical-underline'
import Header from './Header'
import Helmet from 'react-helmet'
import Menu from './Menu'
import Contact from './Contact'
import BgImage from './BgImage'
import Footer from './Footer'

const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    fluid: imageSharp(
      original: { src: { regex: "/pexels-photo-185699.jpeg/" } }
    ) {
      fluid(
        traceSVG: {
          color: "#8d82c4"
          turnPolicy: TURNPOLICY_MINORITY
          blackOnWhite: false
        }
        toFormat: PNG
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

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
      <StaticQuery
        query={query}
        render={data => (
          <div
            className={`body ${this.state.loading} ${
              this.state.isMenuVisible ? 'is-menu-visible' : ''
            }`}
          >
            {/* <BgImage fluid={data.fluid.fluid} /> */}
            <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`}>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <link rel="icon" href="/favicon.ico" type="image/x-icon" />
            </Helmet>
            <div id="wrapper">
              <Header onToggleMenu={this.handleToggleMenu} />
              {children}
              <Contact />
              <Footer />
            </div>
            <Menu onToggleMenu={this.handleToggleMenu} />
          </div>
        )}
      />
    )
  }
}

Template.propTypes = {
  children: PropTypes.object,
}

export default Template
