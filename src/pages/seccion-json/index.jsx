import React, { useState, useEffect } from "react";
import DirectorCard from "../../components/director-card";
import Title from "../../components/title";
import directorsData from "../../../public/directors-data.json";
import styles from "./MovieDirectorList.module.css";

const MovieDirectorList = () => {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    if (directorsData) {
      setDirectors(directorsData);
    }
  }, []);

  return (
    <>
      <Title title="DIRECTORES" />
      <div className={styles.directorsWrapper}>
        {directors.map((director) => (
          <DirectorCard key={director.id} directorData={director} />
        ))}
      </div>
    </>
  );
};

export default MovieDirectorList;
