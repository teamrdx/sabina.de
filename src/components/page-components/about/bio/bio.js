import React from "react";
import styled from "styled-components";
import { Container } from "../../../common/container";
import Text from "../../../common/text";
import { StaticImage } from "gatsby-plugin-image";

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  align-items: center;
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 3rem;
  } ;
`;

const Bio = () => {
  return (
    <Container>
      <Content>
        <Text as="p" color="var(--white)" padding="0" fontSize="1.2rem" maxWidth="600px">
          Laboris commodo incididunt ullamco sint sit anim id. Nulla aliquip
          nulla nisi nostrud anim elit pariatur irure eiusmod ea reprehenderit
          nostrud adipisicing duis. Ex nulla amet tempor cupidatat occaecat. Sit
          irure cillum cupidatat nulla quis et. Ullamco ad id ut in cillum
          officia labore aliqua dolor do. Magna anim duis do aliqua excepteur
          nostrud. In elit et nulla reprehenderit est sint elit quis
          consectetur.
        </Text>

        <div style={{ marginInline: "auto", gridRow: "1" }}>
          <StaticImage
            src="../../../../images/sabina.png"
            alt="my image"
            width={450}
            quality={90}
            placeholder="blurred"
            layout="constrained"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Bio;
