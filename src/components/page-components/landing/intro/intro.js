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
`;

const Intro = () => {
  return (
    <Container>
      <Content>
        <Img>
          <StaticImage
            src="../../../../images/sabina.png"
            alt="sabina"
            height="100%"
          />
        </Img>
        <TextBox>
          <Text
            as="h1"
            color="var(--dark)"
            fontSize="5rem"
            textTransform="uppercase"
          >
            Sabina Lama
          </Text>
          <Text as="p" color="var(--white)" letterSpacing="3px">
            Proud Nurse | Helping Nurses Succeed
          </Text>
          <NavLink to="/about">
            {" "}
            <PrimaryBtn hover="white">About me</PrimaryBtn>{" "}
          </NavLink>
        </TextBox>
      </Content>
    </Container>
  );
};

export default Intro;
