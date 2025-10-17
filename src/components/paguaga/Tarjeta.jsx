import React, { useState } from "react";
import Habilidad from "./Habilidad";
import Slider from "./Slider";
import ModalTrailer from "./ModalTrailer";
import Spotify from "./Spotify";
import BotonNavegacion from "./BotonNavegacion";
import styles from "./Tarjeta.module.css";
import imgAvatar from "../../assets/paguaga.png";
import imgOrigen from "../../assets/el_origen.jpg";
import imgMatrix from "../../assets/matrix.jpg";
import imgJoker from "../../assets/joker.jpg";

export default function Tarjeta() {
  const [modalUrl, setModalUrl] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);

  const habilidades = [
    { nombre: "HTML", color: "#e34c26" },
    { nombre: "CSS", color: "#264de4" },
    { nombre: "Tailwind", color: "#38bdf8" },
    { nombre: "JavaScript", color: "#f0db4f", textColor: "black" },
    { nombre: "Vue.js", color: "#42b883" },
    { nombre: "C#", color: "#9b4f96" },
    { nombre: "Java", color: "#f89820" },
    { nombre: "Python", color: "#306998" },
    { nombre: "MySQL", color: "#00758f" },
    { nombre: "Git", color: "#f1502f" },
  ];

  const slides = [
    {
      title: "El Origen",
      img: imgOrigen,
      trailerUrl: "https://www.youtube.com/embed/OCEkhKvm-hU",
    },
    {
      title: "Matrix",
      img: imgMatrix,
      trailerUrl: "https://www.youtube.com/embed/OM0tSTEQCQA",
    },
    {
      title: "Joker",
      img: imgJoker,
      trailerUrl: "https://www.youtube.com/embed/8ZZ1l7QCVGE",
    },
  ];

  const spotifyCanciones = [
    "https://open.spotify.com/embed/track/1zng9uqqXoPkmU05nsAlsw",
    "https://open.spotify.com/embed/track/1VB4sadHjFcFklHcZuoROi",
    "https://open.spotify.com/embed/track/6PwjJ58I4t7Mae9xfZ9l9v?utm_source=generator",
    "https://open.spotify.com/embed/track/0v1XpBHnsbkCn7iJ9Ucr1l?utm_source=generator",
    "https://open.spotify.com/embed/track/3IhHtJSkbz8d7dGLXbW7HE",
    "https://open.spotify.com/embed/track/4w2Yq2cklbssmUtUy5Vh6H?utm_source=generator",
  ];

  const abrirModal = (url) => {
    setModalUrl(url);
    setModalAbierto(true);
  };

  const cerrarModal = () => setModalAbierto(false);

  return (
    <main className={styles.tarjeta}>
      <a href="/" className={styles.btnHome}>
        Portada
      </a>

      <section className={styles.foto}>
        <img src={imgAvatar} alt="Avatar Santiago" />
      </section>

      <section className={styles.info}>
        <h1>Santiago Noel</h1>
        <p>
          <strong>Ubicación:</strong> Córdoba, Argentina
        </p>
        <p>
          <strong>Edad:</strong> 33
        </p>
      </section>

      <section className={styles.habilidades}>
        <h2>Habilidades</h2>
        <div className={styles.tags}>
          {habilidades.map((h, i) => (
            <Habilidad
              key={i}
              nombre={h.nombre}
              color={h.color}
              delay={i * 0.2}
            />
          ))}
        </div>
      </section>

      <section className={styles.peliculas}>
        <h2>Películas Favoritas</h2>
        <Slider slides={slides} onVerTrailer={abrirModal} />
      </section>

      <ModalTrailer
        url={modalUrl}
        abierto={modalAbierto}
        onCerrar={cerrarModal}
      />

      <section className={styles.musica}>
        <h2>Música Favorita</h2>
        <div className={styles.spotify}>
          {spotifyCanciones.map((src, i) => (
            <Spotify key={i} src={src} />
          ))}
        </div>
      </section>

      <div className={styles.botonesNavegacion}>
        <BotonNavegacion texto="Anterior" link="./" />
        <BotonNavegacion texto="Siguiente" link="./" />
      </div>
    </main>
  );
}
