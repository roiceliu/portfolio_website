import ImageAbout from "../images/portfolio_img.svg";
import ContactImg from "../images/contactImg.svg";

export const dataHero = {
  id: "home",
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
  desc1:
    "Hello! My name is Roice. I am a software engineer graduated in computer engineering and computer science from the University of Wisconsin-Madison,2020.",
  desc2:
    "I am currently working at Tesla as a full stack developer. My focuses are on software development, project management and sometimes UI design. By taking different roles in similar fields, I am driven to constantly learn new concepts and to approach problems with different perspectives and angles."
};

export const InfoContact = {
  lightBg: false,
  id: "contact",
  // topLine: "",
  // description: "",
  lightText: true,
  LightTextDesc: true,
  headline: "Let's get connected!",
  imgStart: true,
  buttonLabel: "Contact Me",
  img: ContactImg,
  alt: "triangle vector",
  primary: true,
  dark: true,
};
