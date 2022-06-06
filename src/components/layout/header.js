import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { Sling as Hamburger } from "hamburger-react";

import BookNowButton from "../page-components/appointment/appointment";

const Head = styled.header`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

// const PlusMinusIcon = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const ExternalLink = styled.a`
//   text-decoration: none;
//   color: var(--white);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   &:hover {
//     color: green;
//     transition: all 0.6s linear;
//   }
// `;

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

const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  @media (min-width: 769px) {
    display: none;
  } ;
`;

const DesktopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const MobileMenuList = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  height: ${(props) => props.height};
  width: 300px;
  margin-inline: auto;
  overflow: hidden;
`;

// const MobileNestedNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   line-height: 1.5;
//   margin-left: 1.5rem;
// `;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <Head>
      <MobileMenu>
        <Hamburger
          direction="left"
          size={80}
          duration={0.3}
          easing="ease-in"
          toggled={isOpen}
          toggle={setOpen}
          color="var(--white)"
          style={{ marginLeft: "1rem" }}
        />
        <NavLink to="/" onClick={() => setOpen(false)}>
          <StaticImage
            src="../../images/logo-sabina.png"
            alt="sabina lama logo"
            placeholder="blurred"
            width={150}
            quality={100}
          />
        </NavLink>
        <BookNowButton />
      </MobileMenu>
      <MobileMenuList height={isOpen ? "100vh" : "0px"}>
        <NavLink to="/about" style={{ marginTop: "3rem" }}>
          About
        </NavLink>
        {/* <div>
          <PlusMinusIcon onClick={() => setShow(!show)}>
            <NavLink to="/germany">How to Germany</NavLink>
            {show ? (
              <AiOutlineMinusCircle size={27} color="white" />
            ) : (
              <AiOutlinePlusCircle size={27} color="white" />
            )}
          </PlusMinusIcon>
          {show && (
            <MobileNestedNav>
              <NavLink to="/aupair">Aupair</NavLink>
              <NavLink to="/fsj">FSJ/BFD</NavLink>
              <NavLink to="/ausbildung">Ausbildung</NavLink>
              <NavLink to="/nursing">Nursing</NavLink>
            </MobileNestedNav>
          )}
        </div> */}
        <NavLink to="/nursing-in-germany">Nursing in Germany</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/video">Video</NavLink>
        <NavLink to="/faq">FAQs</NavLink>
      </MobileMenuList>
      <DesktopMenu>
        <Nav>
          <NavLink to="/">
            <StaticImage
              src="../../images/logo-sabina.png"
              alt="sabina lama logo"
              placeholder="blurred"
              layout="fixed"
              width={150}
              quality={90}
            />
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/nursing-in-germany">Nursing in Germany</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/video">Video</NavLink>
          <NavLink to="/faq">FAQs</NavLink>
          <BookNowButton />
        </Nav>
      </DesktopMenu>
    </Head>
  );
};

export default Header;
