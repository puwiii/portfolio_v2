import styled from "styled-components";
import { Container, Button, LinkButton } from "../../globalStyles";

export const StyledSection = styled.section`
  width: 100%;
  padding: 150px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ variantColor, theme }) =>
    variantColor ? theme.color_text : theme.color_background};

  @media screen and (max-width: 960px) {
    padding: 100px 0;
  }
`;

export const SectionContainer = styled(Container)`
  display: flex;
  flex-direction: ${({ variantLayout }) =>
    variantLayout ? "row-reverse" : "row"};
  align-items: flex-start;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const SectionImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  flex: 1;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.color_blue_200 + "13"};
  padding: 20px 0;
`;

export const SectionImage = styled.img`
  width: 80%;
  height: 100%;
  margin-top: auto;
  object-fit: contain;
`;

export const SectionAnimation = styled.div`
  width: 80%;
  max-height: 400px;
  margin: auto;
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
  color: ${({ theme }) => theme.color_text};
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionHeading = styled.h6`
  font-size: 0.8rem;
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
  color: ${({ theme }) => theme.color_text};
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
