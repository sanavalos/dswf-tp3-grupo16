import React from "react";
import Title from "../title";
import Button from "../avalos/Button";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <Title title="PAGINA NO ENCONTRADA" />
      <Button key={1} text="Portada" url="/" />
    </div>
  );
}

export default NotFound;
