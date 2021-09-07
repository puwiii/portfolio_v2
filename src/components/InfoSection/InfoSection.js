import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { BUTTON_TYPE, IMG_TYPE } from "../../pages/HomePage/data";
import {
  StyledSection,
  SectionContainer,
  SectionImageWrapper,
  SectionImage,
  SectionAnimation,
  SectionImagePlaceholder,
  SectionInfo,
  SectionHeading,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  SectionPharagraph,
  SectionButtonWrapper,
  SectionButton,
  SectionLink,
  SectionAnimationAttr,
  SectionImageSVG,
} from "./InfoSection.elements";

const Section = ({ data, propId = null }) => {
  const {
    variantColor,
    variantLayout,
    variantNegative,
    img,
    heading,
    title,
    subtitle,
    description,
    buttons,
  } = data;

  const lottieContainer = useRef(null);

  useEffect(() => {
    if (img.type === IMG_TYPE.ANIMATION) {
      Lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require(`../../animations/${img.animationName}`),
      });
    }
  }, [img]);

  const handleImg = () => {
    switch (img.type) {
      case IMG_TYPE.IMG:
        return <SectionImage src={img.src} alt={img.alt} />;

      case IMG_TYPE.SVG:
        return <SectionImageSVG>{img.object}</SectionImageSVG>;

      case IMG_TYPE.ANIMATION:
        return (
          <SectionAnimation ref={lottieContainer}>
            <SectionAnimationAttr href={img.attr.link} target="_blank">
              {img.attr.icon} Author · {img.attr.label}
            </SectionAnimationAttr>
          </SectionAnimation>
        );

      default:
        return <SectionImagePlaceholder />;
    }
  };

  const handleButton = (button) => {
    switch (button.type) {
      case BUTTON_TYPE.LINK:
        return (
          <SectionLink
            href={button.link}
            // style={{ color: `#f00` }}
            // style={button.styles}
            target={button.isBlank && "_blank"}
          >
            {button.label.icon}
            {button.label.text}
          </SectionLink>
        );

      case BUTTON_TYPE.BUTTON:
        return (
          <SectionButton onClick={button.action}>
            {button.label.icon}
            {button.label.text}
          </SectionButton>
        );

      default:
        return <SectionButton>{button.label}</SectionButton>;
    }
  };

  return (
    <StyledSection
      variantColor={variantColor}
      variantNegative={variantNegative}
      id={propId}
      key={propId}
    >
      <SectionContainer variantLayout={variantLayout}>
        <SectionImageWrapper>{handleImg()}</SectionImageWrapper>
        <SectionInfo
          variantColor={variantColor}
          variantNegative={variantNegative}
        >
          <SectionHeading>{heading}</SectionHeading>
          <SectionTitle>{title}</SectionTitle>
          <SectionSubtitle>{subtitle}</SectionSubtitle>
          <SectionDescription>
            {description?.map((item, id) => (
              <SectionPharagraph key={id}>{item}</SectionPharagraph>
            ))}
          </SectionDescription>
          <SectionButtonWrapper>
            {buttons?.map((button) => {
              return handleButton(button);
            })}
          </SectionButtonWrapper>
        </SectionInfo>
      </SectionContainer>
    </StyledSection>
  );
};

export default Section;
