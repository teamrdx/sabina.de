import React from "react";
import styled from "styled-components";
import { ImYoutube2 } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { Link } from "gatsby";

const LINKS = [
  {
    link: "https://www.youtube.com/channel/UC1pjc7hSw7qWuHj_hng3CxQ",
    icon: <ImYoutube2 size={70} />,
  },
  {
    link: "https://www.instagram.com/i_sabina_lama/",
    icon: <AiOutlineInstagram size={50} />,
  },
  {
    link: "https://www.tiktok.com/@sabinalama2710?",
    icon: <SiTiktok size={50} />,
  },
];

const Foot = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
 
`;
const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const H3 = styled.h3`
  font-weight: 300;
  margin: 0;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 0.8rem;
  &:hover {
    color:#34d9d9;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: #34d9d9;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <H3>Follow me</H3>
      <Social>
        {LINKS.map((item, index) => (
          <A
            href={item.link}
            key={index}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.icon}
          </A>
        ))}
      </Social>
      <H3>
        &copy; {new Date().getFullYear()} Sabina Lama |{" "}
        <NavLink to="/imprint">Impressum</NavLink>
      </H3>
    </Foot>
  );
};

export default Footer;
