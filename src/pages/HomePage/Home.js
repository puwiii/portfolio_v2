import React from "react";
import { InfoSection, ContactForm } from "../../components";
import GridItems from "../../components/GridItems/GridItems";
import { aboutMe, laboratory, technologies } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection data={aboutMe} key={aboutMe.id} />
      <GridItems />
      <InfoSection data={technologies} key={technologies.id} />
      <InfoSection data={laboratory} key={laboratory.id} />
      <ContactForm key={"contact"} variantColor={true} />
    </>
  );
};

export default Home;
