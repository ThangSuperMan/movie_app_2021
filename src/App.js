import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Components/Movie";
import { map } from "async";
import "./App.css";

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    const movies = await response.data.data.movies;

    // assign value for variable dataMovies
    setDataMovies(movies);
  };

  return (
    <div className="App">
      <div className="movies">
        {dataMovies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              title={movie.title}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
              poster={movie.medium_cover_image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
