import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={classes["welcome"]} id="top">
      <h2 className={classes["welcome__title"]}>Thank you</h2>
      <p className={classes["welcome__caption"]}>
        for visiting my portfolio page!
      </p>
      <p className={classes["welcome__text"]}>
        Full Stack Developer for 4+ years experience in Web Development!
      </p>
    </div>
  );
};

export default Welcome;
