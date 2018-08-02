import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.twitter.com/couturecraigj"
            className="icon alt fa-twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/couturecraig/"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/couturecraigj"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/craigcouture/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a href="https://github.com/couturecraigj">Craig Couture</a>
        </li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
        <li>
          Built-with: <a href="https://www.gatsbyjs.org/">Gatsby</a> &amp;{' '}
          <a href="https://wordpress.com/">WordPress</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
