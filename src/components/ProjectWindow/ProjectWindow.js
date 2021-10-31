import React, { useState, useRef } from "react";

import { BiCode, BiWorld } from "react-icons/bi";

import {
  ProjectContainer,
  Project,
  ProjectTitle,
  ProjectSubtitle,
  ProjectDescription,
  ProjectLinks,
  ProjectLink,
  ProjectImageWrapper,
  ProjectImage,
  ProjectImages,
  ProjectImageViewer,
  ProjectImageViewerImage,
  ProjectImageViewerContainer,
  ProjectPharagraph,
  ProjectCloseButton,
} from "./ProjectWindows.element";

const ProjectWindow = ({ item, closeWindow }) => {
  const [imageURL, setImageURL] = useState(null);
  const projectContainerRef = useRef(null);

  const checkClickOutside = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(projectContainerRef.current);
    e.target === projectContainerRef.current && closeWindow();
  };

  return (
    <ProjectContainer ref={projectContainerRef} onClick={checkClickOutside}>
      <Project key={item.id}>
        <ProjectTitle>{item.title}</ProjectTitle>
        <ProjectSubtitle>{item.subtitle}</ProjectSubtitle>
        <ProjectImages>
          {item.images?.map((image) => (
            <ProjectImageWrapper>
              <ProjectImage
                src={image.src}
                alt={image.alt}
                onClick={(e) => setImageURL(image.srchd)}
              />
            </ProjectImageWrapper>
          ))}
        </ProjectImages>
        <ProjectDescription>
          {item.description.map((pharagraph) => (
            <ProjectPharagraph>{pharagraph}</ProjectPharagraph>
          ))}
        </ProjectDescription>
        <ProjectLinks>
          {item.githubLink && (
            <ProjectLink href={item.githubLink} target="_blank">
              <BiCode />
              Código
            </ProjectLink>
          )}
          <ProjectLink href={item.link} target="_blank">
            <BiWorld />
            Visitar
          </ProjectLink>
        </ProjectLinks>
        <ProjectCloseButton onClick={closeWindow}>Cerrar</ProjectCloseButton>
      </Project>

      {imageURL && (
        <ProjectImageViewerContainer onClick={(e) => setImageURL(null)}>
          <ProjectImageViewer>
            <ProjectCloseButton onClick={(e) => setImageURL(null)}>
              Cerrar
            </ProjectCloseButton>
            <ProjectImageViewerImage src={imageURL} />
          </ProjectImageViewer>
        </ProjectImageViewerContainer>
      )}
    </ProjectContainer>
  );
};

export default ProjectWindow;
