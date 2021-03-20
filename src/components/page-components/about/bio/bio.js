import React from "react";
import { Container, Content, Holder } from "../../../common/container";
import Text from "../../../common/text";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  return (
    <Container>
      <Content>
        <Holder>
          <Text as="p" color="var(--white)" padding="3rem 6rem">
            Laboris commodo incididunt ullamco sint sit anim id. Nulla aliquip
            nulla nisi nostrud anim elit pariatur irure eiusmod ea reprehenderit
            nostrud adipisicing duis. Ex nulla amet tempor cupidatat occaecat.
            Sit irure cillum cupidatat nulla quis et. Ullamco ad id ut in cillum
            officia labore aliqua dolor do. Magna anim duis do aliqua excepteur
            nostrud. In elit et nulla reprehenderit est sint elit quis
            consectetur.
          </Text>
        </Holder>
        <Holder>
          <StaticImage
            src="../../../../images/sabina.png"
            alt="my image"
            height="100%"
          />
        </Holder>
      </Content>
    </Container>
  );
};

export default Bio;