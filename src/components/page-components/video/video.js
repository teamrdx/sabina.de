import React from "react";
import styled from "styled-components";
import { Container } from "../../common/container";
import Text from "../../common/text";
import { FaPlayCircle } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";
import { DATA } from "./data";

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  @media (max-width: 70rem) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

const Box = styled.div`
  height: 27rem;
  width: 21rem;
  position: relative;
  border-radius: 5px;
  background: var(--gray-dark);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  background: var(--dark);
  opacity: 0.4;
  height: 5rem;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  margin-top: 2rem;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.3;
  height: 80%;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    transition: all 0.1s ease;
  }
`;

const A = styled.a`
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

const Gallery = () => {
  return (
    <Container>
      <Text as="h1" color="var(--dark)" textAlign="center" margin="3rem auto">
        My videos
      </Text>
      <Content>
        {DATA.map((item, index) => (
          <Thumbnail
            key={index}
            url={item.url}
            title={item.title}
            alt={item.alt}
          />
        ))}
      </Content>
    </Container>
  );
};

const Thumbnail = ({ url, title, alt }) => {
  return (
    <Box>
      <StaticImage src="" alt={alt} height="100%" />
      <A href={url} target="_blank">
        <Icon>
          <FaPlayCircle size={150} />
        </Icon>
        <TextBox>
          <Text
            as="p"
            color="var(--pink-light)"
            fontSize="1.5rem"
            width="100%"
            height="100%"
            margin="0 auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {title}
          </Text>
        </TextBox>
      </A>
    </Box>
  );
};

export default Gallery;
