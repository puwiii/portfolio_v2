import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
  scroll-behavior: smooth;
}

body{
  font-family: 'Lato', sans-serif;
  font-weight: 400; 
  min-height: 100vh;
  background: ${({ theme }) => theme.color_background};
  line-height: 1.3;
}

@media screen and (min-width: 425px){
  ::-webkit-scrollbar-thumb {
      width: 5px;
      border-radius: 500px;
    }
  
    ::-webkit-scrollbar {
      cursor: pointer;
      width: 14px;
      height: 14px;
    }
  
    ::-webkit-scrollbar-thumb {
      border: 4px solid rgba(0, 0, 0, 0);
      background-clip: padding-box;
      border-radius: 9999px;
      background-color: ${({ theme }) => theme.color_text};
    }
  
    ::-webkit-scrollbar-track {
      background: transparent;
      //background: transparent;
    }
}

a {
/* color: inherit;
user-select: none; */
text-decoration:none;
}

/* a:visited {
  color: inherit;
} */

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

button{
  outline: none;
  border: none;
  background: transparent;
}

input,
label,
select,
button,
textarea {
  font-family:
  //"Source Sans Pro", //3
  //"Lora", //1.3
  //"Poppins", //8
  //"Rubik", //5
  //"Exo 2", //3
  //"Quicksand", //7,7
  //"Nunito", //7.8 
  //"Open Sans", //7
  // "Lato",
  // "Lexend",
  "Lato", sans-serif;
}


`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 50px;

  @media screen and (max-width: 991px) {
    padding: 0 25px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ theme }) => theme.color_blue_400};
  border: 2px solid transparent;
  padding: 1em;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  color: #fff;
  font-weight: 600;
  transition: border-color 124ms linear, background-color 125ms linear;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color_text};
    color: ${({ theme }) => theme.color_text};
    background-color: transparent;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const LinkButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: ${({ theme }) => theme.color_pink_400};
  border: 2px solid transparent;
  padding: 1em;
  font-size: 0.9rem;
  letter-spacing: -0.5px;
  color: #fff;
  font-weight: 600;
  transition: border-color 124ms linear, background-color 125ms linear;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color_text};
    color: ${({ theme }) => theme.color_text};
    background-color: transparent;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export default GlobalStyles;
