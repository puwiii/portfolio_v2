import styled from "styled-components";
import {
  Container,
  Button,
  Section,
  ReactLinkButton,
} from "../../globalStyles";

export const ConstructionSection = styled(Section)`
  padding: 20px 0;
  min-height: calc(100vh - 76px);
`;

export const ConstructionContainer = styled(Container)`
  display: flex;
  flex-direction: ${({ variantLayout }) =>
    variantLayout ? "row-reverse" : "row"};
  align-items: flex-start;
  align-items: stretch;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const ConstructionAnimationWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 7px;
  flex: 1;
  width: 100%;
`;

export const ConstructionAnimation = styled.div`
  width: 100%;
  margin: auto;
  position: relative;

  @media screen and (max-width: 960px) {
    width: 40%;
  }

  @media screen and (max-width: 425px) {
    width: 60%;
  }
`;

export const ConstructionAnimationAttr = styled.a`
  position: absolute;
  font-size: 0.9rem;
  gap: 5px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  text-underline-offset: 6px;
  width: max-content;
  font-weight: 600;
  color: ${({ theme }) => theme.color_pink_200};
  padding: 1em;
  border-radius: 100px;
  transition: background-color 125ms linear;
  text-decoration: underline;

  &:hover {
    background-color: ${({ theme }) => theme.color_pink_200 + "22"};
  }

  @media screen and (max-width: 425px) {
    font-size: 0.6rem;
  }
`;

export const ConstructionInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  color: ${({ variantNegative, theme }) =>
    variantNegative ? theme.color_background_400 : theme.color_text_400};

  @media screen and (max-width: 960px) {
    gap: 20px;
    text-align: center;
  }
`;

export const ConstructionCode = styled.h2`
  font-size: 10rem;
  font-weight: 900;
  letter-spacing: -2px;
  /* line-height: 1; */

  @media screen and (max-width: 960px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 425px) {
    font-size: 4rem;
  }
`;

export const ConstructionTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1;

  @media screen and (max-width: 960px) {
    letter-spacing: -0.2px;
    font-size: 1.5rem;
  }
`;

export const ConstructionSubtitle = styled.h4`
  font-size: 1rem;
  letter-spacing: -0.5px;
  font-weight: 600;
`;

export const ConstructionButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ConstructionButton = styled(Button)`
  font-size: 1rem;
  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const ConstructionLink = styled(ReactLinkButton)`
  font-size: 1rem;
  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`;
