import React, { useEffect, useState } from "react";
import styles from "./Habilidad.module.css";

export default function Habilidad({ nombre, color, delay }) {
  const [aparecer, setAparecer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAparecer(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      className={`${styles.tag} ${aparecer ? styles.appear : ""}`}
      style={{ backgroundColor: color }}
    >
      {nombre}
    </span>
  );
}
