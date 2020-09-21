import React, {useState} from "react";
import Banner from './Banner'
import SearchResults from './SearchResults'
import './component-styles.scss'

export const MoviesList = React.createContext();

export default function Home() {
  let bannerTitle = "Millions of movies, TV shows and people to discover. Explore now."

  return (
    <div> 
      <Banner bannerTitle={bannerTitle}/>
      {/* <SearchResults /> */}
    </div>
  );
}
