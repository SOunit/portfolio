import React from "react";
import SectionTitle from "../common/sectionTitle/SectionTitle";
import classes from "./Contact.module.css";
import ContactCard from "./ContactCard";

const Contact = () => {
  return (
    <section id="contact" className={classes["contact"]}>
      <SectionTitle title="Contact" />
      <ContactCard />
    </section>
  );
};

export default Contact;
