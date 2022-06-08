import React from "react";
import styled from "styled-components";
import { Container } from "../../../common/container";
import Text from "../../../common/text";
import { StaticImage } from "gatsby-plugin-image";
import BookNowButton from "../../appointment/appointment";

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
        <div>
          <Text
            as="h2"
            color="var(--white)"
            margin="3rem auto"
            textAlign="center"
          >
            Motivation
          </Text>
          <Text
            as="p"
            color="var(--white)"
            padding="0"
            fontSize="1.2rem"
            maxWidth="600px"
          >
            Helping you succeed is my main motto.
          </Text>
          <br />
          <Text as="p" padding="0" fontSize="1.2rem" maxWidth="600px">
            After opening my YouTube channel, a lot of nurses as well as
            students have contacted me frequently to get help from me. I have
            created over 50 videos in my channel to help you understand
            everything related to nursing in Germany.
          </Text>
          <br />
          <Text as="p" padding="0" fontSize="1.2rem" maxWidth="600px">
            I have struggled a lot while finding the best ways to get registered
            and work as a registered nurse in Germany, and I don't want you to
            struggle with those complicated process.
          </Text>
          <br />
          <Text as="p" padding="0" fontSize="1.2rem" maxWidth="600px">
            Everyone is different by itself and have different problems to
            solve. I want to help you all, but because of limited time, I can
            only help who comes to me through booking an appointment. First come
            first serve policy.
          </Text>
          <br />
          <BookNowButton />
          <Text
            as="p"
            color="var(--white)"
            padding="0"
            fontSize="1.2rem"
            maxWidth="600px"
            fontStyle="italic"
            margin=" 0.9rem 0"
          >
            <sup>
              Please note because of a lot of queries in social media, I might
              not respond to all. I recommend you all to book a 30-min free
              support video call and let's figure out how to solve your problem.
            </sup>
          </Text>
        </div>

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
