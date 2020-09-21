import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard'
import "./component-styles.scss";

export default function Watched() {
  const {watched} = useContext(GlobalContext);

  return (
    <div className='card-list'>
      {watched.length!==0 && watched.map(movie => 
        <MovieCard movie={movie} status='watched' />  
      )}
    </div>
  );
}
