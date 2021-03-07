import ImageAbout from "../images/portfolio_img.svg";
import ContactImg from "../images/contactImg.svg";

export const dataHero = {
  id: "",
  headline1: "Hello,",
  headline2: "I am Roice Liu. ",
  headline3: "I design and develop software.",
  subtitle:
    "I manage agile projects, plan sprints & work as an entrepreneur. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  buttonLink: null,
  buttonText: null,
};

export const dataAbout = {
  bgColor: "#19181A",
  ImgStart: false,
  img: ImageAbout,
  alt: "Portfolio image",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
};

export const InfoContact = {
  lightBg: false,
  id: "contact",
  // topLine: "",
  // description: "",
  lightText: true,
  LightTextDesc: true,
  headline: "Interested in contacting me?",
  imgStart: true,
  buttonLabel: "Contact Us",
  img: ContactImg,
  alt: "triangle vector",
  primary: true,
  dark: true,
};
