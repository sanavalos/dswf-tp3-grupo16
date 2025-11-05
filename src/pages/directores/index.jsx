import React, { useState, useEffect } from "react";
import DirectorCard from "../../components/director-card";
import Title from "../../components/title";
import directorsData from "../../../public/directors-data.json";
import styles from "./MovieDirectorList.module.css";

const MovieDirectorList = () => {
  const [allDirectors, setAllDirectors] = useState([]);
  const [filteredDirectors, setFilteredDirectors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (directorsData) {
      setAllDirectors(directorsData);
      setFilteredDirectors(directorsData);

      const uniqueCategories = [
        ...new Set(
          directorsData.flatMap((d) => d.known_for_genre).filter(Boolean)
        )
      ];
      uniqueCategories.sort();
      setCategories(["All", ...uniqueCategories]);
    }
  }, []);

  useEffect(() => {
    let directors = [...allDirectors];

    if (searchTerm) {
      directors = directors.filter((d) =>
        d.director.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "All") {
      directors = directors.filter((d) =>
        d.known_for_genre.includes(selectedCategory)
      );
    }

    setFilteredDirectors(directors);
  }, [searchTerm, selectedCategory, allDirectors]);

  return (
    <>
      <Title title="DIRECTORES" />

      <div className={styles.filtersWrapper}>
        <input
          type="text"
          placeholder="Buscar por nombre de director..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className={styles.categoryFilter}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.directorsWrapper}>
        {filteredDirectors.length > 0 ? (
          filteredDirectors.map((d) => (
            <DirectorCard key={d.id} directorData={d} />
          ))
        ) : (
          <p className={styles.noResults}>
            No se encontraron directores que coincidan con los filtros.
          </p>
        )}
      </div>
    </>
  );
};

export default MovieDirectorList;
