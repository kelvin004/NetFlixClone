import React, { useState, useEffect } from "react";
import axios from "../API/axios";
import "./Row.css";
const base_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, dataURL, islarge }) {
  const [movies, SetMovie] = useState([]);

  useEffect(() => {
    async function get_requests() {
      const requests = await axios.get(dataURL);
      if (requests) {
        SetMovie(requests.data.results);
      }
    }
    get_requests();
  }, [dataURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${islarge && "row__posterlarge"}`}
            src={`${base_URL}${
              islarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
