import React from "react";
import { InfoSection, ContactForm } from "../../components";
import { aboutMe, laboratory, technologies } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection data={aboutMe} key={aboutMe.id} />
      <InfoSection data={laboratory} key={laboratory.id} />
      <InfoSection data={technologies} key={technologies.id} />
      <ContactForm key={"contact"} variantColor={true} />
    </>
  );
};

export default Home;
