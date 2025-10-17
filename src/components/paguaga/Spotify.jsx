import React, { useState, useRef } from "react";
import styles from "./Spotify.module.css";
import { Play, Pause } from "lucide-react";

export default function CustomSpotifyCard({ cancion }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.customSpotifyCard}>
      <img src={cancion.album.images[0].url} alt={cancion.name} />
      <div className={styles.info}>
        <h3>{cancion.name}</h3>
        <p>{cancion.artists.map((a) => a.name).join(", ")}</p>

        {cancion.preview_url ? (
          <div className={styles.audioPlayer}>
            <button onClick={togglePlay} className={styles.playButton}>
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <audio
              ref={audioRef}
              src={cancion.preview_url}
              onEnded={() => setIsPlaying(false)}
            />
          </div>
        ) : (
          <p className={styles.noPreview}>No hay vista previa disponible</p>
        )}

        <a
          href={cancion.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Escuchar completo en Spotify
        </a>
      </div>
    </div>
  );
}
