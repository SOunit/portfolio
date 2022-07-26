import {
  ATOMIC_DESIGN,
  REACT,
  REACT_NATIVE,
  REACT_REDUX_TOOLKIT,
  TAILWIND_CSS,
  TYPE_SCRIPT,
} from "../constants/front.constants";
import {
  AWS,
  DOCKER,
  EXPO,
  FIREBASE,
  GIT,
  GITHUB,
  HEROKU,
  NGINX,
  SERVERLESS_API,
} from "../constants/infra.constants";
import {
  AWS_API_GATEWAY,
  AWS_LAMBDA,
  EXPRESS,
  GRAPHQL,
  NODE_JS,
  SOCKET_IO,
} from "../constants/back.constants";
import {
  MONGOOSE,
  MONGO_DB,
  POSTGRESQL,
  SEQUELIZE,
} from "../constants/db.constants";

export const PROJECTS = [
  {
    id: 6,
    iconClasses: "far fa-comments",
    title: "Juno",
    text: "Full-stack Wedding Invitation app",
    skills: [
      REACT,
      TYPE_SCRIPT,
      REACT_REDUX_TOOLKIT,
      TAILWIND_CSS,
      SERVERLESS_API,
      AWS_LAMBDA,
      AWS_API_GATEWAY,
      EXPRESS,
    ],
    githubUrl: "https://github.com/AyakaYasuda/juno",
    demoUrl: "https://juno-wedding.vercel.app/admin",
    isPersonal: false,
  },
  {
    id: 4,
    iconClasses: "far fa-building",
    title: "Job Search App",
    text: "Job search site with MERN stack.",
    skills: [
      REACT,
      ATOMIC_DESIGN,
      EXPRESS,
      NODE_JS,
      MONGO_DB,
      FIREBASE,
      HEROKU,
    ],
    githubUrl: "https://github.com/sounit-organization/job_search_app_front",
    demoUrl: "https://job-search-app-46823.web.app/",
    isPersonal: false,
  },
  {
    id: 1,
    iconClasses: "far fa-comments",
    title: "Book Link",
    text: "Search users using common items, real-time chat.",
    skills: [
      REACT,
      TYPE_SCRIPT,
      NODE_JS,
      EXPRESS,
      GRAPHQL,
      SOCKET_IO,
      SEQUELIZE,
      POSTGRESQL,
      NGINX,
      DOCKER,
      AWS,
      GIT,
      GITHUB,
    ],
    githubUrl: "https://github.com/SOunit/book_link",
    demoUrl: "https://book-link-front.web.app/",
    isPersonal: true,
  },
  {
    id: 5,
    iconClasses: "far fa-building",
    title: "Mobile App",
    text: "Stack Overflow like mobile app",
    skills: [REACT_NATIVE, MONGOOSE, MONGO_DB, EXPO],
    githubUrl: "https://github.com/sounit-organization/canada_stack_overflow",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.yurtyurt.canada_stack_overflow",
    isPersonal: false,
  },
  {
    id: 2,
    iconClasses: "fas fa-gamepad",
    title: "Quiz RPG App",
    text: "Quiz game app for repeat practice.",
    skills: [REACT, FIREBASE],
    githubUrl: "https://github.com/SOunit/quiz_rpg",
    demoUrl: "https://quiz-rpg.web.app/",
    isPersonal: false,
  },
];
