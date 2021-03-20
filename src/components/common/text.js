import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${props => props.maxWidth};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  text-align: ${(props) => props.textAlign};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  letter-spacing: ${(props) => props.letterSpacing};
  text-transform: ${(props) => props.textTransform};
`;

const Text = ({ type, fontWeight = "300", margin="0", children, ...props }) => {
  return (
    <StyledHeader as={type} fontWeight={fontWeight} margin={margin} {...props}>
      {children}
    </StyledHeader>
  );
};

export default Text;
