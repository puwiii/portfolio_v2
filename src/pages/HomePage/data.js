import { BiCommentDetail, BiLinkExternal } from "react-icons/bi";
import Meaning from "../../svg/Meaning";

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
  variantNegative: false,
  variantColor: false,
  variantLayout: true,
  img: {
    type: IMG_TYPE.ANIMATION,
    animationName: "lottie_rocket_2.json",
    attr: {
      icon: <BiLinkExternal />,
      label: "Lex Komkov",
      link: "https://lottiefiles.com/lex_ko",
    },
  },
  heading: "Acerca de mí",
  title: "Desarrollador Front-End.",
  subtitle: "Ex-estudiante de Ingeniería en sistemas y Autodidacta desde 2021.",
  description: [
    `Hola 🙋‍♂️, soy un desarrollador Front-End de Argentina. Me apasiona llevar cada proyecto a su máximo nivel mediante el uso de ilustraciones/animaciones y óptimas manera de organizar la información con principios UX/UI para mejorar la experiencia del usuario 🏌.`,
    `Ademas soy un natural problem-solver 🧠, me encanta afrontar nuevos desafíos y resolverlos. Desde siempre he tenido una atracción a los pequeños detalles que logran grandes resultados 🚀.`,
    <strong>
      Si tienes un proyecto y necesitas darle una cara bonita hablemos 💬.
    </strong>,
  ],
  buttons: [
    {
      type: BUTTON_TYPE.LINK,
      label: { icon: <BiCommentDetail />, text: `Contactame` },
      link: "#contact",
    },
  ],
};

export const laboratory = {
  id: 2,
  variantNegative: false,
  variantColor: true,
  variantLayout: false,
  img: {
    type: IMG_TYPE.SVG,
    object: <Meaning />,
  },
  heading: "Mi esencia",
  title: "El Laboratorio de Frontendstein.",
  subtitle:
    "Un laboratorio a base de una mezcla de lógica 👨‍💻 y creatividad 🎨.",
  description: [
    <strong
      style={{
        color: "#4a518d",
        fontSize: "1.2rem",
      }}
    >
      Lógica
    </strong>,
    `La lógica es un pilar muy importante en los proyectos de software, una buena lógica no solo esta presente en el código sino también es parte de uno mismo y la manera en la que resuelve los rompecabezas.`,
    <strong>
      Performance · Estructura · Optimización · Accesibilidad · Eficiencia ·
      Seguridad
    </strong>,
    <strong
      style={{
        color: "#c33764",
        fontSize: "1.2rem",
      }}
    >
      Creatividad
    </strong>,
    `La creatividad puede brindar personalidad a cada proyecto, como la elección de sus colores o la fuente que elijas pueden lograr transmitir distintos mensajes. La creatividad evoca en juntar todas estas propiedades y juntarlas en un único propósito de marca.`,
    <strong>
      Identidad · Chispa · Carácter · Frescura · Usabilidad · Intuición
    </strong>,
  ],
};

export const technologies = {
  id: 3,
  variantNegative: false,
  variantColor: false,
  variantLayout: true,
  img: {
    type: IMG_TYPE.ANIMATION,
    animationName: "react.json",
    attr: {
      icon: <BiLinkExternal />,
      label: "Nattu Adnan",
      link: "https://lottiefiles.com/reallynattu",
    },
  },
  heading: "Mis herramientas",
  title: "Tecnologías y herramientas que utilizo.",
  subtitle: "¿Mi especialidad? ReactJS ⚛️.",
  description: [
    `A lo largo de mi formación he estado aprendiendo desde las bases como los algoritmos de búsqueda y ordenamiento, estructuras de datos y complejidad hasta los conceptos mas pragmáticos 📚.`,
    `Mi manejo en las tecnologías Front-End van desde el diseño y la maquetación hasta la programación de las funcionalidades de una aplicación web.`,
    `Mi especialidad es ReactJS el cual puedo combinar con NextJS si se requiere, un poderoso marco de desarrollo basado en ReactJS 🔥.`,
  ],
};
