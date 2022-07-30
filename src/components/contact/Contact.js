import React from "react";
import SectionTitle from "../common/sectionTitle/SectionTitle";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes["contact"]}>
      <SectionTitle title="Contact" />
      <div className={classes["contact__info-card"]}>
        <div className={classes["contact__info"]}>
          <i
            className={`fas fa-phone-alt ${classes["contact__info-icon"]}`}
          ></i>
          +1 (604) 365 5586
        </div>
        <div className={classes["contact__info"]}>
          <i className={`far fa-envelope ${classes["contact__info-icon"]}`}></i>
          sho.okawa.dev@gmail.com
        </div>
      </div>
    </section>
  );
};

export default Contact;
