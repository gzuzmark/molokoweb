import React from "react"
import { Link } from "gatsby"

const Navlinks = props => {
  let tempTabIndex
  if (props.isMobileLink) {
    tempTabIndex = "-1"
  }
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link" tabIndex={tempTabIndex}>
          <span role="img" aria-label="podcasts">
            🎧 Podcasts
          </span>
        </Link>
      </li>
      <li>
        <Link to="/about" className="link" tabIndex={tempTabIndex}>
          <span role="img" aria-label="blog">
            📒 Blog
          </span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link" tabIndex={tempTabIndex}>
          <span role="img" aria-label="blog">
            🧔🏻 Contacto
          </span>
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks
