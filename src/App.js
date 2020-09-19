import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'
import "./styles.scss";

export default function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path="/"><Home /></Route>
        {/* <Route exact path="/"></Route> */}
        <Route exact path="/watchlist"></Route> 
      </Switch>
    </div>
  );
}
