import React from "react";
import Dropdown from "./Dropdown";
import "./component-styles.scss";

export default function MovieCard({ movie, status}) {
return (
    <div className="card">
      {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster">No Poster available</div>
        )}
      <Dropdown movie={movie} status={status}/>
      <div className="caption">
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
        {/* <p>₹{Math.floor(Math.random()*500)} <span><button style={{float: 'right'}}>Buy</button></span></p> */}
      </div>
    </div>
  );
}
