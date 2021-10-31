import styled from "styled-components";
import { Container, Section } from "../../globalStyles";

export const ProjectsSection = styled(Section)``;

export const ProjectsContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color_text_400};
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  width: max-content;
  position: relative;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const ProjectBanner = styled.div`
  aspect-ratio: 16 / 9;
  padding: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 96);
  border-radius: 1em;
  cursor: pointer;
  box-shadow: 0 8px 6px -5px rgba(0, 0, 0, 0.06);
`;

export const ProjectImage = styled.img`
  object-fit: contain;
  width: 100%;
  cursor: pointer;

  height: 100%;
`;
