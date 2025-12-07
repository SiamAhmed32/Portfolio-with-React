import {
  javascript,
  reactjs,
  tailwind,
  html,
  css,
  git,
  redux,
  shohoz,
  coastal,
  bazarey,
  closetbd,
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
  { id: "experience", title: "Experience" },
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

export const education = [
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

export const workExperiences = [
  {
    title: "Software Engineer",
    company_name: "ThinkCrypt",
    icon: null, // Using company name instead of logo
    iconBg: "#6366f1",
    date: "August 2025 – Present | On-site",
    points: [
      "Engineered full-scale web applications using Next.js 14+, React 18+, TypeScript, and Tailwind CSS, serving 10,000+ daily active users in production environments.",
      "Designed and developed 20+ reusable UI components using Shadcn UI and modular architecture patterns, reducing development time by 40% and ensuring consistent design system implementation.",
      "Implemented secure JWT-based authentication with robust session handling. Integrated REST APIs using React Query and RTK Query for real-time data sync.",
      "Built responsive dashboards and admin panels with advanced filtering, pagination, and real-time updates, improving user engagement by 25% and reducing page load times by 30%.",
      "Collaborated in Agile/Scrum teams of 5+ developers, contributing to standups, sprint planning, and code reviews to deliver scalable features.",
    ],
  },
];

export const projects = [
  {
    name: "Shohoz - Air Tickets",
    description:
      "Bangladesh's largest online travel platform for booking air tickets. Built a comprehensive flight booking system with search, compare, and booking functionality. Features include one-way, round-trip, and multi-city flight options with real-time price comparison.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "RTK Query", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    image: shohoz,
    source_code_link: "",
    live_demo_link: "https://www.shohoz.com/air-tickets",
  },
  {
    name: "Coastal Water Filters",
    description:
      "E-commerce platform for water filter products. Engineered a robust data layer with RTK Query for fast search, caching, and real-time synchronization of inventory and order status. Utilized Redux for global state management.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "RTK Query", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
    ],
    image: coastal,
    source_code_link: "",
    live_demo_link: "https://coastal-frontend.vercel.app",
  },
  {
    name: "Bazary - E-commerce",
    description:
      "Full-scale e-commerce platform with comprehensive product catalog, category filtering, shopping cart, and 20+ content pages. Built responsive product listings with dynamic sidebar navigation using RTK Query and Shadcn UI.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "RTK Query", color: "blue-text-gradient" },
      { name: "Shadcn UI", color: "orange-text-gradient" },
    ],
    image: bazarey,
    source_code_link: "",
    live_demo_link: "https://bazary-frontend.vercel.app",
  },
  {
    name: "closetBd",
    description:
      "A modern e-commerce platform built with Next.js, featuring interactive carousels/sliders with Swiper.js for enhanced browsing. Utilized RTK Query for efficient data fetching and caching. Employed Chakra UI for responsive, accessible UI components.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "TypeScript", color: "pink-text-gradient" },
      { name: "Chakra UI", color: "orange-text-gradient" },
      { name: "RTK Query", color: "blue-text-gradient" },
      { name: "Swiper.js", color: "green-text-gradient" },
    ],
    image: closetbd,
    source_code_link: "",
    live_demo_link: "https://closetbd.com",
  },
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
