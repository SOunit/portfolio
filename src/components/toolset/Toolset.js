import SectionTitle from '../sectionTitle/SectionTitle';
import Item from './item/Item';
import classes from './Toolset.module.css';

const FRONT_DATA = [
  {
    title: 'React.js',
    iconClassName: 'fab fa-react',
    rate: '☆☆☆☆',
  },
  {
    title: 'JavaScript',
    iconClassName: 'fab fa-js-square',
    rate: '☆☆☆',
  },
  {
    title: 'TypeScript',
    iconClassName: 'fab fa-js',
    rate: '☆☆☆',
  },
  {
    title: 'HTML5',
    iconClassName: 'fab fa-html5',
    rate: '☆☆☆☆☆',
  },
  {
    title: 'CSS3',
    iconClassName: 'fab fa-css3-alt',
    rate: '☆☆☆☆☆',
  },
  {
    title: 'jQuery',
    iconClassName: 'fab fa-js',
    rate: '☆☆☆',
  },
];

const BACK_DATA = [
  {
    title: 'Node.js',
    iconClassName: 'fab fa-node',
    rate: '☆☆☆☆',
  },
  {
    title: 'PostgresSQL',
    iconClassName: 'fas fa-database',
    rate: '☆☆☆☆',
  },
  {
    title: 'MySQL',
    iconClassName: 'fas fa-database',
    rate: '☆☆☆☆',
  },
  {
    title: 'Oracle Database',
    iconClassName: 'fas fa-database',
    rate: '☆☆☆☆',
  },
  {
    title: 'SQL Server',
    iconClassName: 'fas fa-database',
    rate: '☆☆☆☆',
  },
  {
    title: 'Java',
    iconClassName: 'fab fa-java',
    rate: '☆☆☆☆☆',
  },
  {
    title: 'Seasar(Java MVC framework)',
    iconClassName: 'fab fa-java',
    rate: '☆☆☆☆☆',
  },
];

const INFRA_DATA = [
  {
    title: 'Docker',
    iconClassName: 'fab fa-docker',
    rate: '☆☆☆☆',
  },
  {
    title: 'AWS',
    iconClassName: 'fab fa-aws',
    rate: '☆☆☆',
  },
  {
    title: 'Firebase',
    iconClassName: 'fas fa-server',
    rate: '☆☆☆',
  },
  {
    title: 'Git',
    iconClassName: 'fab fa-git-alt',
    rate: '☆☆☆',
  },
  {
    title: 'GitHub',
    iconClassName: 'fab fa-github-square',
    rate: '☆☆☆',
  },
];

const Toolset = () => {
  const frontItems = FRONT_DATA.map((data) => (
    <Item key={data.title} data={data} />
  ));
  const backItems = BACK_DATA.map((data) => (
    <Item key={data.title} data={data} />
  ));
  const infraItems = INFRA_DATA.map((data) => (
    <Item key={data.title} data={data} />
  ));
  return (
    <section id='toolset-section'>
      <SectionTitle title='Toolset' />
      <h3 className={classes['tools-title']}>Frontend</h3>
      <div className={classes['toolset-items']}>{frontItems}</div>

      <h3 className={classes['tools-title']}>Backend</h3>
      <div className={classes['toolset-items']}>{backItems}</div>

      <h3 className={classes['tools-title']}>Infrastructure</h3>
      <div className={classes['toolset-items']}>{infraItems}</div>
    </section>
  );
};

export default Toolset;
