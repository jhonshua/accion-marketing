import {
  edicion,
  camara,
  equipo
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Inicio",
  },
  {
    id: "portfolio",
    title: "Conocenos",
  },
  {
    id: "experience",
    title: "Servicios",
  },
  {
    id: "contact",
    title: "Contactanos",
  },
];

const experiences = [
  {
    title: "Marketing Digital",
    details: [
      "Nuestro servicio de marketing digital abarca todas las áreas clave para buscar estrategias altamente efectivas y flexibles.",
    ],
  },
  {
    title: "Desarrollo web",
    details: [
      "Desarrollamos todo tipo de páginas web, tiendas online y aplicaciones adaptadas y orientadas a conseguir tus objetivos de forma eficaz.",
    ],
  },
  {
    title: "consultoria estrategica",
    details: [
      "Con nuestro equipo de expertos, te ayudamos a  desarrollar un plan integral que te lleve hacia tus objetivos empresariales.",
    ],
  },
  {
    title: "Diseño",
    details: [
      "Desarrollamos todo tipo de páginas web, tiendas online y aplicaciones adaptadas y orientadas a conseguir tus objetivos de forma eficaz.",
    ],
  },
  {
    title: "Estudio de mercado",
    details: [
      "En AcciónMK, realizamos exhaustivos estudios de mercado, incluyendo trabajo de campo e inteligencia de negocio",
    ],
  },
];

const portfolio = [
  {
    name: "estudio de mercado ",
    description:
      "En AcciónMK ofrecemos servicios de consultoría de marketing estratégico diseñados para tomar decisiones empresariales efectivas y directas, y orientadas hacia la consecución de los objetivos marcados.",
    image: equipo,
  },
  {
    name: "Sobre nosotros",
    description:
      "AcciónMK es mucho más que una agencia de marketing. Somos tu socio estratégico en el mundo digital, ofreciéndote servicios de alta calidad que te ayudarán a alcanzar tus objetivos empresariales. Desde estudios de mercado hasta diseño y desarrollo, estamos aquí para potenciar tu presencia digital y llevarte hacia el éxito..",
    image: edicion,
  },
  {
    name: "¿Cómo podemos ayudarte?",
    description:
      "Descubre las posibilidades que Marketing Acción pone a tu disposición. Ofrecemos distintos tipos de servicios de Marketing como redes sociales, email marketing, producción de vídeos, marketing Automatizado o Inbound Marketing, entre otros.",
    image: camara,
  },
];

export { experiences, portfolio };

