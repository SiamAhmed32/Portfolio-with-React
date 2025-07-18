import {
  javascript,
  reactjs,
  tailwind,
  html,
  css,
  git,
  redux,
  weatherapp,
  ai_image_gen,
  movieapp,
  property_app,
  brac_university,
  ielts,
  web,
} from "@/assets";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "education", title: "Education" }, 
  { id: "work", title: "Projects" }, 
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "React.js Developer", icon: reactjs },
  { title: "Front-End Architect", icon: web },
];

export const technologies = [
  { name: "Html", icon: html },
  { name: "CSS", icon: css },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "B.Sc in Computer Science & Engineering",
    company_name: "Brac University",
    icon: brac_university,
    iconBg: "#383E56",
    date: "January 2019 - May 2023",
    points: [
      "Graduated with a strong CGPA, focusing on core computer science principles.",
      "Specialized in Data Structures & Algorithms and Object-Oriented Programming (OOP).",
      "Built and deployed several high-impact web applications, reflecting a solid foundation in modern web development.",
    ],
  },
  {
    title: "IELTS Academic Certification",
    company_name: "British Council",
    icon: ielts,
    iconBg: "#E6DEDD",
    date: "Achieved: 2023",
    points: [
      "Achieved a proficient level of English competency, demonstrating strong communication skills for collaborative international environments.",
    ],
  },
];

export const projects = [
  {
    name: "Real-Time Weather Update",
    description:
      "A dynamic dashboard displaying real-time weather data from the OpenWeatherMap API, featuring automatic location detection and a persistent 'Favorites' list.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "API", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: weatherapp,
    source_code_link:
      "https://github.com/SiamAhmed32/Real-Time-Weather-Update-React",
    live_demo_link: "https://weather-timeupdate.netlify.app/",
  },
  {
    name: "AI Image Generation Platform",
    description:
      "A real-time image generation tool integrating the Pollinations AI API, allowing users to control settings and save generated art to a persistent user gallery.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "ContextAPI", color: "green-text-gradient" },
      { name: "LocalStorage", color: "pink-text-gradient" },
    ],
    image: ai_image_gen,
    source_code_link: "https://github.com/siam3200/Image-Generator",
    live_demo_link: "https://digitalimagegeneration.netlify.app/",
  },
  {
    name: "Interactive Movie Rental Platform",
    description:
      "A comprehensive movie catalog and rental platform featuring a robust shopping cart, efficient state management with Context API & useReducer, and dynamic theming.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "useReducer", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
    ],
    image: movieapp,
    source_code_link: "https://github.com/SiamAhmed32/cine-rental-catalog-app",
    live_demo_link: "https://cine-rental-website.netlify.app/",
  },
  {
    name: "Real Estate Property Platform",
    description:
      "A responsive web application for managing real estate listings, featuring an image slider with Swiper.js and a clean, modern user interface built with Tailwind CSS.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" },
      { name: "Swiper.js", color: "green-text-gradient" },
    ],
    image: property_app,
    source_code_link: "https://github.com/SiamAhmed32/Project-sub-1",
    live_demo_link: "https://add-new-property.netlify.app/",
  },
];
