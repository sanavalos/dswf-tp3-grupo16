import React from "react";
import styles from "./Title.module.css";

function SectionTitle({ title, id }) {
  return (
    <section className={styles.titulo} id={id}>
      <h1 className="animate__animated animate__fadeInDown">{title}</h1>
    </section>
  );
}

export default SectionTitle;
