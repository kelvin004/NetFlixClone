import React, { useEffect, useState } from "react";
import axios from "../API/axios";
import requests from "../API/requests";
import "./Banner.css";

function Banner() {
  const [Movie, SetMovie] = useState([]);

  useEffect(() => {
    async function fetch_data() {
      const request = await axios.get(requests.fetchNetFlixOriginal);
      SetMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetch_data();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {Movie?.title || Movie?.name || Movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{Movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
