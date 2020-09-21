import React from "react";
import { Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import "./styles.scss";

export default function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/watchlist">
            <WatchList />
          </Route>
          <Route exact path="/watched">
            <Watched />
          </Route>
        </Switch>
      </GlobalProvider>
    </div>
  );
}
