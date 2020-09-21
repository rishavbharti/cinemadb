import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState';
import MovieCard from './MovieCard'
import "./component-styles.scss";

export default function WatchList() {
  const {watchlist} = useContext(GlobalContext);

  return (
    <div className='card-list'>
      {watchlist.length!==0 && watchlist.map(movie => 
        <MovieCard movie={movie} status='watchlist' />  
      )}
    </div>
  );
}
