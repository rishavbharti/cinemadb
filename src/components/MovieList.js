import React, { useContext } from "react";
import { MoviesList } from "./Home";
import MovieCard from "./MovieCard"
import "./component-styles.scss";

export default function MovieList() {
  const {list, setList} = useContext(MoviesList)

  return (
    <div>
      <ul>
        {list.length!==0 && list.map(movie => 
          <MovieCard movie={movie}/>
        )}
      </ul>
    </div>
  );
}
