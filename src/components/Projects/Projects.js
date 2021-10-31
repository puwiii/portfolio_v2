import React, { useState } from "react";

import {
  ProjectsSection,
  ProjectsContainer,
  ProjectBanner,
  ProjectImage,
} from "./Projects.elements";

import { projects } from "./data";
import { useModal } from "../../hooks/useModal";
import ProjectWindow from "../ProjectWindow/ProjectWindow";

const Projects = () => {
  const [isOpenPopup, openPopup, closePopup] = useModal(false);
  const [projectWindow, setProjectWindow] = useState(null);

  const openProject = (project) => {
    setProjectWindow(project);
    openPopup();
  };

  return (
    <ProjectsSection>
      <ProjectsContainer>
        {/* <Title>Mis proyectos</Title> */}

        {projects.map((item) => (
          <ProjectBanner onClick={(e) => openProject(item)}>
            <ProjectImage src={item.banner} alt={item.alt} />
          </ProjectBanner>
        ))}
      </ProjectsContainer>
      {isOpenPopup && (
        <ProjectWindow item={projectWindow} closeWindow={closePopup} />
      )}
    </ProjectsSection>
  );
};

export default Projects;
