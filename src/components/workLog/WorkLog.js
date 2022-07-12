import SectionTitle from "../sectionTitle/SectionTitle";
import Card from "./card/Card";
import classes from "./WorkLog.module.css";

import { DATA_LIST } from "../../data/work-log";

const WorkLog = () => {
  const cards = DATA_LIST.map((data) => <Card key={data.id} data={data} />);
  return (
    <section id="work-log" className={classes["work-log-section"]}>
      <SectionTitle title="Work Log" />
      <div className={classes["icons"]}>
        <div className={`${classes["icon"]} ${classes["icon--front"]}`}>
          Frontend
        </div>
        <div className={`${classes["icon"]} ${classes["icon--back"]}`}>
          Backend
        </div>
      </div>
      <div className={classes["cards"]}>{cards}</div>
    </section>
  );
};

export default WorkLog;
