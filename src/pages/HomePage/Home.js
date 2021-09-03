import React from "react";
import { Section } from "../../components";
import { aboutMe, laboratory, technologies } from "./data";

const Home = () => {
  return (
    <>
      <Section data={aboutMe} key={aboutMe.id} />
      <Section data={laboratory} key={laboratory.id} />
      <Section data={technologies} key={technologies.id} />
      <Section data={aboutMe} key={53} propId="contact" />
    </>
  );
};

export default Home;
