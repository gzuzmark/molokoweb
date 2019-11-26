import React from "react"
import styled from "styled-components"
import Navlinks from "./Navlinks"

const MyMobileNavbar = styled.nav`
  width: 450px;
  background: var(--background);
  box-shadow: var(--sidenav-shadow);
  align-self: flex-start;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 20rem;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  box-shadow: var(--nav-shadow);

  @media (max-width: 576px) {
    width: 100%;
  }

  li {
    padding: 15px 10px;
    margin: 0px 0px;
    width: 100%;
  }

  .nav-links {
    display: flex;
    flex-flow: column;
    justify-content: center;
    /* align-items: center; */

    list-style: none;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 20rem;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    /* @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    } */
  }

  .link {
    color: var(--text-color);
    font-size: 2rem;
    text-decoration: none;
    /* max-width: 50%; */
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const MobileNavbar = ({ open }) => {
  return (
    <MyMobileNavbar open={open}>
      <Navlinks isMobileLink={true} />
    </MyMobileNavbar>
  )
}

export default MobileNavbar
