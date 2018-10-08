import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Strong = styled.div`
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: #ddd;
  display: inline-block;
  line-height: 0.5em;
  margin: 0.75vw 0 0 0.5vw;
  padding: 0 1.4vw;
  border-radius: 0.125em;
  &:hover {
    background-color: #9bf1ff !important;
  }
  img {
    /* height: 20%; */
    width: calc(1.5vw + 25px);
  }
`

const query = graphql`
  {
    file(absolutePath: { regex: "/Logo/" }) {
      id
      childImageSharp {
        resize(width: 61) {
          src
        }
      }
    }
  }
`

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <StaticQuery
        query={query}
        render={data => (
          <Strong>
            <img src={data.file.childImageSharp.resize.src} />
          </Strong>
        )}
      />
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
