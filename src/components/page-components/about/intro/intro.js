import React from "react";

import { Container } from "../../../common/container";
import Text from "../../../common/text";

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
        I am a proud nurse, working as an intensive care nurse in a hospital in
        Berlin. I have been living in Germany for 6 years. I am originally from
        the beautiful Himalayas in Nepal.
      </Text>

      <Text
        as="p"
        color="var(--white)"
        maxWidth="900px"
        margin="1.2rem auto"
        fontSize="1.2rem"
      >
        I got my bachelor's degree in nursing in my birth country, Nepal. I
        worked there for around one year in a hospital. After unsatisfactory
        results in economic as well as work-life aspects of my life, I decided
        for a foreign employment.
      </Text>

      <Text
        as="p"
        color="var(--white)"
        maxWidth="900px"
        margin="0 auto"
        fontSize="1.2rem"
      >
        Then I went to Germany for better employment opportunity. The process
        was not easy, especially for me at those days as a foreigner in a
        foreign country, to cope with German bureaucracy in order to register
        myself and work as a German nurse. The time it took was also a lot. But
        finally I am officially registered as a "Gesundheits- und
        Krankenpflegerin".
      </Text>
    </Container>
  );
};

export default AboutMe;
