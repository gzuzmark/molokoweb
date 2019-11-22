import React from "react"
import { Link } from "gatsby"

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks
