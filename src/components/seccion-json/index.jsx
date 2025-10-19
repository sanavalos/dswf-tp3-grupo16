import React, { useState, useEffect } from "react";
import DirectorCard from "./DirectorCard";
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
    <div className={styles.directorsWrapper}>
      {directors.map((director) => (
        <DirectorCard key={director.id} directorData={director} />
      ))}
    </div>
  );
};

export default MovieDirectorList;
