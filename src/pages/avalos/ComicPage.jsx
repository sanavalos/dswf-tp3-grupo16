import React, { useState, useEffect } from "react";
import styles from "./ComicPage.module.css";
import avalosImg from "../../assets/avalos.png";
import Habilidad from "../../components/habilidad";

function ComicPage() {
  const fullTitle = "GERMÁN AVALOS";
  const skills = [
    { nombre: "HTML5", color: "#E44D26", nivel: 90 },
    { nombre: "CSS3", color: "#1572B6", nivel: 70 },
    { nombre: "JAVASCRIPT", color: "#F7DF1E", nivel: 90 },
    { nombre: "REACT", color: "#61DAFB", nivel: 85 },
    { nombre: "NODE.JS", color: "#42B883", nivel: 65 },
    { nombre: "PYTHON", color: "#3776AB", nivel: 85 },
    { nombre: "DJANGO", color: "#4DB33D", nivel: 80 },
    { nombre: "POSTGRESQL", color: "#3776AB", nivel: 60 },
    { nombre: "GIT", color: "#DE4C36", nivel: 70 }
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (currentIndex < fullTitle.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText(fullTitle.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, fullTitle]);

  return (
    <div className={`${styles.pageContainer} ${styles.animatedFold}`}>
      <div className={styles.comicPage}>
        <div
          className={`${styles.panel} ${styles.heroPanel} ${styles.halftone}`}
        >
          <h1 className={styles.heroTitle}>{displayText}</h1>
          <p className={styles.heroSubtitle}>DESARROLLADOR DE SOFTWARE</p>
          <div className={`${styles.infoBox} ${styles.ageInfo}`}>
            <span className={styles.infoNumber}>28</span>
            <span className={styles.infoLabel}>AÑOS DE EDAD</span>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.profilePanel}`}>
          <img
            src={avalosImg}
            alt="Germán Avalos"
            className={styles.profileImage}
          />
          <div className={styles.ageBox}>
            <span className={styles.infoNumber}>28</span>
            <span className={styles.infoLabel}>AÑOS DE EDAD</span>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.locationPanel}`}>
          <h2 className={styles.panelTitle}>UBICACIÓN</h2>
          <p
            className={styles.panelText}
            style={{ marginBottom: "20px", textAlign: "center" }}
          >
            Mar del Plata, Buenos Aires
          </p>
          <div
            className={`${styles.speechBubble} ${styles.floating}`}
            style={{ margin: "auto" }}
          >
            <p style={{ fontSize: "1rem" }}>"Nacido y criado"</p>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.skillsPanel}`}>
          <h2 className={styles.panelTitle}>HABILIDADES</h2>
          <div className={styles.skillsGrid}>
            {skills.map((s, i) => (

              <div
                key={i}
                className={styles.skillItem}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`
                ${styles.skillContent} 
                ${styles.skillName}
                ${hoveredIndex === i ? styles.hidden : styles.visible}
              `}
                >
                  {s.nombre}
                </div>
                <div
                  className={`
                ${styles.skillContent} 
                ${hoveredIndex === i ? styles.visible : styles.hidden}
              `}
                >
                  <Habilidad
                    nombre={s.nombre}
                    color={s.color}
                    colorTexto="black"
                    fuenteTexto="Permanent Marker"
                    nivel={s.nivel}
                    delay={0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.panel} ${styles.musicPanel} ${styles.zigzagBorder}`}
        >
          <div>
            <h2 className={styles.panelTitle}>DISCOS FAVORITOS</h2>
            <p className={styles.panelText}>Jesus Is King - Kanye West</p>
            <p className={styles.panelText}>The New Abnormal - The Strokes</p>
            <p className={styles.panelText}>Gorillaz - Gorillaz</p>
          </div>
          <div className={styles.infoBox} style={{ marginLeft: "20px" }}>
            <span className={styles.infoNumber}>30+</span>
            <span className={styles.infoLabel}>Canciones</span>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.moviesPanel}`}>
          <h2 className={styles.panelTitle}>PELÍCULAS FAVORITAS</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>
              <p className={styles.panelText}>War Dogs</p>
              <p className={styles.panelText}>The Hateful Eight</p>
              <p className={styles.panelText}>Annihilation</p>
            </div>
          </div>
        </div>

        <div className={styles.footerPanel}>
          <p className={styles.panelText} style={{ fontSize: "1.5rem" }}>
            FUTURO TÉCNICO EN DESARROLLO DE SOFTWARE!
          </p>
          <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>
            Instituto de Formación Técnica Superior N° 29 - 2025
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComicPage;
