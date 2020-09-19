import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import WatchList from './components/WatchList'
import "./styles.scss";

export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        {/* <Route exact path="/"></Route> */}
        <Route exact path="/watchlist"><WatchList /></Route> 
      </Switch>
    </div>
  );
}
