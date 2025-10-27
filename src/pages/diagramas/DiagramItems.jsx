import React from "react";
import styles from "./Diagrams.module.css";

export default function DiagramItems({ entradas }) {
  return (
    <div className={styles.diagramImage}>
      <img src={entradas} alt={`Diagrama ${entradas}`} />
    </div>
  );
}
