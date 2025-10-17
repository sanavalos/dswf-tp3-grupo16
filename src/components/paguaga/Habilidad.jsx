import React from "react";
import styles from "./Habilidad.module.css";

export default function Habilidad({ nombre, color, delay }) {
  return (
    <span
      className={styles.tag}
      style={{ backgroundColor: color, animationDelay: `${delay}s` }}
    >
      {nombre}
    </span>
  );
}
