import React from "react";
import styles from "./Bitacora.module.css";

export default function BitacoraItems({ entradas }) {
  return (
    <div className={styles.bitacoraCards}>
      {entradas.map((entrada, i) => (
        <div key={i} className={styles.bitacoraCard}>
          <h3>{entrada.titulo}</h3>
          <p>{entrada.descripcion}</p>
          <span className={styles.fecha}>{entrada.fecha}</span>
        </div>
      ))}
    </div>
  );
}
