import React, { useState } from "react";
import { Container, Content, Holder } from "../../../common/container";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import Text from "../../../common/text";
import BookNowButton from "../../appointment/appointment";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async ({ name, email, message }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    await fetch("https://getform.io/f/d04fbbdb-35ad-4ead-b329-9cbb5cf1e800", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          setIsSubmitted(true);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong! Form is not submitted!");
      });
  };

  return (
    <Container>
      {isSubmitted ? (
        <Content>
          <Holder>
            <Text as="p" textAlign="center" margin="2rem">
              Thank you for contacting me! I will be replying you soon.
              Meanwhile if you want to book appointment with me, please click
              below.
            </Text>
            <BookNowButton />
          </Holder>
        </Content>
      ) : (
        <Content>
          <Holder>
            <Text as="h1" textAlign="center" margin="2rem">
              Drop me your queries
            </Text>
            <BookNowButton />
          </Holder>
          <Holder>
            <FormItem onSubmit={handleSubmit(onSubmit)}>
              <Fieldset>
                <Legend>Your information</Legend>
                <label htmlFor="username">
                  Your Name:
                  <Input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Sabina Lama"
                  />
                  {errors.name && (
                    <p style={{ marginTop: "0.1rem", color: "red" }}>
                      {" "}
                      * This is required
                    </p>
                  )}
                </label>
                <label htmlFor="email">
                  Email:
                  <Input
                    type="email"
                    placeholder="myEmail@email.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p style={{ marginTop: "0.1rem", color: "red" }}>
                      {" "}
                      * This is required
                    </p>
                  )}
                </label>
                <label htmlFor="message">
                  Your Message:
                  <Textarea
                    type="text"
                    placeholder="Message"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <p style={{ marginTop: "0.1rem", color: "red" }}>
                      {" "}
                      * This is required
                    </p>
                  )}
                </label>
                <Button type="submit" />
              </Fieldset>
            </FormItem>
          </Holder>
        </Content>
      )}
    </Container>
  );
};

export default Form;
