import styled from "styled-components";
import { Container, Button, LinkButton, Section } from "../../globalStyles";

export const ProjectsSection = styled(Section)``;

export const ProjectsContainer = styled(Container)``;

export const Project = styled.div`
  color: ${({ theme }) => theme.color_text_400};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px;
  background: ${({ theme }) => theme.color_background_00};
  //box-shadow: 0 10px 1rem -5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;

  backdrop-filter: blur(0px);
  //box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.2);
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.color_text_400};
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  width: max-content;
  position: relative;

  &::before {
    content: "";
    width: 90%;
    height: 50%;
    position: absolute;
    top: calc(100% - 35%);
    border-radius: 2px;
    left: 10px;
    z-index: -1;
    background: ${({ theme }) => theme.color_blue_400 + "22"};
  }

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -1.5px;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const ProjectSubtitle = styled.h4`
  font-size: 1rem;
  letter-spacing: -0.5px;
  font-weight: 600;
  color: ${({ theme }) => theme.color_pink_200};
`;

export const ProjectDescription = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProjectPharagraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;

  text-align: justify;
  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const ProjectImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProjectImageWrapper = styled.div`
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  position: relative;

  /* &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 400;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 30%,
      ${({ theme }) => theme.color_background_400} 99%
    );
  } */
`;

export const ProjectImage = styled.img`
  object-fit: contain;
  width: 100%;
  cursor: pointer;
  opacity: 0.9;
  height: auto;
`;

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 20px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ProjectLink = styled(LinkButton)`
  width: 100%;
  font-size: 1rem;
  @media screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const ProjectImageViewerContainer = styled.div`
  background: ${({ theme }) => theme.color_background_400 + "aa"};
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;

export const ProjectImageViewer = styled.div`
  max-height: 90%;
  overflow-y: auto;
  width: auto;
  max-width: 1920px;
  /* background: ${({ theme }) => theme.color_background_400}; */
  display: flex;
  gap: 10px;
  flex-direction: column;
  position: relative;
`;

export const ProjectImageViewerButton = styled(Button)`
  align-self: flex-end;
  position: sticky;
  top: 5px;
  right: 5px;
`;
export const ProjectImageViewerImage = styled.img`
  width: 100%;
  max-width: 90vw;
  margin: auto;
`;
