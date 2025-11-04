import React, { useEffect, useState } from "react";
import styles from "./Habilidad.module.css";

export default function Habilidad({ nombre, color, nivel, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={styles.habilidad}>
      <div className={styles.info}>
        <span className={styles.nombre}>{nombre}</span>
        <span className={styles.nivelTexto}>{nivel}%</span>
      </div>
      <div className={styles.barra}>
        <div
          className={`${styles.progreso} ${visible ? styles.visible : ""}`}
          style={{
            background: color,
            width: visible ? `${nivel}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );
}
