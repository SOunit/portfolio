import SectionTitle from '../sectionTitle/SectionTitle';
import Card from './card/Card';
import classes from './SideProjects.module.css';
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
  POSTGRE_SQL,
  MONGO_DB,
  HEROKU,
  SEQUELIZE,
  NGINX,
} from '../../util/consts';

const PROJECTS = [
  {
    id: 1,
    iconClasses: 'far fa-comments',
    title: 'Dating App',
    text: 'Search users using common items, real-time chat.',
    skills: [
      REACT,
      NODE_JS,
      EXPRESS,
      GRAPHQL,
      SOCKET_IO,
      SEQUELIZE,
      POSTGRE_SQL,
      NGINX,
      DOCKER,
      AWS,
      GIT,
      GITHUB,
    ],
    githubUrl: 'https://github.com/SOunit/book_link',
    demoUrl:
      'http://booklink-env.eba-gkg6bpmv.ca-central-1.elasticbeanstalk.com/login',
    personal: true,
  },
  {
    id: 4,
    iconClasses: 'far fa-building',
    title: 'Job Search App',
    text: 'Job search site with MERN stack.',
    skills: [MONGO_DB, EXPRESS, REACT, NODE_JS, FIREBASE, HEROKU],
    githubUrl: '',
    demoUrl: '',
    personal: false,
  },
  {
    id: 2,
    iconClasses: 'fas fa-gamepad',
    title: 'Quiz RPG App',
    text: 'Quiz game app for repeat practice.',
    skills: [REACT, FIREBASE],
    githubUrl: 'https://github.com/SOunit/quiz_rpg',
    demoUrl: 'https://quiz-rpg.web.app/',
    personal: false,
  },
  {
    id: 3,
    iconClasses: 'fas fa-user',
    title: 'Portfolio',
    text: 'This portfilio site.',
    skills: [REACT, FIREBASE],
    githubUrl: 'https://github.com/SOunit/portfolio',
    demoUrl: 'https://portfolio-fb053.web.app/',
    personal: true,
  },
];

const SideProject = () => {
  const cards = PROJECTS.map((project) => (
    <Card key={project.id} data={project} />
  ));
  return (
    <section id='side-projects' className={classes['side-projects']}>
      <SectionTitle title='Side Projects' />
      <div className={classes['cards']}>{cards}</div>
    </section>
  );
};

export default SideProject;
