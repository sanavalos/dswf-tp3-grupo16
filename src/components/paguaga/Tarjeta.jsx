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

  const canciones = [
    {
      name: "Always",
      preview_url:
        "https://p.scdn.co/mp3-preview/dec243323311844c3c2e49b51c2d6514c1aaa1c1",
      artists: [{ name: "Bon Jovi" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b273e04e7fe72eb2830d139eda96",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/2UvetjP01UGo9nFfTHrfX4",
      },
    },
    {
      name: "Como Camarón",
      preview_url:
        "https://p.scdn.co/mp3-preview/5eed8b20077617e0a18cd2e854e1d3079f5a52cb",
      artists: [{ name: "Estopa" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b273fb038f731ae34f5fc1766d4d",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3fpS8r0JsVTkCOLnq49lH6",
      },
    },
    {
      name: "Somebody Told Me",
      preview_url:
        "https://p.scdn.co/mp3-preview/2a3768c8af547b0340e45e38725cd859cf5d28bb",
      artists: [{ name: "The Killers" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b2736a7377ca554035a4138a98fb",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/2IKzUEkGrwY1SXKslKR99N",
      },
    },
    {
      name: "In the End",
      preview_url:
        "https://p.scdn.co/mp3-preview/b5ee275ca337899f762b1c1883c11e24a04075b0",
      artists: [{ name: "Linkin Park" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b273e2f039481babe23658fc719a",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/60a0Rd6pjrkxjPbaKzXjfq",
      },
    },
    {
      name: "Ojitos Rojos",
      preview_url:
        "https://p.scdn.co/mp3-preview/8be5a8f8bb6f88d49299b1d34ef3e761969d9c18",
      artists: [{ name: "Estopa" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b27353b851ba6d8ce3ab11d9824c",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/3IhHtJSkbz8d7dGLXbW7HE",
      },
    },
    {
      name: "Wrecked ",
      preview_url:
        "https://p.scdn.co/mp3-preview/6fc886275091b4b847766805f680ac73da6f1b62",
      artists: [{ name: "Imagine Dragons" }],
      album: {
        images: [
          {
            url: "https://i.scdn.co/image/ab67616d0000b273ec182939cba3386ddcb93069",
          },
        ],
      },
      external_urls: {
        spotify: "https://open.spotify.com/track/2d1MywHy6FwKdzxFuSJnwl",
      },
    },
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
        <div className={styles.spotifyGrid}>
          {canciones.map((cancion, i) => (
            <Spotify key={i} cancion={cancion} />
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
