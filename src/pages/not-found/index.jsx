import React from "react";
import Title from "../../components/title";
import Button from "../../components/button";
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
