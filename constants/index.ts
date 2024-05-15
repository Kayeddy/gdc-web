// Helpers imports
import { ProfileExtractionConfig } from "@/lib/types/user";

// Icons imports
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

// Landing page constants

export const startingFeatures = [
  "En los GDC, te unirás a un equipo de 4-5 miembros con perfiles complementarios",
  "En lugar de enseñanza tradicional, tus mentores te desafiarán y brindarán retroalimentación semanal",
  "A medida que avances, tendrás la oportunidad de presentar tu proyecto en eventos como Demo Days",
];

export const features = [
  {
    imgUrl: "/svg/vrpano.svg",
    title: "Recursos exclusivos",
    subtitle:
      "Te brindamos recursos exclusivos y acompañamiento por parte de nuestros partners para que junto a tus cofundadores/compañeros de equipo lleves ese proyecto al siguiente nivel: desde la idea, hasta el producto constituido (incluso legalmente).",
  },
  {
    imgUrl: "/svg/headset.svg",
    title: "Llegan los Demo Days!",
    subtitle:
      "Los proyectos que haces y se quedan atrás quedan en el pasado. Nuestros Demo Days velarán por traer inversores y reclutadores para que ese proyecto sea tu trampolín hacia el mundo empresarial, o hacia el trabajo de tus sueños.",
  },
];

export const alliedPlatforms = [
  {
    id: "0",
    title: "CodeCademy",
    icon: "/allies/codecademy_community.webp",
    platformRedirectionLink: "https://www.codecademy.com",
    optionalContainerStyles: "absolute top-0 right-1",
  },
  {
    id: "1",
    title: "Cambly",
    icon: "/allies/cambly_sm.png",
    platformRedirectionLink: "https://www.cambly.com",
    optionalContainerStyles: "absolute top-0 left-1",
  },
  {
    id: "2",
    title: "Connect2Pet",
    icon: "/allies/c2p_mobile.webp",
    platformRedirectionLink: "https://connect2pet.app",
    optionalContainerStyles: "absolute bottom-0 left-1",
  },
  {
    id: "3",
    title: "Globant",
    icon: "/allies/globant_sm.webp",
    platformRedirectionLink: "https://www.globant.com",
    optionalContainerStyles: "absolute bottom-0 right-1",
  },
  {
    id: "4",
    title: "Google-cloud",
    icon: "/allies/google_cloud_sm.webp",
    platformRedirectionLink: "https://cloud.google.com/gcp",
    optionalContainerStyles: "absolute right-1",
  },
  {
    id: "5",
    title: "ThreeTech",
    icon: "/allies/treetech.webp",
    platformRedirectionLink: "https://www.treetechsas.com",
    optionalContainerStyles: "absolute left-0",
  },
  {
    id: "6",
    title: "Intelecto-abogados",
    icon: "/allies/intelectolegalabogados.webp",
    platformRedirectionLink: "https://www.intelectolegalabogados.co",
    optionalContainerStyles: "absolute top-0",
  },
  {
    id: "7",
    title: "Medeo",
    icon: "/allies/medeo.webp",
    platformRedirectionLink: "https://www.medeo-edu.com",
    optionalContainerStyles: "absolute bottom-0",
  },
];

export const socials = [
  // {
  //   name: "twitter",
  //   url: "/twitter.svg",
  // },
  {
    name: "linkedin",
    image: "/socials/linkedin.svg",
    url: "https://www.linkedin.com/company/globaldeveloperclubs/?viewAsMember=true",
  },
  {
    name: "instagram",
    image: "/socials/instagram.svg",
    url: "https://www.linkedin.com/company/globaldeveloperclubs/?viewAsMember=true",
  },
  // {
  //   name: "facebook",
  //   url: "/facebook.svg",
  // },
];

// Onboarding constants

export const userTypeOptions = [
  {
    label: "Quiero ser mentor",
    value: "mentor",
    description:
      "Como mentor, tendrás la oportunidad de guiar y apoyar a otros desarrolladores en su aprendizaje y crecimiento profesional. Compartirás tus conocimientos y experiencia, ayudando a formar la próxima generación de expertos en tecnología.",
  },
  {
    label: "Quiero ser líder",
    value: "leader",
    description:
      "El rol de líder implica dirigir proyectos y equipos, coordinar actividades y ser punto de referencia en la toma de decisiones importantes. Estarás al frente de iniciativas clave, fomentando un ambiente de colaboración y excelencia dentro del club.",
  },
  {
    label: "Quiero ser miembro",
    value: "member",
    description:
      "Como miembro del club, participarás activamente en proyectos y actividades, colaborando con otros miembros del equipo y aprendiendo de los mentores y líderes. Esta es una excelente oportunidad para desarrollar tus habilidades y expandir tu red profesional en el campo del desarrollo.",
  },
];

export const userSocialOptions = [
  {
    provider: "Github",
    Icon: GitHubLogoIcon,
  },
  {
    provider: "LinkedIn",
    Icon: LinkedInLogoIcon,
  },
  {
    provider: "Instagram",
    Icon: InstagramLogoIcon,
  },
  {
    provider: "Twitter",
    Icon: TwitterLogoIcon,
  },
];

export const userCareerOptions = [
  {
    name: "Ingeniería de Sistemas",
    value: "systems engineer",
  },
  {
    name: "Ingeniería de Software",
    value: "software engineer",
  },
  {
    name: "Ingeniería de telecomunicaciones",
    value: "telecommunications engineer",
  },
  {
    name: "Ingeniería Electrónica",
    value: "electronics engineer",
  },
  {
    name: "Computación",
    value: "computation",
  },
  {
    name: "Entretenimiento Digital",
    value: "digital entertainment",
  },
  {
    name: "Otro",
    value: "other",
  },
];

export const userPreferredTechRoleOptions = [
  { name: "Front-end", value: "frontend" },
  { name: "Back-end", value: "backend" },
  { name: "FullStack", value: "fullstack" },
  { name: "Desarrollo Móvil", value: "mobile" },
  { name: "UI/UX", value: "ui/ux" },
  { name: "Diseño", value: "design" },
  { name: "Ciencia de datos", value: "data science" },
  { name: "Aprendizaje de maquina", value: "machine learning" },
  { name: "DevOps", value: "devops" },
  { name: "Computación en la nube", value: "cloud computing" },
  { name: "Ciberseguridad", value: "cybersecurity" },
  { name: "Desarrollo de videojuegos", value: "game development" },
  { name: "Robótica", value: "robotics" },
  { name: "IoT", value: "iot" },
  { name: "Blockchain", value: "blockchain" },
  { name: "Telecomunicaciones o afines", value: "telecommunications" },
];

export const userWorkExperienceOptions = [
  { name: "No tengo, me gustaría aprender", value: "0 years" },
  { name: "1 año en la industria", value: "1 year" },
  { name: "2 años en la industria", value: "2 years" },
  { name: "Igual o más de 3 años en la industria", value: "3 years" },
];

export const userAreaOfInterestOptions = [
  { name: "Desarrollo Web", value: "web" },
  { name: "Desarrollo Móvil", value: "mobile" },
  { name: "VR/AR", value: "vr/ar" },
  { name: "Robótica", value: "robotics" },
  { name: "Videojuegos", value: "videogames" },
  { name: "Ciberseguridad", value: "cybersecurity" },
  { name: "Programación competitiva", value: "competitive programming" },
];

export const userUniversityByCountryOptions = [
  {
    id: "1",
    country: "Colombia",
    institutions: [
      {
        id: "1",
        name: "Universidad de Medellín",
        city: "Medellín",
        email: "@soyudemedellin.edu.co",
      },
      {
        id: "2",
        name: "Universidad de Antioquia",
        city: "Medellín",
        email: "@udea.edu.co",
      },
      {
        id: "3",
        name: "Eafit",
        city: "Medellín",
        email: "@eafit.edu.co",
      },
    ],
  },
  {
    id: "2",
    country: "México",
    institutions: [
      {
        id: "1",
        name: "Tecnológico Nacional de México Campus Zacatecas Norte",
        city: "Zacatecas",
        email: "@zacatecasnte.tecnm.mx",
      },
      {
        id: "2",
        name: "Universidad de Guadalajara",
        city: "Guadalajara",
        email: "@alumnos.udg.mx",
      },
    ],
  },
];

export const userAssociatedEnterprises = [
  { name: "Nubank", value: "nubank" },
  { name: "Rappi", value: "rappi" },
  { name: "iFood", value: "ifood" },
  { name: "Platzi", value: "platzi" },
  { name: "Globant", value: "globant" },
  { name: "Habi", value: "habi" },
  { name: "EBANX", value: "ebanx" },
  { name: "Neon", value: "neon" },
  { name: "C6 Bank", value: "c6bank" },
  { name: "Kavak", value: "kavak" },
  { name: "QuintoAndar", value: "quintoandar" },
  { name: "NotCo", value: "notco" },
  { name: "dLocal", value: "dlocal" },
  { name: "VTEX", value: "vtex" },
  { name: "MercadoLibre", value: "mercadolibre" },
  { name: "Despegar", value: "despegar" },
  { name: "Ualá", value: "uala" },
  { name: "Clip", value: "clip" },
  { name: "Bitso", value: "bitso" },
  { name: "Loft", value: "loft" },
  { name: "Creditas", value: "creditas" },
  { name: "Konfio", value: "konfio" },
  { name: "Grow Mobility", value: "growmobility" },
  { name: "Cornershop", value: "cornershop" },
  { name: "Gympass", value: "gympass" },
  { name: "Loggi", value: "loggi" },
  { name: "Wildlife Studios", value: "wildlifestudios" },
  { name: "Clara", value: "clara" },
  { name: "Pomelo", value: "pomelo" },
  { name: "Kueski", value: "kueski" },
  { name: "Auth0", value: "auth0" },
  { name: "Otro", value: "other" },
];

// server actions constants
export const profileConfig: ProfileExtractionConfig = {
  mentor: {
    requiredFields: [
      "firstName",
      "lastName",
      "personalEmail",
      "phone",
      "image",
      "country",
      "socials",
      "workExperience",
      "career",
      "mentoringExperience",
      "preferredParticipationArea",
      "preferredClub",
      "associatedEnterpriseName",
      "acceptsEmailUpdates",
    ],
  },
  member: {
    requiredFields: [
      "firstName",
      "lastName",
      "personalEmail",
      "institutionalEmail",
      "phone",
      "image",
      "country",
      "university",
      "career",
      "semester",
      "socials",
      "workExperience",
      "preferredTechRole",
      "preferredParticipationArea",
      "acceptsEmailUpdates",
    ],
  },
  leader: {
    requiredFields: [
      "firstName",
      "lastName",
      "personalEmail",
      "institutionalEmail",
      "phone",
      "image",
      "country",
      "university",
      "career",
      "semester",
      "socials",
      "developedProjects",
      "workExperience",
      "leadershipExperience",
      "preferredTechRole",
      "preferredParticipationArea",
      "acceptsEmailUpdates",
    ],
  },
};
