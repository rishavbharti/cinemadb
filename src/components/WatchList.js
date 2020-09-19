import React, {useState} from "react";
import SearchBar from "./SearchBar"
import RenderList from './RenderList'
import "./component-styles.scss";

export default function WatchList() {
  const [watchlist, setWatchlist] = useState([]);
  
  return (
    <div>
      {/* <SearchBar /> */}
      <RenderList list={watchlist}/>
    </div>
  );
}
