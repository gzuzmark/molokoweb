import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import DesktopNavbar from "./DesktopNavbar"
import MobileNavbar from "./MobileNavbar"
import styled from "styled-components"

const MyNavBar = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

const windowDims = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
})

export const Navbar = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      if (open && windowDims().width > 768) {
        setOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [open])
  return (
    <MyNavBar>
      <DesktopNavbar open={open} setOpen={setOpen} />
      <MobileNavbar open={open} setOpen={setOpen} />
      {/* <ResponsiveLayout
        breakPoint={768}
        renderDesktop={() => <DesktopNavbar open={open} setOpen={setOpen} />}
        renderMobile={() => <MobileNavbar open={open} setOpen={setOpen} />}
      /> */}
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
