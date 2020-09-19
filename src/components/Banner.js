import React from "react";
import SearchBar from './SearchBar'
import "./component-styles.scss";

export default function Banner({bannerTitle}) {
  return (
    <div className='banner'>
      <h1>Welcome.</h1>
      <h2>{bannerTitle}</h2>
      <SearchBar />
    </div>
  );
}
