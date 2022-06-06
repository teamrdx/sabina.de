import React from "react";
import { Container, Content, Holder } from "../../common/container";
import Text from "../../common/text";

const FAQs = () => {
  return (
    <Container>
      <Content>
        <Holder style={{ width: "80%" }}>
          <Text as="h1" margin="2rem auto" color="var(--dark)">
            Frequently asked question (FAQs)
          </Text>
          <Text as="p" margin="1rem auto" color="var(--white)">
            This page is in under construction. Please visit us later.
          </Text>
          {/* <Text as="p" margin="1rem auto" color="var(--white)">
            Nisi dolor irure irure culpa labore quis. Eu aute amet mollit do.
            Reprehenderit sit quis consequat laborum. Et non cupidatat ut ut
            fugiat mollit mollit eiusmod aliquip ullamco ea.
          </Text>
          <Text as="p" margin="1rem auto" color="var(--white)">
            Nisi dolor irure irure culpa labore quis. Eu aute amet mollit do.
            Reprehenderit sit quis consequat laborum. Et non cupidatat ut ut
            fugiat mollit mollit eiusmod aliquip ullamco ea.
          </Text> */}
        </Holder>
      </Content>
    </Container>
  );
};

export default FAQs;
