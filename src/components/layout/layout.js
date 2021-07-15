import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Header from "./header";
import "@fontsource/open-sans";
import "@fontsource/open-sans/300.css";
import "../../css/typography.css";
import Footer from "./footer";

const GlobalStyle = createGlobalStyle`
${normalize}
:root {
  --black: #000000;
  --white: #fff8eb;
  --dark: #050410;

  --gray-dark: #ebc6d4;
  --gray-light: #ffe5f4;

  --pink-light: #ffb0dc;
  --pink-dark: #cd6d92;


  background: #ee9ca7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffdde1, #ee9ca7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ffdde1, #ee9ca7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  
 color: var(--dark);

 
}

body, header, footer {
    font-family: "Open Sans", "Sign", serif;
   
}



`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
  min-height: 90vh;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
