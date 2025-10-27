import React from "react";
import styles from "./ModalTrailer.module.css";

export default function ModalTrailer({ url, abierto, onCerrar }) {
  if (!abierto) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.cerrar} onClick={onCerrar}>
          &times;
        </span>
        <iframe
          width="100%"
          height="315"
          src={url + "?autoplay=1"}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
}
