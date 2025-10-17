import React, { useState } from "react";
import Slide from "./Slide";
import styles from "./Slider.module.css";

export default function Slider({ slides, onVerTrailer }) {
  const [indice, setIndice] = useState(0);

  const cambiarPelicula = (dir) => {
    let nuevoIndice = indice + dir;
    if (nuevoIndice < 0) nuevoIndice = slides.length - 1;
    if (nuevoIndice >= slides.length) nuevoIndice = 0;
    setIndice(nuevoIndice);
  };

  return (
    <div className={styles.slider}>
      <button className={styles.prev} onClick={() => cambiarPelicula(-1)}>
        &#10094;
      </button>

      {slides.map((slide, i) => (
        <Slide
          key={i}
          title={slide.title}
          img={slide.img}
          trailerUrl={slide.trailerUrl}
          activo={i === indice}
          onVerTrailer={onVerTrailer}
        />
      ))}

      <button className={styles.next} onClick={() => cambiarPelicula(1)}>
        &#10095;
      </button>
    </div>
  );
}
