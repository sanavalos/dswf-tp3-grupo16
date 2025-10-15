import React from 'react'
import styles from './ComicPage.module.css'
import avalosImg from '../../assets/avalos.png'

function ComicPage() {
  return (
    <div className={`${styles.pageContainer} ${styles.animatedFold}`}>
      <div className={styles.comicPage}>
        <div className={`${styles.panel} ${styles.heroPanel} ${styles.halftone}`}>
          <h1 className={styles.heroTitle}>GERMÁN AVALOS</h1>
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
          <p className={styles.panelText} style={{marginBottom: '20px', textAlign: 'center'}}>
            Mar del Plata, Buenos Aires
          </p>
          <div className={`${styles.speechBubble} ${styles.floating}`} style={{margin: 'auto'}}>
            <p style={{fontSize: '1rem'}}>"Nacido y criado"</p>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.skillsPanel}`}>
          <h2 className={styles.panelTitle}>HABILIDADES</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillItem}>HTML5</div>
            <div className={styles.skillItem}>CSS3</div>
            <div className={styles.skillItem}>JAVASCRIPT</div>
            <div className={styles.skillItem}>REACT</div>
            <div className={styles.skillItem}>NODE.JS</div>
            <div className={styles.skillItem}>PYTHON</div>
            <div className={styles.skillItem}>DJANGO</div>
            <div className={styles.skillItem}>POSTGRESQL</div>
            <div className={styles.skillItem}>GIT</div>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.musicPanel} ${styles.zigzagBorder}`}>
          <div>
            <h2 className={styles.panelTitle}>DISCOS FAVORITOS</h2>
            <p className={styles.panelText}>Jesus Is King - Kanye West</p>
            <p className={styles.panelText}>The New Abnormal - The Strokes</p>
            <p className={styles.panelText}>Gorillaz - Gorillaz</p>
          </div>
          <div className={styles.infoBox} style={{marginLeft: '20px'}}>
            <span className={styles.infoNumber}>30+</span>
            <span className={styles.infoLabel}>Canciones</span>
          </div>
        </div>

        <div className={`${styles.panel} ${styles.moviesPanel}`}>
          <h2 className={styles.panelTitle}>PELÍCULAS FAVORITAS</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
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
          <p className={styles.panelText} style={{fontSize: '1.5rem'}}>
            FUTURO TÉCNICO EN DESARROLLO DE SOFTWARE!
          </p>
          <p style={{fontSize: '1.1rem', marginTop: '10px'}}>
            Instituto de Formación Técnica Superior N° 29 - 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComicPage