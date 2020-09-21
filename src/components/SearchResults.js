import React, { useState, useEffect, useContext } from "react";
import MovieCard from "./MovieCard"
import "./component-styles.scss";

export default function SearchResults() {
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!term)
    {
      return;
    }
    fetchData(term)
  };

  const fetchData = term => 
  {
    try
    {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=344cf15bd57b907bafef81cf0ca02f9e&language=en-US&page=1&include_adult=false&query=${term}`)
      .then(res => res.json())
      .then(data => setList(data.results))
    }
    catch(error)
    {
      // alert("Some Error occured! Please try again")
      setError('Some Error occured! Please try again')
    }
  }

  return (
    <>
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
      <div className='card-list'>
      <ul>
        {list.length!==0 && list.map(movie => 
          <MovieCard movie={movie}/>
        )}
      </ul>
    </div>
    </>
  );
}
