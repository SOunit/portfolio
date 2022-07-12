import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./card/Card";
import classes from "./WorkLog.module.css";

import { DATA_LIST } from "../../data/work-log";
import FrontIcon from "./icon/FrontIcon";
import BackIcon from "./icon/BackIcon";

const WorkLog = () => {
  const workLogCards = DATA_LIST.map((data) => (
    <Card key={data.id} data={data} />
  ));

  return (
    <section id="work-log" className={classes["work-log-section"]}>
      <SectionTitle title="Work Log" />
      <div className={classes["icons"]}>
        <FrontIcon />
        <BackIcon />
      </div>
      <div className={classes["cards"]}>{workLogCards}</div>
    </section>
  );
};

export default WorkLog;
