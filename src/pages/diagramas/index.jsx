import React, { useState } from "react";
import DiagramItems from "./DiagramItems";
import Title from "../../components/title";
import styles from "./Diagrams.module.css";
import diagram1 from "../../assets/tree_diagram.png";
import diagram2 from "../../assets/structure_diagram.png";

export default function Diagrams() {
  const [activeTP, setActiveTP] = useState("d2");

  const entradas = activeTP === "d1" ? diagram1 : diagram2;

  return (
    <section className={styles.diagramContainer}>
      <Title title="DIAGRAMAS" />

      <div className={styles.diagramButton}>
        <button
          className={activeTP === "d1" ? styles.active : ""}
          onClick={() => setActiveTP("d1")}
        >
          Diagrama: Árbol de renderizado
        </button>
        <button
          className={activeTP === "d2" ? styles.active : ""}
          onClick={() => setActiveTP("d2")}
        >
          Diagrama: Organización de carpetas
        </button>
      </div>

      <DiagramItems entradas={entradas} />
    </section>
  );
}
