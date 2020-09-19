import React, {useState} from "react";
import Navbar from './Navbar'
import Banner from './Banner'
import MovieList from './MovieList'
import './component-styles.scss'

export const MoviesList = React.createContext();

export default function Home() {
  let bannerTitle = "Millions of movies, TV shows and people to discover. Explore now."
  const [list, setList] = useState([]);

  return (
    <div>
      <MoviesList.Provider value={{list, setList}}>
        <Navbar />
        <Banner bannerTitle={bannerTitle}/>
        <MovieList />
      </MoviesList.Provider>
    </div>
  );
}
