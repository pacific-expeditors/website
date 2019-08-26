import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import SEO from './SEO'
import './header.css'

const Header = ({ siteTitle, mobileLogo, logo, navigationLinks }) => (
  <div className="header-container">
    <SEO title={siteTitle} />
    <h1>
      <Link
        className="logo-link"
        to="/"
      >
        <img className="logo-img" src={logo.file.url} alt={logo.description} />
      </Link>
    </h1>
    <div className="hamburger-icon-container">
      <a className="hamburger-icon">
      </a>
    </div>
    
    {/* <nav>

    </nav> */}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
