import { DATA_LIST } from "../../data/work-log";
import BackIcon from "../atoms/BackIcon";
import FrontIcon from "../atoms/FrontIcon";
import SectionTitle from "../atoms/SectionTitle";
import WorkLogCard from "./WorkLogCard";

import classes from "./WorkLog.module.css";

const WorkLog = () => {
  const workLogCards = DATA_LIST.map((data) => (
    <WorkLogCard key={data.id} data={data} />
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
