import React, {useState} from "react";
import Banner from './Banner'
import RenderList from './RenderList'
import './component-styles.scss'

export const MoviesList = React.createContext();

export default function Home() {
  let bannerTitle = "Millions of movies, TV shows and people to discover. Explore now."
  const [list, setList] = useState([]);

  return (
    <div>
      <MoviesList.Provider value={{list, setList}}>      
        <Banner bannerTitle={bannerTitle}/>
        <RenderList list={list}/>
      </MoviesList.Provider>
    </div>
  );
}
