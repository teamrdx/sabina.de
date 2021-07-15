import React from "react";
import styled from "styled-components";
import { Container, Content } from "../../../common/container";
import Text from "../../../common/text";

const StyledContent = styled(Content)`
    flex-direction: column;
`;

const AboutMe = () => {
  return (
    <Container>
      <Text as="h1" color="var(--dark)" margin="3rem auto" textAlign="center">
        About me
      </Text>
      <Text
        as="p"
        color="var(--white)"
        maxWidth="900px"
        margin="0 auto"
        fontSize="1.2rem"
      >
        Sint cupidatat ipsum est cupidatat ullamco sint ut nulla dolore fugiat.
        Ex est esse pariatur est deserunt ea voluptate adipisicing quis proident
        minim. Duis minim amet sint aliqua reprehenderit tempor amet aliquip
        nisi enim ullamco nulla excepteur. Eiusmod nostrud quis est aute nisi ea
        ex. Lorem non nulla minim nostrud et aliquip aliqua ut quis ullamco
        veniam.
      </Text>

      <Text
        as="p"
        color="var(--white)"
        maxWidth="900px"
        margin="1.2rem auto"
        fontSize="1.2rem"
      >
        Sint cupidatat ipsum est cupidatat ullamco sint ut nulla dolore fugiat.
        Ex est esse pariatur est deserunt ea voluptate adipisicing quis proident
        minim. Duis minim amet sint aliqua reprehenderit tempor amet aliquip
        nisi enim ullamco nulla excepteur. Eiusmod nostrud quis est aute nisi ea
        ex. Lorem non nulla minim nostrud et aliquip aliqua ut quis ullamco
        veniam.
      </Text>

      <Text
        as="p"
        color="var(--white)"
        maxWidth="900px"
        margin="0 auto"
        fontSize="1.2rem"
      >
        Sint cupidatat ipsum est cupidatat ullamco sint ut nulla dolore fugiat.
        Ex est esse pariatur est deserunt ea voluptate adipisicing quis proident
        minim. Duis minim amet sint aliqua reprehenderit tempor amet aliquip
        nisi enim ullamco nulla excepteur. Eiusmod nostrud quis est aute nisi ea
        ex. Lorem non nulla minim nostrud et aliquip aliqua ut quis ullamco
        veniam.
      </Text>
    </Container>
  );
};

export default AboutMe;
