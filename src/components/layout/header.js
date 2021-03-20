import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Sling as Hamburger, Sling } from "hamburger-react";

const Head = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const H3 = styled.h3`
  font-family: "Sign";
  font-size: 5rem;
  margin-left: 5rem;
  display: inline;
  font-weight: 300;
  color: var(--dark);
  &:hover {
    color: var(--pink-dark);
  }
`;

const Nav = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: var(--dark);
  font-size: 1.5rem;
  margin: 0 1.5rem;
  font-weight: 300;

  &:hover {
    color: var(--white);
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Head>
      <Hamburger
        direction="left"
        size={80}
        duration={0.3}
        easing="ease-in"
        toggled={isOpen}
        toggle={setOpen}
        color="var(--white)"
        style={{marginLeft: "1rem"}}
      />
      <NavLink to="/">
        <H3>Sabina lama</H3>
      </NavLink>
      <Nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/germany">How to Germany</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/video">Video</NavLink>
      </Nav>
    </Head>
  );
};

export default Header;
