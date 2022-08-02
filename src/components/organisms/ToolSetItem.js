import classes from "./ToolSetItem.module.css";

const ToolSetItem = (props) => {
  return (
    <div className={classes["item"]}>
      <i className={`${props.data.iconClassName} ${classes["item__icon"]}`}></i>
      <p className={classes["item__title"]}>{props.data.title}</p>
      <span className={classes["item__rate"]}>{props.data.rate}</span>
    </div>
  );
};

export default ToolSetItem;
