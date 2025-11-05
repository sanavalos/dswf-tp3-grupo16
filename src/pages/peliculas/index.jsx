import React, { useState, useEffect, useCallback } from "react";
import MovieCardList from "./MovieCardList";
import MovieModal from "./MovieModal";
import Title from "../../components/title";
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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [mode, setMode] = useState("popular");

  const filterValidMovies = (list) =>
    list.filter(
      (m) => m.poster_path && m.overview && m.overview.trim().length > 0
    );

  const fetchGenres = useCallback(async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=es-ES`
      );
      const data = await res.json();
      setGenres(data.genres);
    } catch (err) {
      console.error("Error al cargar géneros:", err);
    }
  }, []);

  const fetchPopularMovies = useCallback(async (pageNum = 1) => {
    setLoading(true);
    setMode("popular");
    try {
      const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${pageNum}`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error("Error al cargar películas populares:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMoviesByGenre = useCallback(async (genreId, pageNum = 1) => {
    setLoading(true);
    setMode("genre");
    try {
      const res = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=es-ES&with_genres=${genreId}&sort_by=popularity.desc&page=${pageNum}`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error("Error al cargar películas por género:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMoviesBySearch = useCallback(async (searchQuery, pageNum = 1) => {
    setLoading(true);
    setMode("search");
    try {
      const res = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(
          searchQuery
        )}&page=${pageNum}`
      );
      const data = await res.json();
      setMovies(filterValidMovies(data.results));
      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (err) {
      console.error("Error al buscar películas:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGenres();
    fetchPopularMovies(1);
  }, [fetchGenres, fetchPopularMovies]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      fetchPopularMovies(1);
      return;
    }
    setGenreFilter("");
    fetchMoviesBySearch(query, 1);
  };

  const handleGenreChange = (e) => {
    const value = e.target.value;
    setGenreFilter(value);
    setQuery("");

    if (!value) fetchPopularMovies(1);
    else fetchMoviesByGenre(value, 1);
  };

  const handleCardClick = (movie) => setSelectedMovie(movie);
  const handleCloseModal = () => setSelectedMovie(null);

  const handlePrevPage = () => {
    if (page <= 1) return;
    const newPage = page - 1;

    if (mode === "search") fetchMoviesBySearch(query, newPage);
    else if (mode === "genre") fetchMoviesByGenre(genreFilter, newPage);
    else fetchPopularMovies(newPage);
  };

  const handleNextPage = () => {
    if (page >= totalPages) return;
    const newPage = page + 1;

    if (mode === "search") fetchMoviesBySearch(query, newPage);
    else if (mode === "genre") fetchMoviesByGenre(genreFilter, newPage);
    else fetchPopularMovies(newPage);
  };

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
        <>
          <MovieCardList
            movies={movies}
            genres={genres}
            onCardClick={handleCardClick}
          />

          <div className={styles.pagination}>
            <button disabled={page === 1} onClick={handlePrevPage}>
              ◀ Anterior
            </button>
            <span>
              Página {page} de {totalPages}
            </span>
            <button disabled={page === totalPages} onClick={handleNextPage}>
              Siguiente ▶
            </button>
          </div>
        </>
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
