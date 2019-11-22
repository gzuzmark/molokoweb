import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import styled from "styled-components"

const MyNavBar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

export const Navbar = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <MyNavBar>
      <DesktopNavbar open={open} setOpen={setOpen} />
      <MobileNavbar />
    </MyNavBar>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}
export default Navbar
