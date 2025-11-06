import React, { useState, useEffect } from "react";
import styles from "./Bitacora.module.css";

export default function BitacoraItems({ entradas }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10);
    return () => clearTimeout(timer);
  }, [entradas]);

  return (
    <div
      className={`${styles.bitacoraCards} ${
        animate ? "animate__animated animate__zoomInDown" : ""
      }`}
    >
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
