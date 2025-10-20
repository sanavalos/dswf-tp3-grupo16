import React, { useState, useEffect } from "react";
import MovieCardList from "./MovieCardList";
import MovieModal from "./MovieModal";
import Title from "../title";
import styles from "./MovieSection.module.css";

const API_KEY = "38bf25dd56b9a379599ed300ccdbf4ab";
const BASE_URL = "https://api.themoviedb.org/3";

export default function MovieSection() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreFilter, setGenreFilter] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filterValidMovies = (list) => {
    return list.filter(
      (m) => m.poster_path && m.overview && m.overview.trim().length > 0
    );
  };

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
    } catch (err) {
      console.error("Error al cargar películas populares:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoviesByGenre = async (genreId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}&sort_by=popularity.desc&page=1`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
    } catch (err) {
      console.error("Error al cargar películas por género:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoviesBySearch = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
          query
        )}&page=1`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
    } catch (err) {
      console.error("Error al buscar películas:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(
          `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`
        );
        const data = await res.json();
        setGenres(data.genres);
      } catch (err) {
        console.error("Error al cargar géneros:", err);
      }
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    fetchMoviesBySearch(query);
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setGenreFilter(value);

    if (!value) {
      fetchPopularMovies();
    } else {
      fetchMoviesByGenre(value);
    }
  };

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => setSelectedMovie(null);

  return (
    <section className={styles.section}>
      <Title title="PELÍCULAS" />
      <form onSubmit={handleSearch} className={styles.controls}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Buscar película..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </div>

        <select value={genreFilter} onChange={handleGenreChange}>
          <option value="">Todos los géneros</option>
          {genres.map((g) => (
            <option key={g.id} value={g.id}>
              {g.name}
            </option>
          ))}
        </select>
      </form>
      {loading ? (
        <p style={{ textAlign: "center", fontStyle: "italic" }}>Cargando...</p>
      ) : (
        <MovieCardList
          movies={movies}
          genres={genres}
          onCardClick={handleCardClick}
        />
      )}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          genres={genres}
        />
      )}
    </section>
  );
}
