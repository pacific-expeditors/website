import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './footer.css'

const Footer = ({ copyright }) => (
  <div className="footer-container">
    <div className="copyright">
      <img src="" alt="" className="copyright-logo" />
      <small className="copyright-text">{copyright}</small>
    </div> 
    <nav role="navigation" className="footer-links">
      
    </nav>
    <nav role="navigation" className="social-media-links">
      
    </nav>
  </div>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
