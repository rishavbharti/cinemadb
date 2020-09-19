import React from "react";
import Dropdown from "./Dropdown";
import "./component-styles.scss";

export default function MovieCard({ movie }) {
  if(!movie.hasOwnProperty('status'))
  {
    movie.status = 'none'
  }
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <Dropdown status={movie.status}/>
      <div className="caption">
        <h4>{movie.title} </h4>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
