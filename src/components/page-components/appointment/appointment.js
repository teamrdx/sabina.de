import React from "react";
import styled from "styled-components";
import { SiGooglecalendar } from "react-icons/si";

const ExternalLink = styled.a`
  text-decoration: none;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    color: green;
    transition: all 0.6s linear;
  }
`;

const BookNow = styled.div`
  margin: 0.6rem 0;
  fontsize: 0.9rem;
  text-align: center;
`;
const BookNowSup = styled.sup`
  color: var(--pink-dark);
  &:hover {
    color: var(--white);
    transition: all 0.6s linear;
  }
`;

const BookNowButton = () => {
  return (
    <ExternalLink
      href="https://calendly.com/sabinalama"
      rel="nofollow"
      target="_blank"
    >
      <SiGooglecalendar size={30} />
      <BookNow>
        Book<BookNowSup> now</BookNowSup>
      </BookNow>
    </ExternalLink>
  );
};

export default BookNowButton;
