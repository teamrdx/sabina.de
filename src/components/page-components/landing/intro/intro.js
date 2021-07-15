import React from "react";
import Text from "../../../common/text";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { PrimaryBtn } from "../../../common/button";
import { Content, Container, NavLink } from "../../../common/container";

const Img = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

const TextBox = styled.div`
  width: 50%;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1008px) {
    padding: 1.2rem 0;
    width: 100%;
  } ;
`;

const Intro = () => {
  return (
    <Container>
      <Content>
        <Img>
          <StaticImage
            src="../../../../images/sabina.png"
            alt="sabina"
            placeholder="blurred"
            layout="constrained"
            width={450}
          />
        </Img>
        <TextBox>
          <Text
            as="h1"
            color="var(--dark)"
            fontSize="5rem"
            textTransform="uppercase"
            MobfontSize="3rem"
            XsfontSize="2rem"
          >
            Sabina Lama
          </Text>
          <Text as="p" color="var(--white)" letterSpacing="3px" MobletterSpacing="0" XsfontSize=".9rem">
            Proud Nurse | Helping Nurses Succeed
          </Text>
          <NavLink to="/about">
            <PrimaryBtn hover="white">About me</PrimaryBtn>{" "}
          </NavLink>
        </TextBox>
      </Content>
    </Container>
  );
};

export default Intro;
