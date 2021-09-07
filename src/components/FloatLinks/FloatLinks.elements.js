import styled from "styled-components";
import { LinkButtonRounded } from "../../globalStyles";

export const Links = styled.div`
  position: fixed;
  z-index: 200;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* transform: translateY(-50%); */
  padding: 10px;
  gap: 10px;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Link = styled(LinkButtonRounded)`
  background: ${({ variant, theme }) => {
    switch (variant) {
      case "github":
        return `#6e5494`;
      case "linkedin":
        return `#0077b5`;
      default:
        return theme.color_pink_300;
    }
  }};
  position: relative;
`;

export const LinkLabel = styled.span`
  color: ${({ theme }) => theme.color_text_400};
  pointer-events: none;
  user-select: none;
  font-size: 0.9rem;
  position: absolute;
  right: ${({ show }) => (show ? `calc(100% + 10px)` : `calc(100% + 50px)`)};
  top: 50%;
  transform: translateY(-50%);
  display: block;
  opacity: ${({ show }) => (show ? `1` : `0`)};

  transition: opacity 300ms ease-in-out, right 300ms ease-in-out;
`;
