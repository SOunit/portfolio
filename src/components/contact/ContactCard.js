import React from "react";
import classes from "./ContactCard.module.css";

const ContactCard = () => {
  return (
    <div className={classes["contact-card"]}>
      <div className={classes["contact-card__info"]}>
        <i
          className={`fas fa-phone-alt ${classes["contact-card__info-icon"]}`}
        ></i>
        +1 (604) 365 5586
      </div>
      <div className={classes["contact-card__info"]}>
        <i
          className={`far fa-envelope ${classes["contact-card__info-icon"]}`}
        ></i>
        sho.okawa.dev@gmail.com
      </div>
    </div>
  );
};

export default ContactCard;
