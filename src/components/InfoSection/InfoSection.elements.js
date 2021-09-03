import styled from "styled-components";
import { Container, Button, LinkButton, Section } from "../../globalStyles";

export const StyledSection = styled(Section)``;

export const SectionContainer = styled(Container)`
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

export const SectionImageWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  border-radius: 7px;
  flex: 1;
  width: 100%;
`;

export const SectionImage = styled.img`
  width: 80%;
  height: 100%;
  margin-top: auto;
  object-fit: contain;
  padding: 20px;
`;

export const SectionImageSVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  & > svg {
    aspect-ratio: 1/1;
    height: 100%;
    width: 100%;
  }
`;

export const SectionAnimation = styled.div`
  width: 80%;
  margin: auto;
  position: relative;
`;

export const SectionAnimationAttr = styled.a`
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
`;

export const SectionImagePlaceholder = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color_blue_200 + "17"};
`;

export const SectionInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ variantNegative, theme }) =>
    variantNegative ? theme.color_background_400 : theme.color_text_400};
`;

export const SectionHeading = styled.h6`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${({ theme }) => theme.color_blue_200};
  border-radius: 100px;
  background: ${({ theme }) => theme.color_blue_200 + "22"};
  padding: 10px 20px;
  margin-right: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -2px;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.h4`
  font-size: 1rem;
  letter-spacing: -0.5px;
  font-weight: 600;
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 0;
  @media screen and (max-width: 768px) {
    text-align: justify;
  }
`;

export const SectionPharagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
`;

export const SectionButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const SectionLink = styled(LinkButton)``;

export const SectionButton = styled(Button)``;
