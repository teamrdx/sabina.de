import React from "react";
import { Container, Content, Holder } from "../../../common/container";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import Text from "../../../common/text";

const FormItem = styled.form`
  display: flex;
  align-items: center;
  margin: 2rem auto;
  @media (max-width: 768em) {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 98%;
  border: none;
  height: 3rem;
  border-radius: 0.5rem;
  margin: 0.6rem auto;

  &::placeholder {
    text-align: right;
    padding-right: 2rem;
  }
  &:focus {
    outline-color: var(--pink-dark);
    width: 100%;
    border-radius: 0.3rem;
  }
`;

const Textarea = styled(Input)`
  height: 6rem;
`;

const Legend = styled.legend`
  font-size: 0.9rem;
  color: var(--dark);
  padding: 0 0.6rem;
  border-radius: 1rem;
`;

const Fieldset = styled.fieldset`
  border-color: var(--dark);
  padding: 2.5rem 0.9rem 2.5rem 1.5rem;
`;

const Button = styled(Input)`
  width: 100%;
  background: var(--dark);
  color: var(--white);

  &:hover {
    background: var(--white);
    color: var(--pink-dark);
  }
`;

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Content>
        <Holder>
          <Text as="h1" textAlign="center" margin="2rem">Drop me your queries</Text>
        </Holder>
        <Holder>
          <FormItem onSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
              <Legend>Your information</Legend>
              <label htmlFor="username">Your Name:</label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                ref={register}
              />
              <label htmlFor="email">Email: </label>
              <Input
                type="email"
                name="email"
                placeholder="email@email.com"
                ref={register({ required: true })}
              />
              {errors.email && (
                <p style={{ marginTop: "0.1rem", color: "red" }}>
                  {" "}
                  * This is required
                </p>
              )}
              <label htmlFor="message">Your Message:</label>
              <Textarea
                type="text"
                name="message"
                placeholder="Message"
                ref={register({ required: true })}
              />
              {errors.message && (
                <p style={{ marginTop: "0.1rem", color: "red" }}>
                  {" "}
                  * This is required
                </p>
              )}
              <Button type="submit" />
            </Fieldset>
          </FormItem>
        </Holder>
      </Content>
    </Container>
  );
};

export default Form;
