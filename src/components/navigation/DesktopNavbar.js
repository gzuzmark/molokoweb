import React from "react"
import styled from "styled-components"
import Navlinks from "./Navlinks"

const MyDesktopNavBar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;

  background: ${props => props.theme.colors.base};
  color: white;
  height: 15vh;

  box-shadow: 0 10px 5px ${props => props.theme.colors.accent};

  .logo {
    font-size: 7vh;
    font-weight: bold;
    text-shadow: 3px 3px 3px ${props => props.theme.colors.accent};
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;

    width: 35vw;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .link {
    color: white;
    font-size: 2.5vh;
    text-decoration: none;
  }
`

const MovileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  border: none;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const DesktopNavbar = ({ open, setOpen }) => {
  return (
    <MyDesktopNavBar>
      <Burger open={open} setOpen={setOpen} />
      <div className="logo">Logo</div>
      <Navlinks />
      <MovileNavButton>Button</MovileNavButton>
    </MyDesktopNavBar>
  )
}

export default DesktopNavbar
