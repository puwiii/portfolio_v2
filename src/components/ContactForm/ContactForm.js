import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { removeFocus } from "../../helpers/removeFocus";
import {
  FormSection,
  FormWrapper,
  FormContainer,
  FormImageWrapper,
  FormImage,
  Form,
  FormTitle,
  FormRow,
  FormInputWrapper,
  FormInputLabel,
  FormInput,
  FormTextArea,
  FormHeading,
  FormSubtitle,
  FormButtonsWrapper,
  FormButton,
  FormMessage,
} from "./ContactForm.elements";
import { THEME_STATE } from "../../context/reducer";
import { useStateValue } from "../../context/StateProvider";
import { BiPaperPlane } from "react-icons/bi";

const ContactForm = ({ variantColor }) => {
  const [sendingEmail, setSendingEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState(undefined);
  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const subjectInput = useRef(null);
  const messageInput = useRef(null);

  const [{ theme }] = useStateValue();

  const sendEmail = (e) => {
    e.preventDefault();
    if (sendingEmail) return;

    if (nameInput.current.value === "") {
      nameInput.current.focus();
      setErrorMsg("El nombre no puede estar vacío.");
      return;
    }
    if (emailInput.current.value === "") {
      emailInput.current.focus();
      setErrorMsg("El email no puede estar vacío.");
      return;
    }
    if (subjectInput.current.value === "") {
      subjectInput.current.focus();
      setErrorMsg("El asunto no puede estar vacío.");
      return;
    }
    if (messageInput.current.value === "") {
      messageInput.current.focus();
      setErrorMsg("El mensaje no puede estar vacío.");
      return;
    }

    setSendingEmail(true);
    emailjs
      .sendForm(
        "service_i9blifl",
        "template_ei0l7wc",
        e.target,
        "user_WEhonP2k0wrg79bj4ivHe"
      )
      .then(
        (result) => {
          setErrorMsg(null);
          setSendingEmail(false);
          e.target.reset();
        },
        (error) => {
          setSendingEmail(false);
        }
      );
  };

  return (
    <FormSection variantColor={variantColor} id="contact">
      <FormContainer>
        <FormImageWrapper>
          {theme === THEME_STATE.DARK ? (
            <FormImage
              src="/images/Isotipo-negative-medium.png"
              alt="Sebastian Mathieur"
            />
          ) : (
            <FormImage
              src="/images/Isotipo-medium.png"
              alt="Sebastian Mathieur"
            />
          )}
        </FormImageWrapper>
        <FormWrapper>
          <FormHeading>Contactame</FormHeading>
          <FormTitle>¿Quieres construir algo?</FormTitle>
          <FormSubtitle>Hablemos sobre tu proyecto 💪.</FormSubtitle>
          <Form onSubmit={sendEmail}>
            <FormRow>
              <FormInputWrapper>
                <FormInputLabel htmlFor="name">Nombre</FormInputLabel>
                <FormInput
                  type="username"
                  id="name"
                  name="name"
                  placeholder="¿Cómo quieres que te llame?"
                  ref={nameInput}
                />
              </FormInputWrapper>
              <FormInputWrapper>
                <FormInputLabel htmlFor="email">
                  Correo Electrónico
                </FormInputLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingresa tu email"
                  ref={emailInput}
                />
              </FormInputWrapper>
            </FormRow>
            <FormRow>
              <FormInputWrapper>
                <FormInputLabel htmlFor="subject">
                  ¿De que se trata?
                </FormInputLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto"
                  ref={subjectInput}
                />
              </FormInputWrapper>
            </FormRow>
            <FormRow>
              <FormInputWrapper>
                <FormInputLabel htmlFor="message">
                  Cuéntame más... 😄
                </FormInputLabel>
                <FormTextArea
                  type="text"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Escribe aquí"
                  ref={messageInput}
                />
              </FormInputWrapper>
            </FormRow>
            {errorMsg === null && (
              <FormMessage>
                El correo se envió sin problemas, te responderé lo antes posible
                ✌.
              </FormMessage>
            )}
            {errorMsg && <FormMessage variant="error">{errorMsg}</FormMessage>}

            <FormButtonsWrapper>
              <FormButton
                type="submit"
                onClick={(e) => removeFocus(e)}
                disabled={sendingEmail}
              >
                <BiPaperPlane /> Enviar email
              </FormButton>
            </FormButtonsWrapper>
          </Form>
        </FormWrapper>
      </FormContainer>
    </FormSection>
  );
};

export default ContactForm;
