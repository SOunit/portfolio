import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./card/Card";
import classes from "./Worklog.module.css";

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
  JAVA_FULL_STACK_DEVELPER,
  SQL_SERVER,
  TOMCAT,
  VBA,
  REACT,
  NGINX,
  WORDPRESS,
  LINUX,
  REACT_FULL_STACK_DEVELPER,
  GOLANG,
  ECHO,
  DOCKER,
  REACT_NATIVE,
  TYPE_SCRIPT,
  DOMAIN_DRIVEN_DESIGN,
  ATOMIC_DESIGN,
} from "../../util/consts";

const DATA_LIST = [
  {
    id: "8",
    isFront: true,
    companyName: "KUSANA Co.Ltd.",
    companyBusiness: "Item Management App",
    jobTitle: "React Native and Go Full Stack Developer",
    term: "Feb 2022 - Current (1 mos)",
    place: "Kusatsu, Japan",
    usings: [
      REACT_NATIVE,
      TYPE_SCRIPT,
      GOLANG,
      ECHO,
      DOCKER,
      DOMAIN_DRIVEN_DESIGN,
      ATOMIC_DESIGN,
      MY_SQL,
    ],
  },
  {
    id: "7",
    isFront: true,
    companyName: "Goopter eCommerce Solutions",
    companyBusiness: "eCommerce",
    jobTitle: REACT_FULL_STACK_DEVELPER,
    term: "Nov 2021 - Current (5 mos)",
    place: "Vancouver, Canada",
    usings: [REACT, WORDPRESS, PHP, MY_SQL, NGINX, LINUX],
  },
  {
    id: "6",
    isFront: false,
    companyName: "SG Systems Co.Ltd.",
    companyBusiness: "Logistics Management System",
    jobTitle: JAVA_FULL_STACK_DEVELPER,
    term: "Oct 2020 - Jun 2021 (9 mos)",
    place: "Kyoto, Japan",
    usings: [JAVA, POSTGRE_SQL, TOMCAT],
  },
  {
    id: "5",
    isFront: false,
    companyName: "NEC Corporation",
    companyBusiness: "Power Monitoring System",
    jobTitle: JAVA_FULL_STACK_DEVELPER,
    term: "Feb 2020 - Sep 2020 (8 mos)",
    place: OSAKA_JAPAN,
    usings: [JAVA, JAVA_SCRIPT, HTML5, CSS3, POSTGRE_SQL, TOMCAT, VBA],
  },
  {
    id: "4",
    isFront: true,
    companyName: "Toami Corp.",
    companyBusiness: "Homepage update",
    jobTitle: HTML_CODER,
    term: "Jan 2020 (1 mos)",
    place: OSAKA_JAPAN,
    usings: [JAVA_SCRIPT, J_QUERY, HTML5, CSS3, PHP],
  },
  {
    id: "3",
    isFront: false,
    companyName: "ITEC Hankyu Hanshin Co.Ltd.",
    companyBusiness: "EC services",
    jobTitle: JAVA_FULL_STACK_DEVELPER,
    term: "Aug 2018 - Dec 2019 (1yr 5mos)",
    place: OSAKA_JAPAN,
    usings: [JAVA, HTML5, CSS3, MY_SQL, TOMCAT],
  },
  {
    id: "2",
    isFront: false,
    companyName: "Suzuyo Co.Ltd.",
    companyBusiness: "Warehouse Management System",
    jobTitle: "Java Backend Developer",
    term: "Mar 2018 - Jul 2018 (5mos)",
    place: OSAKA_JAPAN,
    usings: [JAVA, ORACLE_DB, TOMCAT],
  },
  {
    id: "1",
    isFront: false,
    companyName: "Business Brain Showa-ota Inc.",
    companyBusiness: "Accounting Management System",
    jobTitle: JAVA_FULL_STACK_DEVELPER,
    term: "Sept 2017 - Sept 2018 (1 yr)",
    place: OSAKA_JAPAN,
    usings: [JAVA, "Servlets / JSP", SQL_SERVER, TOMCAT, VBA],
  },
];

const Worklog = () => {
  const cards = DATA_LIST.map((data) => <Card key={data.id} data={data} />);
  return (
    <section id="work-log" className={classes["worklog-section"]}>
      <SectionTitle title="Work Log" />
      <div className={classes["cards"]}>{cards}</div>
    </section>
  );
};

export default Worklog;
