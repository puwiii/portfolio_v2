import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

import {
  ConstructionSection,
  ConstructionContainer,
  ConstructionAnimationWrapper,
  ConstructionAnimation,
  ConstructionInfo,
  ConstructionTitle,
  ConstructionSubtitle,
  ConstructionButtonsWrapper,
  ConstructionButton,
  ConstructionLink,
  ConstructionCode,
  ConstructionAnimationAttr,
} from "./Construction.elements";

import { BiHomeAlt, BiArrowBack, BiLinkExternal } from "react-icons/bi";
import { useHistory } from "react-router";

const Construction = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require(`../../animations/construction.json`),
    });
  }, []);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <ConstructionSection>
      <ConstructionContainer variantLayout={false}>
        <ConstructionAnimationWrapper>
          <ConstructionAnimation ref={lottieContainer}>
            <ConstructionAnimationAttr
              href="https://lottiefiles.com/vik4graphic"
              target="_blank"
            >
              <BiLinkExternal /> Author · vik4graphic
            </ConstructionAnimationAttr>
          </ConstructionAnimation>
        </ConstructionAnimationWrapper>
        <ConstructionInfo>
          <ConstructionCode>404.</ConstructionCode>
          <ConstructionTitle>Página en construcción</ConstructionTitle>
          <ConstructionSubtitle>
            Esta página se encuentra actualmente en construcción.
          </ConstructionSubtitle>
          <ConstructionButtonsWrapper>
            <ConstructionButton onClick={goBack}>
              <BiArrowBack />
              Volver atras
            </ConstructionButton>
            <ConstructionLink to={"/"}>
              <BiHomeAlt />
              Ir al inicio
            </ConstructionLink>
          </ConstructionButtonsWrapper>
        </ConstructionInfo>
      </ConstructionContainer>
    </ConstructionSection>
  );
};

export default Construction;
