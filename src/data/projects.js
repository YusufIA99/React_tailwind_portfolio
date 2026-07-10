import IOT from "../assets/IOT.webp";
import Lift from "../assets/LIFT.svg";
import Travel from "../assets/travel.webp";
import Himmerland from "../assets/Himmerland.webp";
import Fraizer from "../assets/fraizer.webp";
import Portfolio from "../assets/Portfolio.pdf";
import ExploreAalborg from "../assets/ExploreAalborg.webp";
import Siid from "../assets/SIID.webp";

export const projects = [
  {
    id: 0,
    image: Lift,
    title: "LIFT - IXD10",
    description:
      "LIFT (Listening & Inclusion Facilitation Tool) is a voice-based AI system that supports Problem-Based Learning groups. It transcribes group discussions in real time, provides spoken AI facilitation with reflective prompts, and visualises participation patterns to help amplify quieter voices.",
    link: "https://github.com/YusufIA99/LIFT-IXD10",
    icons: ["ReactIcon", "NodeIcon", "OpenAiIcon", "JsIcon"],
  },
  {
    id: 1,
    image: Siid,
    title: "IXD 8 Project",
    description:
      "This application is developed as a research project with three distinct tasks. Built using React Native, TypeScript, Expo, and CSS, it aims to study how the Situationally-Induced Impairments and Disabilities (SIID) pain affect mobile interaction.",
    link: "https://github.com/leongroth/PainPhones",
    icons: ["ReactIcon", "TypeScriptIcon", "ExpoIcon", "CssIcon"],
  },
  {
    id: 2,
    image: ExploreAalborg,
    title: "IXD 7 Projects",
    description:
      "This project contains a downloadable presentation of 2 mini-projects and 1 bigger project I was part of during my 7th semester in Interaction Design.",
    link: Portfolio,
    icons: ["UnityIcon", "FigmaIcon"],
  },
  {
    id: 3,
    image: Fraizer,
    title: "Fraizer Webshop",
    description:
      "Fraizer is a Danish fashion brand founded in 2023, focused on high-quality, affordable fashion with a timeless Scandinavian style. I worked on the webshop, implementing custom features and designs using Shopify and CSS.",
    link: "https://fraizer.dk",
    icons: ["ShopifyIcon", "CssIcon", "HtmlIcon"],
  },
  {
    id: 4,
    image: Himmerland,
    title: "Himmerland Boligforegning Community App",
    description:
      "This project is a community app developed using Java and Firebase.",
    link: "https://github.com/YusufIA99/Himmerland-app/tree/main",
    icons: ["JavaIcon", "FirebaseIcon"],
  },
  {
    id: 5,
    image: IOT,
    title: "IOT Project",
    description:
      "This project is focused on Internet of Things (IoT) technology.",
    link: "https://github.com/YusufIA99/Smart-Curtain-IoT",
    icons: ["ReactIcon", "BootstrapIcon", "PythonIcon", "FlaskIcon"],
  },
  {
    id: 6,
    image: Travel,
    title: "Travel React Project",
    description: "This is a travel app made using React and Tailwind CSS.",
    link: "https://yusufia99.github.io/travel-tailwind-vite/",
    icons: ["ReactIcon", "JsIcon", "TailwindIcon"],
  },
];
