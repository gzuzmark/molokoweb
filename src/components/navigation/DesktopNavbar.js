import React from "react"
import styled from "styled-components"
import Navlinks from "./Navlinks"
import { Burger } from "./MenuBurger"

const MyDesktopNavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  background: var(--background);
  color: white;
  height: 5rem;

  box-shadow: var(--nav-shadow);

  /* .logo {
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 3px 3px 3px ${props => props.theme.colors.accent};
  } */

  @media screen and (max-width: 768px) {        
      justify-content: space-evenly;      
  }

  .logo {
    font-size: 1.2em;
    cursor: pointer;
    outline: none;    
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 30rem;
    list-style: none;
    margin-bottom: 0px;

    @media screen and (max-width: 768px) {
      display: none;      
      justify-content: space-evenly;
      
    }
  }

  .link {
    color: white;
    font-size: 1rem;
    text-decoration: none;
    margin-bottom: 0px;
  }
`

const MovileNavButton = styled.button`
  background: transparent;
  height: 2rem;
  width: 2rem;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const DesktopNavbar = ({ open, setOpen }) => {
  return (
    <MyDesktopNavBar>
      <Burger open={open} setOpen={setOpen} />
      <span className="logo">🎙️ Moloko Podcast</span>
      <Navlinks />
    </MyDesktopNavBar>
  )
}

export default DesktopNavbar
