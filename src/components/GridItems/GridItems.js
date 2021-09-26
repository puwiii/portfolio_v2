import React from "react";

import {
  GridItems,
  Item,
  ItemLabel,
  ItemIcon,
  GridContainer,
} from "./GridItems.elements";

import HtmlIcon from "../../svg/HtmlIcon";
import CssIcon from "../../svg/CssIcon";
import SassIcon from "../../svg/SassIcon";
import TailwindIcon from "../../svg/TailwindIcon";
import StyledComponentsIcon from "../../svg/StyledComponentsIcon";
import JavascriptIcon from "../../svg/JavascriptIcon";
import ReactIcon from "../../svg/ReactIcon";
import NextjsIcon from "../../svg/NextjsIcon";
import NpmIcon from "../../svg/NpmIcon";
import FirebaseIcon from "../../svg/FirebaseIcon";

const Index = () => {
  return (
    <GridItems>
      <GridContainer>
        <Item>
          <ItemIcon>
            <HtmlIcon />
          </ItemIcon>
          <ItemLabel>HTML5</ItemLabel>
        </Item>

        <Item>
          <ItemIcon>
            <CssIcon />
          </ItemIcon>
          <ItemLabel>CSS 3</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <SassIcon />
          </ItemIcon>
          <ItemLabel>Sass</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <TailwindIcon />
          </ItemIcon>
          <ItemLabel>Tailwind</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <StyledComponentsIcon />
          </ItemIcon>
          <ItemLabel>Styled Comp.</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <JavascriptIcon />
          </ItemIcon>
          <ItemLabel>Javascript</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <ReactIcon />
          </ItemIcon>
          <ItemLabel>React.js</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <NextjsIcon />
          </ItemIcon>
          <ItemLabel>Next.js</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <NpmIcon />
          </ItemIcon>
          <ItemLabel>NPM</ItemLabel>
        </Item>
        <Item>
          <ItemIcon>
            <FirebaseIcon />
          </ItemIcon>
          <ItemLabel>Firebase</ItemLabel>
        </Item>
      </GridContainer>
    </GridItems>
  );
};

export default Index;
