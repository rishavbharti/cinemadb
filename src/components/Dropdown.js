import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Dropdown({ movie, status }) {
  const {
    watchlist,
    watched,
    addMovieToWatchlist,
    addMovieToWatched,
    none
  } = useContext(GlobalContext);

  let inWatchlist = watchlist.some((o) => o.id === movie.id);
  let inWatched = watched.some((o) => o.id === movie.id);

  let stat = inWatchlist ? 'watchlist' : inWatched ? 'watched' : '';

  const handleChange = (option) => {
    switch (option) {
      case "watchlist":
        addMovieToWatchlist(movie);
        break;
      case "watched":
        addMovieToWatched(movie);
        break;
      case "none":
        none(movie.id);
        break;
      default:
        return;
    }
  };

  return (
    <div className="dropdown">
      <select value={stat} onChange={(e) => handleChange(e.target.value)}>
        <option value="" disabled>
          Move to...
        </option>
        <option value="watchlist">Watchlist</option>
        <option value="watched">Watched</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default Dropdown;

// 📹 ❤️ ✔️
