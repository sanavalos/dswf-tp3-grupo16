import React from "react";
import Tarjeta from "./Tarjeta.jsx";
import styles from "./index.module.css";

function Paguaga() {
  return (
    <>
      <div className={styles.fondoAnimado} aria-hidden="true"></div>

      <div className={styles.wrapper}>
        <Tarjeta />
      </div>
    </>
  );
}

export default Paguaga;
