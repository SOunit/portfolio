import SectionTitle from "../sectionTitle/SectionTitle";
import Item from "./item/Item";
import classes from "./ToolSet.module.css";

import {
  ATOMIC_DESIGN,
  AWS,
  BITBUCKET,
  CSS3,
  DOCKER,
  DOMAIN_DRIVEN_DESIGN,
  FIREBASE,
  GIT,
  GITHUB,
  GOLANG,
  HTML5,
  JAVA,
  JAVA_SCRIPT,
  J_QUERY,
  LINUX,
  MY_SQL,
  NGINX,
  NODE_JS,
  ORACLE_DB,
  PHP,
  POSTGRESQL,
  REACT,
  SQL_SERVER,
  TYPE_SCRIPT,
  WORDPRESS,
} from "../../util/constants";

const FRONT_DATA = [
  {
    title: REACT,
    iconClassName: "fab fa-react",
    rate: "☆☆☆☆",
  },
  {
    title: JAVA_SCRIPT,
    iconClassName: "fab fa-js-square",
    rate: "☆☆☆",
  },
  {
    title: TYPE_SCRIPT,
    iconClassName: "fab fa-js",
    rate: "☆☆☆",
  },
  {
    title: ATOMIC_DESIGN,
    iconClassName: "fab fa-buromobelexperte",
    rate: "☆☆☆☆",
  },
  {
    title: HTML5,
    iconClassName: "fab fa-html5",
    rate: "☆☆☆☆☆",
  },
  {
    title: CSS3,
    iconClassName: "fab fa-css3-alt",
    rate: "☆☆☆☆☆",
  },
  {
    title: J_QUERY,
    iconClassName: "fab fa-js",
    rate: "☆☆☆",
  },
];

const BACK_DATA = [
  {
    title: NODE_JS,
    iconClassName: "fab fa-node",
    rate: "☆☆☆☆",
  },
  {
    title: GOLANG,
    iconClassName: "fab fa-google",
    rate: "☆☆☆☆",
  },
  {
    title: DOMAIN_DRIVEN_DESIGN,
    iconClassName: "fab fa-buromobelexperte",
    rate: "☆☆☆☆",
  },
  {
    title: WORDPRESS,
    iconClassName: "fab fa-wordpress",
    rate: "☆☆☆☆",
  },
  {
    title: PHP,
    iconClassName: "fab fa-php",
    rate: "☆☆☆",
  },
  {
    title: POSTGRESQL,
    iconClassName: "fas fa-database",
    rate: "☆☆☆☆",
  },
  {
    title: MY_SQL,
    iconClassName: "fas fa-database",
    rate: "☆☆☆☆",
  },
  {
    title: ORACLE_DB,
    iconClassName: "fas fa-database",
    rate: "☆☆☆☆",
  },
  {
    title: SQL_SERVER,
    iconClassName: "fas fa-database",
    rate: "☆☆☆☆",
  },
  {
    title: JAVA,
    iconClassName: "fab fa-java",
    rate: "☆☆☆☆☆",
  },
  {
    title: "Seasar(Java MVC framework)",
    iconClassName: "fab fa-java",
    rate: "☆☆☆☆☆",
  },
];

const INFRA_DATA = [
  {
    title: DOCKER,
    iconClassName: "fab fa-docker",
    rate: "☆☆☆☆",
  },
  {
    title: AWS,
    iconClassName: "fab fa-aws",
    rate: "☆☆☆",
  },
  {
    title: LINUX,
    iconClassName: "fab fa-linux",
    rate: "☆☆☆",
  },
  {
    title: NGINX,
    iconClassName: "fas fa-server",
    rate: "☆☆☆",
  },
  {
    title: FIREBASE,
    iconClassName: "fas fa-server",
    rate: "☆☆☆",
  },
  {
    title: GIT,
    iconClassName: "fab fa-git-alt",
    rate: "☆☆☆☆",
  },
  {
    title: GITHUB,
    iconClassName: "fab fa-github-square",
    rate: "☆☆☆☆",
  },
  {
    title: BITBUCKET,
    iconClassName: "fab fa-bitbucket",
    rate: "☆☆☆☆",
  },
];

const ToolSet = () => {
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
    <section id="tool-set">
      <SectionTitle title="ToolSet" />
      <h3 className={classes["tools-title"]}>Frontend</h3>
      <div className={classes["tool-set-items"]}>{frontItems}</div>

      <h3 className={classes["tools-title"]}>Backend</h3>
      <div className={classes["tool-set-items"]}>{backItems}</div>

      <h3 className={classes["tools-title"]}>Infrastructure</h3>
      <div className={classes["tool-set-items"]}>{infraItems}</div>
    </section>
  );
};

export default ToolSet;
