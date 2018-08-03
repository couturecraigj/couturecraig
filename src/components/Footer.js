import React from 'react'
import SocialButton from './SocialButton'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <SocialButton
          href="https://www.twitter.com/couturecraigj"
          type="twitter"
        >
          Twitter
        </SocialButton>
        <SocialButton
          href="https://www.instagram.com/couturecraig/"
          type="instagram"
        >
          Instagram
        </SocialButton>
        <SocialButton href="https://www.github.com/couturecraigj" type="github">
          GitHub
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/craigcouture/"
          type="linkedin"
        >
          LinkedIn
        </SocialButton>
      </ul>
      <ul className="copyright">
        <li>
          Copyright &copy; {new Date().getFullYear()}{' '}
          <a
            href="https://github.com/couturecraigj"
            className="underline--magical"
          >
            Craig Couture
          </a>
        </li>
        <li>
          Design:{' '}
          <a href="https://html5up.net" className="underline--magical">
            HTML5 UP
          </a>
        </li>
        <li>
          Built-with:{' '}
          <a href="https://www.gatsbyjs.org/" className="underline--magical">
            Gatsby
          </a>{' '}
          &amp;{' '}
          <a href="https://wordpress.com/" className="underline--magical">
            WordPress
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
