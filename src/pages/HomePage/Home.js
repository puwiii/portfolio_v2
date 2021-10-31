import React from "react";
import { InfoSection, ContactForm } from "../../components";
import GridItems from "../../components/GridItems/GridItems";
import { aboutMe, laboratory, technologies } from "./data";

const Home = () => {
  return (
    <>
      <InfoSection data={aboutMe} key={aboutMe.id} />
      <InfoSection data={technologies} key={technologies.id} />
      <GridItems />
      <InfoSection data={laboratory} key={laboratory.id} />
      <ContactForm key={"contact"} variantColor={false} />
    </>
  );
};

export default Home;
