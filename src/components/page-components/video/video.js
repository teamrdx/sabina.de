import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "../../common/container";
import Text from "../../common/text";
import { FaPlayCircle } from "react-icons/fa";

const Content = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: auto;
  grid-gap: 3rem;
`;

const Box = styled.div`
  height: 27rem;
  width: 270px;
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
  height: 9rem;
  width: 100%;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  margin-top: 2rem;
  padding: 0.9rem;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
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
  const data = useStaticQuery(graphql`
    {
      allYoutubeVideo {
        edges {
          node {
            title
            videoId
            publishedAt
            thumbnail {
              url
            }
          }
        }
      }
    }
  `);
  const imageUrl = data.allYoutubeVideo.edges[0].node.thumbnail.url;
  return (
    <Container>
      <Text as="h1" color="var(--dark)" textAlign="center" margin="3rem auto">
        My videos
      </Text>
      <Content>
        {data.allYoutubeVideo.edges.map((item) => (
          <Thumbnail
            key={item.node.videoId}
            url={`https://youtube.com/watch?v=${item.node.videoId}`}
            title={item.node.title}
            alt={item.node.title}
            src={imageUrl}
          />
        ))}
      </Content>
    </Container>
  );
};

const Thumbnail = ({ src, url, title, alt }) => {
  return (
    <Box>
      <GatsbyImage src={src} alt={alt} height={100} />
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
