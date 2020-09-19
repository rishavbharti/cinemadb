import React, {useState} from "react";
import SearchBar from "./SearchBar"
import RenderList from './RenderList'
import "./component-styles.scss";

export default function Watched() {
  const [watched, setWatched] = useState([]);
  
  return (
    <div>
      {/* <SearchBar /> */}
      <RenderList list={watched}/>
    </div>
  );
}
