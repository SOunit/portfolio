import {
  ATOMIC_DESIGN,
  CLEAN_ARCHITECTURE,
  CSS3,
  HTML5,
  JAVA_SCRIPT,
  J_QUERY,
  REACT,
  REACT_NATIVE,
  REACT_QUERY,
  REACT_REDUX_TOOLKIT,
  TAILWIND_CSS,
  TYPE_SCRIPT,
  WEB_PACK,
} from "../constants/front.constants";
import {
  AWS,
  BITBUCKET,
  DOCKER,
  EXPO,
  FIREBASE,
  GIT,
  GITHUB,
  HEROKU,
  LINUX,
  NGINX,
  SERVERLESS_API,
} from "../constants/infra.constants";
import {
  AWS_API_GATEWAY,
  AWS_LAMBDA,
  EXPRESS,
  GRAPHQL,
  JAVA,
  NODE_JS,
  PHP,
  SOCKET_IO,
} from "../constants/back.constants";
import {
  MONGOOSE,
  MONGO_DB,
  MY_SQL,
  ORACLE_DB,
  POSTGRESQL,
  SEQUELIZE,
  SQL_SERVER,
} from "../constants/db.constants";
import { DOMAIN_DRIVEN_DESIGN } from "../constants/fullstack.constants";
import { WORDPRESS } from "../constants/cms.constants";

const FRONT_DATA = [
  {
    title: REACT,
    iconClassName: "fab fa-react",
  },

  {
    title: REACT_REDUX_TOOLKIT,
    iconClassName: "fab fa-react",
  },
  {
    title: REACT_QUERY,
    iconClassName: "fab fa-react",
  },

  {
    title: TYPE_SCRIPT,
    iconClassName: "fab fa-js",
  },
  {
    title: TAILWIND_CSS,
    iconClassName: "fab fa-css3-alt",
  },
  {
    title: REACT_NATIVE,
    iconClassName: "fab fa-react",
  },
  {
    title: EXPO,
    iconClassName: "fab fa-react",
  },
  {
    title: WEB_PACK,
    iconClassName: "fas fa-cube",
  },
  {
    title: CLEAN_ARCHITECTURE,
    iconClassName: "fab fa-buromobelexperte",
  },
  {
    title: ATOMIC_DESIGN,
    iconClassName: "fab fa-buromobelexperte",
  },
  {
    title: JAVA_SCRIPT,
    iconClassName: "fab fa-js-square",
  },
  {
    title: HTML5,
    iconClassName: "fab fa-html5",
  },
  {
    title: CSS3,
    iconClassName: "fab fa-css3-alt",
  },

  {
    title: J_QUERY,
    iconClassName: "fab fa-js",
  },
];

const BACK_DATA = [
  {
    title: NODE_JS,
    iconClassName: "fab fa-node",
  },
  {
    title: EXPRESS,
    iconClassName: "fab fa-node",
  },
  {
    title: SOCKET_IO,
    iconClassName: "fab fa-node",
  },
  {
    title: GRAPHQL,
    iconClassName: "fab fa-node",
  },
  {
    title: MONGO_DB,
    iconClassName: "fas fa-database",
  },
  {
    title: MONGOOSE,
    iconClassName: "fas fa-database",
  },
  {
    title: SEQUELIZE,
    iconClassName: "fas fa-database",
  },
  {
    title: POSTGRESQL,
    iconClassName: "fas fa-database",
  },
  {
    title: MY_SQL,
    iconClassName: "fas fa-database",
  },
  {
    title: ORACLE_DB,
    iconClassName: "fas fa-database",
  },
  {
    title: SQL_SERVER,
    iconClassName: "fas fa-database",
  },
  {
    title: DOMAIN_DRIVEN_DESIGN,
    iconClassName: "fab fa-buromobelexperte",
  },
  {
    title: JAVA,
    iconClassName: "fab fa-java",
  },
  {
    title: "Seasar(Java MVC framework)",
    iconClassName: "fab fa-java",
  },
  {
    title: WORDPRESS,
    iconClassName: "fab fa-wordpress",
  },
  {
    title: PHP,
    iconClassName: "fab fa-php",
  },
];

const INFRA_DATA = [
  {
    title: HEROKU,
    iconClassName: "fas fa-server",
  },
  {
    title: DOCKER,
    iconClassName: "fab fa-docker",
  },
  {
    title: AWS,
    iconClassName: "fab fa-aws",
  },
  {
    title: SERVERLESS_API,
    iconClassName: "fab fa-aws",
  },
  {
    title: AWS_LAMBDA,
    iconClassName: "fab fa-aws",
  },
  {
    title: AWS_API_GATEWAY,
    iconClassName: "fab fa-aws",
  },
  {
    title: LINUX,
    iconClassName: "fab fa-linux",
  },
  {
    title: NGINX,
    iconClassName: "fas fa-server",
  },
  {
    title: FIREBASE,
    iconClassName: "fas fa-server",
  },
  {
    title: GIT,
    iconClassName: "fab fa-git-alt",
  },
  {
    title: GITHUB,
    iconClassName: "fab fa-github-square",
  },
  {
    title: BITBUCKET,
    iconClassName: "fab fa-bitbucket",
  },
];

export { FRONT_DATA, BACK_DATA, INFRA_DATA };
