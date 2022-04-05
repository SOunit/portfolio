import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./card/Card";
import classes from "./SideProjects.module.css";
import {
  REACT,
  FIREBASE,
  EXPRESS,
  NODE_JS,
  AWS,
  DOCKER,
  GIT,
  GITHUB,
  GRAPHQL,
  SOCKET_IO,
  POSTGRESQL,
  MONGO_DB,
  HEROKU,
  SEQUELIZE,
  NGINX,
  TYPE_SCRIPT,
  ATOMIC_DESIGN,
  REACT_NATIVE,
  GOLANG,
  EXPO,
  MONGOOSE,
} from "../../util/constants";

const PROJECTS = [
  {
    id: 1,
    iconClasses: "far fa-comments",
    title: "Dating App",
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
    demoUrl:
      "http://booklink-env.eba-gkg6bpmv.ca-central-1.elasticbeanstalk.com/login",
    personal: true,
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
      MONGOOSE,
      MONGO_DB,
      FIREBASE,
      HEROKU,
    ],
    githubUrl: "https://github.com/SOunit/job_search_app_front",
    demoUrl: "https://job-search-app-front.web.app/",
    personal: false,
  },
  {
    id: 5,
    iconClasses: "far fa-building",
    title: "Mobile App",
    text: "Stack Overflow like mobile app",
    skills: [REACT_NATIVE, GOLANG, MONGOOSE, MONGO_DB, EXPO],
    githubUrl: "",
    demoUrl: "",
    personal: false,
  },
  {
    id: 2,
    iconClasses: "fas fa-gamepad",
    title: "Quiz RPG App",
    text: "Quiz game app for repeat practice.",
    skills: [REACT, FIREBASE],
    githubUrl: "https://github.com/SOunit/quiz_rpg",
    demoUrl: "https://quiz-rpg.web.app/",
    personal: false,
  },
  {
    id: 3,
    iconClasses: "fas fa-user",
    title: "Portfolio",
    text: "This portfolio site.",
    skills: [REACT, FIREBASE],
    githubUrl: "https://github.com/SOunit/portfolio",
    demoUrl: "https://portfolio-fb053.web.app/",
    personal: true,
  },
];

const SideProject = () => {
  const cards = PROJECTS.map((project) => (
    <Card key={project.id} data={project} />
  ));
  return (
    <section id="side-projects" className={classes["side-projects"]}>
      <SectionTitle title="Side Projects" />
      <div className={classes["cards"]}>{cards}</div>
    </section>
  );
};

export default SideProject;
