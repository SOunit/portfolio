import SectionTitle from "../sectionTitle/SectionTitle";
import Item from "./item/Item";
import classes from "./ToolSet.module.css";

import { FRONT_DATA, BACK_DATA, INFRA_DATA } from "../../data/tool-set";

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
