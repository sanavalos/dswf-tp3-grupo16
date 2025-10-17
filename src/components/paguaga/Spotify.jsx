import React from "react";
import styles from "./SpotifyIframe.module.css";

export default function Spotify({ src }) {
  return (
    <iframe
      className={`${styles.spotify} ${styles.iframe}`}
      src={src}
      width="100%"
      height="80"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}
