import React from "react";
import styles from "./BotonNavegacion.module.css";

export default function BotonNavegacion({ texto, link }) {
  return (
    <button
      className={styles.boton}
      onClick={() => (window.location.href = link)}
    >
      {texto}
    </button>
  );
}
