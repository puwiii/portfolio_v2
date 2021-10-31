import styled from "styled-components";
import { Container } from "../../globalStyles";

// GridItems, Item, ItemLabel

export const GridItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const GridContainer = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 35px;
  justify-content: center;

  @media screen and (max-width: 920px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 2em;
  /* background-color: ${({ theme }) => theme.color_background_300}; */
`;

export const ItemIcon = styled.div`
  width: 70px;
  height: 70px;
  flex: 1;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const ItemLabel = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color_text_400};
  flex: 1;
`;
