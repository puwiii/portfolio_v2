import React, { useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { BiCode, BiWorld } from "react-icons/bi";

import {
  ProjectsSection,
  ProjectsContainer,
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
} from "./Projects.elements";

import { projects } from "./data";

const Projects = () => {
  const [imageURL, setImageURL] = useState(null);

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            0: 1,
            960: 2,
          }}
        >
          <Masonry gutter="80px">
            {projects.map((item) => (
              <Project key={item.id}>
                <ProjectTitle>{item.title}</ProjectTitle>
                <ProjectSubtitle>{item.subtitle}</ProjectSubtitle>
                <ProjectImages>
                  {item.images.map((image) => (
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
              </Project>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </ProjectsContainer>

      {imageURL && (
        <ProjectImageViewerContainer onClick={(e) => setImageURL(null)}>
          <ProjectImageViewer>
            {/* <ProjectImageViewerButton onClick={(e) => setImageURL(null)}>
              Cerrar
            </ProjectImageViewerButton> */}
            <ProjectImageViewerImage src={imageURL} />
          </ProjectImageViewer>
        </ProjectImageViewerContainer>
      )}
    </ProjectsSection>
  );
};

export default Projects;
