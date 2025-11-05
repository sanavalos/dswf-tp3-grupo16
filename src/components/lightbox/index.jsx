import React, { useEffect, useState } from "react";
import styles from "./Lightbox.module.css";

export default function Lightbox({
  movies,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) {
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  if (!movies[currentIndex]) return null;

  const movie = movies[currentIndex];

  const formatDateArg = (dateStr) => {
    if (!dateStr) return "Desconocida";
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-AR");
  };

  return (
    <div className={styles.lightbox}>
      <button className={styles.closeBtn} onClick={onClose}>
        ✖
      </button>
      <button className={styles.prevBtn} onClick={onPrev}>
        ◀
      </button>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className={`${styles.image} ${zoom ? styles.zoomed : ""}`}
        onClick={() => setZoom(!zoom)}
      />
      <button className={styles.nextBtn} onClick={onNext}>
        ▶
      </button>
      <div className={styles.info}>
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.releaseDate}>
          Estreno: {formatDateArg(movie.release_date)}
        </p>
      </div>
    </div>
  );
}
