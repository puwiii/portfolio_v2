import { BiCommentDetail } from "react-icons/bi";

export const BUTTON_TYPE = {
  LINK: "link",
  BUTTON: "button",
};

export const IMG_TYPE = {
  IMG: "img",
  SVG: "svg",
  ANIMATION: "animation",
};

export const aboutMe = {
  id: 1,
  variantColor: false,
  variantLayout: false,
  img: {
    type: "img",
    src: "/images/Isotipo-negative-medium.png",
    alt: "Sebastian Mathieur",
  },
  heading: "Acerca de mí",
  title: "Desarrollador Front-End",
  subtitle: "Ex-estudiante de Ingenieria en sistemas y Autodidacta desde 2021",
  description: [
    ` Soy un apasionado desarrolador Front-End de Argentina🦸‍♂️. Me apasiona llevar cada proyecto a su máximo nivel mediante el uso de ilustraciones/animaciones y óptimas manera de organizar la información con principios UX/UI para mejorar la experiencia del usuario 🏌.`,
    `Ademas soy un natural problem-solver 🧠, me encanta afrontar nuevos desafíos y resolverlos. Desde siempre he tenido una atracción a los pequeños detalles que logran grandes resultados 🚀.`,
    ` Si tienes un proyecto y necesitas darle una cara bonita hablemos 💬.`,
  ],
  buttons: [
    {
      type: BUTTON_TYPE.LINK,
      label: { icon: <BiCommentDetail />, text: `Contactame` },
      link: "#contact",
    },
  ],
};
