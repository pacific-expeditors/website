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
        role="link"
        tabIndex={0}
        className="logo-link"
        to="/"
      >
        <img className="logo-img" src={logo.file.url} alt={logo.description} />
        <img className="logo-img-mobile" src={mobileLogo.file.url} alt={logo.description} />
      </Link>
    </h1>
    <label htmlFor="menu-toggle" className="hamburger-icon-container">
      <input type="checkbox" className="hamburger-menu-toggle" id="menu-toggle" hidden aria-hidden="true" />

      <a tabIndex={0} aria-label="Menu" role="button" className="hamburger-icon">
      </a>

      <div className="main-nav" aria-hidden="true">
        <nav className="main-nav-container" role="navigation">
          {navigationLinks.map(navLink => (
            <Link key={navLink.href} className="main-nav-link" to={navLink.href} role="link" tabIndex={0}>{navLink.text}</Link>
          ))}
        </nav>
      </div>
    </label>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  mobileLogo: PropTypes.object,
  logo: PropTypes.object,
  navigationLinks: PropTypes.array
}

Header.defaultProps = {
  siteTitle: ``,
  mobileLogo: {},
  logo: {},
  navigationLinks: []
}

export default Header
