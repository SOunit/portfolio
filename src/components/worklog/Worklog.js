import SectionTitle from '../sectionTitle/SectionTitle';
import Card from './card/Card';
import classes from './Worklog.module.css';

import {
  BUG_FIX,
  CSS3,
  ENHANCEMENT,
  HTML5,
  HTML_CODER,
  JAVA,
  JAVA_SCRIPT,
  J_QUERY,
  MY_SQL,
  ORACLE_DB,
  OSAKA_JAPAN,
  PHP,
  POSTGRES_SQL,
  SOFTWARE_ENGINEER,
  SQL_SERVER,
  TOMCAT,
  VBA,
} from '../consts/consts';

const DATA_LIST = [
  {
    id: '6',
    isFront: false,
    companyName: 'SG Systems Co.Ltd.',
    compnayBusiness: 'Logistics Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Oct 2020 - Jun 2021 (9 mos)',
    place: 'Kyoto, Japan',
    tasks: [BUG_FIX, ENHANCEMENT],
    usings: [JAVA, POSTGRES_SQL, TOMCAT],
  },
  {
    id: '5',
    isFront: false,
    companyName: 'NEC Corporation',
    compnayBusiness: 'Power Monitoring System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Feb 2020 - Sep 2020 (8 mos)',
    place: OSAKA_JAPAN,
    tasks: [BUG_FIX, ENHANCEMENT],
    usings: [JAVA, JAVA_SCRIPT, HTML5, CSS3, POSTGRES_SQL, TOMCAT, VBA],
  },
  {
    id: '4',
    isFront: true,
    companyName: 'Toami Corp.',
    compnayBusiness: 'Homepage update',
    jobTitle: HTML_CODER,
    term: 'Jan 2020 (1 mos)',
    place: OSAKA_JAPAN,
    tasks: ['Create web pages'],
    usings: [JAVA_SCRIPT, HTML5, CSS3, J_QUERY, PHP],
  },
  {
    id: '3',
    isFront: false,
    companyName: 'ITEC Hankyu Hanshin Co.Ltd.',
    compnayBusiness: 'EC services',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Aug 2018 - Dec 2019 (1yr 5mos)',
    place: OSAKA_JAPAN,
    tasks: [BUG_FIX, ENHANCEMENT],
    usings: [JAVA, HTML5, CSS3, MY_SQL, TOMCAT],
  },
  {
    id: '2',
    isFront: false,
    companyName: 'Suzuyo Co.Ltd.',
    compnayBusiness: 'Warehouse Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Mar 2018 - Jul 2018 (5mos)',
    place: OSAKA_JAPAN,
    tasks: [ENHANCEMENT],
    usings: [JAVA, ORACLE_DB, TOMCAT],
  },
  {
    id: '1',
    isFront: false,
    companyName: 'Business Brain Showa-ota Inc.',
    compnayBusiness: 'Accounting Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Sept 2017 - Sept 2018 (1 yr)',
    place: OSAKA_JAPAN,
    tasks: [BUG_FIX, 'Data maintenance', ENHANCEMENT],
    usings: [JAVA, 'Servlets / JSP', SQL_SERVER, TOMCAT, VBA],
  },
];

const Worklog = () => {
  const cards = DATA_LIST.map((data) => <Card key={data.id} data={data} />);
  return (
    <section className={classes['worklog-section']}>
      <SectionTitle title='Work Log' />
      {cards}
    </section>
  );
};

export default Worklog;
