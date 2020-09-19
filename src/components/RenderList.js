import React, { useContext } from "react";
import MovieCard from "./MovieCard"
import "./component-styles.scss";

export default function RenderList(props) {
  // const {list, setList} = useContext(MoviesList)

  return (
    <div className='card-list'>
      <ul>
        {props.list.length!==0 && props.list.map(movie => 
          <MovieCard movie={movie}/>
        )}
      </ul>
    </div>
  );
}
