import React, { useState } from "react";

import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

import { Links, Link, LinkLabel } from "./FloatLinks.elements";

import { removeFocus } from "../../helpers/removeFocus";

const FloatLinks = () => {
  const [showGithubLink, setShowGithubLink] = useState(false);
  const [showLinkedinLink, setShowLinkedinLink] = useState(false);

  return (
    <Links>
      <Link
        variant="github"
        href="https://github.com/puwiii/"
        target="_blank"
        onClick={(e) => removeFocus(e)}
        onMouseEnter={(e) => setShowGithubLink(true)}
        onMouseLeave={(e) => setShowGithubLink(false)}
      >
        <RiGithubLine />
        <LinkLabel show={showGithubLink}>Mi Github</LinkLabel>
      </Link>
      <Link
        variant="linkedin"
        href="https://www.linkedin.com/in/sebastian-mathieur/"
        target="_blank"
        onClick={(e) => removeFocus(e)}
        onMouseEnter={(e) => setShowLinkedinLink(true)}
        onMouseLeave={(e) => setShowLinkedinLink(false)}
      >
        <RiLinkedinLine />
        <LinkLabel show={showLinkedinLink}>Mi Linkedin</LinkLabel>
      </Link>
    </Links>
  );
};

export default FloatLinks;
