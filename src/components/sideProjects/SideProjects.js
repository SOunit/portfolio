import SectionTitle from '../sectionTitle/SectionTitle';
import Card from './card/Card';
import classes from './SideProjects.module.css';
import {
  REACT,
  FIREBASE,
  EXPRESS,
  NODE,
  AWS,
  DOCKER,
  GIT,
  GITHUB,
  GRAPHQL,
  SOCKET_IO,
  POSTGRES_SQL,
} from '../consts/consts';

const PROJECTS = [
  {
    id: 1,
    iconClasses: 'far fa-comments',
    title: 'Chat App',
    text: 'Search users using common items, real-time chat.',
    skills: [
      REACT,
      NODE,
      EXPRESS,
      GRAPHQL,
      SOCKET_IO,
      POSTGRES_SQL,
      DOCKER,
      AWS,
      GIT,
      GITHUB,
    ],
    githubUrl: 'https://github.com/SOunit/book_link',
    demoUrl:
      'http://booklink-env.eba-gkg6bpmv.ca-central-1.elasticbeanstalk.com/login',
  },
  {
    id: 2,
    iconClasses: 'fas fa-user',
    title: 'Portfolio',
    text: 'This portfilio site.',
    skills: [REACT, FIREBASE],
    githubUrl: 'https://github.com/SOunit/portfolio',
    demoUrl: '#',
  },
];

const SideProject = () => {
  const cards = PROJECTS.map((project) => (
    <Card key={project.id} data={project} />
  ));
  return (
    <section className={classes['side-project']}>
      <SectionTitle title='Side Projects' />
      <div className={classes['cards']}>{cards}</div>
    </section>
  );
};

export default SideProject;
