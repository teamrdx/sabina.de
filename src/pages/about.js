import React from "react";
import Layout from "../components/layout/layout";
import Bio from "../components/page-components/about/bio/bio";
import AboutMe from "../components/page-components/about/intro/intro";

const About = () => {
  return (
    <Layout>
      <AboutMe/>
      <Bio/>
    </Layout>
  );
};

export default About;
