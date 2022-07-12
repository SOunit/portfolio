import {
  ATOMIC_DESIGN,
  CSS3,
  HTML5,
  JAVA_SCRIPT,
  J_QUERY,
  REACT,
  REACT_NATIVE,
  TYPE_SCRIPT,
} from "../constants/front.constants";
import {
  DOCKER,
  EXPO,
  LINUX,
  NGINX,
  TOMCAT,
} from "../constants/infra.constants";
import { JAVA, PHP, VBA } from "../constants/back.constants";
import {
  MY_SQL,
  ORACLE_DB,
  POSTGRESQL,
  SQL_SERVER,
} from "../constants/db.constants";
import { DOMAIN_DRIVEN_DESIGN } from "../constants/fullstack.constants";
import { WORDPRESS } from "../constants/cms.constants";
import {
  HTML_CODER,
  JAVA_FULL_STACK_DEVELOPER,
  REACT_FULL_STACK_DEVELOPER,
} from "../constants/positionTitle.constants";
import { OSAKA_JAPAN } from "../constants/place.constants";

export const DATA_LIST = [
  {
    id: "8",
    isFront: true,
    companyName: "KUSANA Co.Ltd.",
    companyBusiness: "Item Management App",
    jobTitle: "React Native Frontend Developer",
    term: "Feb 2022 - Apr 2022 (2 mos)",
    place: "Kusatsu, Japan",
    skills: [
      REACT_NATIVE,
      EXPO,
      TYPE_SCRIPT,
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
    jobTitle: REACT_FULL_STACK_DEVELOPER,
    term: "Nov 2021 - Mar 2022 (5 mos)",
    place: "Vancouver, Canada",
    skills: [REACT, WORDPRESS, PHP, MY_SQL, NGINX, LINUX],
  },
  {
    id: "6",
    isFront: false,
    companyName: "SG Systems Co.Ltd.",
    companyBusiness: "Logistics Management System",
    jobTitle: JAVA_FULL_STACK_DEVELOPER,
    term: "Oct 2020 - Jun 2021 (9 mos)",
    place: "Kyoto, Japan",
    skills: [JAVA, POSTGRESQL, TOMCAT],
  },
  {
    id: "5",
    isFront: false,
    companyName: "NEC Corporation",
    companyBusiness: "Power Monitoring System",
    jobTitle: JAVA_FULL_STACK_DEVELOPER,
    term: "Feb 2020 - Sep 2020 (8 mos)",
    place: OSAKA_JAPAN,
    skills: [JAVA, JAVA_SCRIPT, HTML5, CSS3, POSTGRESQL, TOMCAT, VBA],
  },
  {
    id: "4",
    isFront: true,
    companyName: "Toami Corp.",
    companyBusiness: "Homepage update",
    jobTitle: HTML_CODER,
    term: "Jan 2020 (1 mos)",
    place: OSAKA_JAPAN,
    skills: [JAVA_SCRIPT, J_QUERY, HTML5, CSS3, PHP],
  },
  {
    id: "3",
    isFront: false,
    companyName: "ITEC Hankyu Hanshin Co.Ltd.",
    companyBusiness: "EC services",
    jobTitle: JAVA_FULL_STACK_DEVELOPER,
    term: "Aug 2018 - Dec 2019 (1yr 5mos)",
    place: OSAKA_JAPAN,
    skills: [JAVA, HTML5, CSS3, MY_SQL, TOMCAT],
  },
  {
    id: "2",
    isFront: false,
    companyName: "Suzuyo Co.Ltd.",
    companyBusiness: "Warehouse Management System",
    jobTitle: "Java Backend Developer",
    term: "Mar 2018 - Jul 2018 (5mos)",
    place: OSAKA_JAPAN,
    skills: [JAVA, ORACLE_DB, TOMCAT],
  },
  {
    id: "1",
    isFront: false,
    companyName: "Business Brain Showa-ota Inc.",
    companyBusiness: "Accounting Management System",
    jobTitle: JAVA_FULL_STACK_DEVELOPER,
    term: "Sept 2017 - Sept 2018 (1 yr)",
    place: OSAKA_JAPAN,
    skills: [JAVA, "Servlet / JSP", SQL_SERVER, TOMCAT, VBA],
  },
];
