import React from "react";
import ComicPage from "./ComicPage.jsx";
import ButtonsSection from "./ButtonsSection.jsx";
import styles from "./Avalos.module.css";

function Avalos() {
  return (
    <div className={styles.pageContainer}>
      <ButtonsSection buttonData={[{ text: "portada", url: "/" }]} />
      <ComicPage />
      <ButtonsSection
        buttonData={[
          { text: "anterior", url: "/sanchez" },
          { text: "siguiente", url: "/paguaga" }
        ]}
      />
    </div>
  );
}

export default Avalos;
