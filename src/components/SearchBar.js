import React, { useState, useEffect, useContext } from "react";
import { MoviesList } from "./Home";
import "./component-styles.scss";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const {list, setList} = useContext(MoviesList)

  const handleSubmit = (e) => {
    if(!term)
    {
      return;
    }
    e.preventDefault();
    fetchData(term)
  };

  const fetchData = term => 
  {
    try
    {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=344cf15bd57b907bafef81cf0ca02f9e&language=en-US&page=1&include_adult=false&query=${term}`)
      .then(res => res.json())
      .then(data => setList(data.results))
      .then(() => setTerm(''))
    }
    catch(error)
    {
      alert("Some Error occured! Please try again")
    }
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search for a movie, tv show or artist"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
