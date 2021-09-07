import styled from "styled-components";
import {
  Container,
  Button,
  LinkButton,
  Section,
  Input,
  InputTextArea,
} from "../../globalStyles";

export const FormSection = styled(Section)`
  padding: 0px 0;
  min-height: calc(100vh - 76px);

  @media screen and (max-width: 960px) {
    padding: 100px 0;
  }
`;

export const FormContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const FormImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormImage = styled.img`
  height: min-content;
  object-fit: cover;
  width: 50%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
  color: ${({ theme }) => theme.color_text_400};
`;

export const FormHeading = styled.h6`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${({ theme }) => theme.color_blue_200};
  border-radius: 100px;
  background: ${({ theme }) => theme.color_blue_200 + "22"};
  padding: 10px 20px;
  margin-right: auto;
`;

export const FormTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -2px;

  @media screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const FormSubtitle = styled.h4`
  font-size: 1rem;
  letter-spacing: -0.5px;
  font-weight: 600;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 40px 0;
  gap: 25px;
  color: ${({ theme }) => theme.color_text_400};
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  gap: 15px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FormInputWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  justify-content: center;
`;

export const FormInputLabel = styled.label`
  user-select: none;
  pointer-events: none;
  opacity: 0.5;
  font-size: 0.8rem;
  font-weight: 600;

  @media screen and (max-width: 425px) {
    font-size: 0.7rem;
  }
`;

export const FormTextArea = styled(InputTextArea)``;
export const FormInput = styled(Input)``;

export const FormMessage = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ variant, theme }) =>
    variant === "error" ? theme.color_error : theme.color_success};
  border-radius: 100px;
  background: ${({ variant, theme }) =>
    variant === "error"
      ? theme.color_error + "11"
      : theme.color_success + "11"};
  padding: 10px 20px;
  margin-right: auto;
`;

export const FormButtonsWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const FormButton = styled(Button)`
  font-size: 1rem;
`;
