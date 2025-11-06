import React, {useEffect, useState} from "react";
import styles from "./Diagrams.module.css";

export default function DiagramItems({ entradas }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 10);
    return () => clearTimeout(timer);
  }, [entradas]);

  return (
    <div className={`${styles.diagramImage} ${
            animate ? "animate__animated animate__fadeIn" : ""
          }`}>
      <img src={entradas} alt={`Diagrama ${entradas}`} />
    </div>
  );
}
