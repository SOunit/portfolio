import SectionTitle from '../sectionTitle/SectionTitle';
import Card from './card/Card';
import classes from './Worklog.module.css';

import {
  CSS3,
  HTML5,
  HTML_CODER,
  JAVA,
  JAVA_SCRIPT,
  J_QUERY,
  MY_SQL,
  ORACLE_DB,
  OSAKA_JAPAN,
  PHP,
  POSTGRE_SQL,
  SOFTWARE_ENGINEER,
  SQL_SERVER,
  TOMCAT,
  VBA,
  CODING,
  BASIC_DESIGN,
  DETAIL_DESIGN,
  UNIT_TEST,
  INTEGRATION_TEST,
  SYSTEM_TEST,
} from '../../util/consts';

const DATA_LIST = [
  {
    id: '6',
    isFront: false,
    companyName: 'SG Systems Co.Ltd.',
    companyBusiness: 'Logistics Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Oct 2020 - Jun 2021 (9 mos)',
    place: 'Kyoto, Japan',
    tasks: [
      BASIC_DESIGN,
      DETAIL_DESIGN,
      CODING,
      UNIT_TEST,
      INTEGRATION_TEST,
      SYSTEM_TEST,
    ],
    usings: [JAVA, POSTGRE_SQL, TOMCAT],
  },
  {
    id: '5',
    isFront: false,
    companyName: 'NEC Corporation',
    companyBusiness: 'Power Monitoring System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Feb 2020 - Sep 2020 (8 mos)',
    place: OSAKA_JAPAN,
    tasks: [
      BASIC_DESIGN,
      DETAIL_DESIGN,
      CODING,
      UNIT_TEST,
      INTEGRATION_TEST,
      SYSTEM_TEST,
    ],
    usings: [JAVA, JAVA_SCRIPT, HTML5, CSS3, POSTGRE_SQL, TOMCAT, VBA],
  },
  {
    id: '4',
    isFront: true,
    companyName: 'Toami Corp.',
    companyBusiness: 'Homepage update',
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
    companyBusiness: 'EC services',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Aug 2018 - Dec 2019 (1yr 5mos)',
    place: OSAKA_JAPAN,
    tasks: [
      BASIC_DESIGN,
      DETAIL_DESIGN,
      CODING,
      UNIT_TEST,
      INTEGRATION_TEST,
      SYSTEM_TEST,
    ],
    usings: [JAVA, HTML5, CSS3, MY_SQL, TOMCAT],
  },
  {
    id: '2',
    isFront: false,
    companyName: 'Suzuyo Co.Ltd.',
    companyBusiness: 'Warehouse Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Mar 2018 - Jul 2018 (5mos)',
    place: OSAKA_JAPAN,
    tasks: [BASIC_DESIGN, DETAIL_DESIGN, CODING, UNIT_TEST, INTEGRATION_TEST],
    usings: [JAVA, ORACLE_DB, TOMCAT],
  },
  {
    id: '1',
    isFront: false,
    companyName: 'Business Brain Showa-ota Inc.',
    companyBusiness: 'Accounting Management System',
    jobTitle: SOFTWARE_ENGINEER,
    term: 'Sept 2017 - Sept 2018 (1 yr)',
    place: OSAKA_JAPAN,
    tasks: [DETAIL_DESIGN, CODING, UNIT_TEST],
    usings: [JAVA, 'Servlets / JSP', SQL_SERVER, TOMCAT, VBA],
  },
];

const Worklog = () => {
  const cards = DATA_LIST.map((data) => <Card key={data.id} data={data} />);
  return (
    <section id='work-log' className={classes['worklog-section']}>
      <SectionTitle title='Work Log' />
      <div className={classes['cards']}>{cards}</div>
    </section>
  );
};

export default Worklog;
