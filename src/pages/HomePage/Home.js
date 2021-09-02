import React from "react";
import { Section } from "../../components";
import { aboutMe } from "./data";

const Home = () => {
  return (
    <>
      <Section data={aboutMe} key={aboutMe.id} />
      <Section data={aboutMe} key={23} />
      <Section data={aboutMe} key={25} propId="contact" />
      <Section data={aboutMe} key={53} />
    </>
  );
};

export default Home;
