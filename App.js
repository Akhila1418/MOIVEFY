import "./App.css";
import SearchIcon from "./search.svg";
import Movie from "./movie.jsx";
import { useState, useEffect } from "react";
const API_URL = "https://www.omdbapi.com?apikey=84b26b2b";

const App = () => {
  const searchmovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setm(data.Search);
  };

  useEffect(() => {
    searchmovie("ironman");
  }, []);

  const [m, setm] = useState([]);
  const [s, sets] = useState("");
  return (
    <div className="App">
      <h1>
        <centre>MOVIEFY</centre>
      </h1>
      <div className="cent">
        <div className="search">
          <input
            placeholder="search movie"
            value={s}
            onChange={(e) => sets(e.target.value)}
          />
          <img src={SearchIcon} alt="search" onClick={() => searchmovie(s)} />
        </div>
      </div>

      {m?.length > 0 ? (
        <div className="container">
          {m.map((movie1) => (
            <Movie movie1={movie1} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Not found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// https://moviehere.netlify.app/