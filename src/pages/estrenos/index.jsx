import React, { useEffect, useState } from "react";
import Title from "../../components/title";
import ImageGallery from "../../components/image-gallery";
import Lightbox from "../../components/lightbox";

const API_KEY = "38bf25dd56b9a379599ed300ccdbf4ab";
const BASE_URL = "https://api.themoviedb.org/3";

export default function EstrenosDelMes() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchUpcoming = async () => {
      setLoading(true);
      try {
        const today = new Date();
        const next90Days = new Date();
        next90Days.setDate(today.getDate() + 90);

        const todayStr = today.toISOString().split("T")[0];
        const nextStr = next90Days.toISOString().split("T")[0];

        const urls = Array.from({ length: 2 }, (_, i) => {
          const page = i + 1;
          return `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&region=AR&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.gte=${todayStr}&release_date.lte=${nextStr}&page=${page}`;
        });

        const responses = await Promise.all(urls.map((url) => fetch(url)));

        const jsonPages = await Promise.all(
          responses.map(async (r) => {
            if (!r.ok) return { results: [] };
            try {
              return await r.json();
            } catch {
              return { results: [] };
            }
          })
        );

        const allMovies = jsonPages.flatMap((p) => p.results ?? []);

        const filtered = allMovies
          .filter((m) => {
            const release = new Date(m.release_date);
            return (
              m.poster_path &&
              m.release_date &&
              release >= today &&
              release <= next90Days
            );
          })
          .sort((a, b) => b.popularity - a.popularity);

        const unique = Array.from(
          new Map(filtered.map((m) => [m.id, m])).values()
        );

        setMovies(unique.slice(0, 20));
      } catch (err) {
        console.error("Error al cargar estrenos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUpcoming();
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => setCurrentIndex((i) => (i + 1) % movies.length);
  const prevImage = () =>
    setCurrentIndex((i) => (i - 1 + movies.length) % movies.length);

  return (
    <section style={{ padding: "2rem" }}>
      <Title title="ESTRENOS" />
      {loading ? (
        <p style={{ textAlign: "center" }}>Cargando...</p>
      ) : movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>
          No hay estrenos próximos en los próximos 3 meses.
        </p>
      ) : (
        <>
          <ImageGallery movies={movies} onImageClick={openLightbox} />
          {isOpen && (
            <Lightbox
              movies={movies}
              currentIndex={currentIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
            />
          )}
        </>
      )}
    </section>
  );
}
