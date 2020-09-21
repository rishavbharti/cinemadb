import React from "react";
import { Link } from "react-router-dom";
import "./component-styles.scss";

const LINKS = [
  // { to: "/", text: "CinemaDB" },
  { to: "/", text: "Movies" },
  { to: "/", text: "TVShows" },
  { to: "/", text: "More" }
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {
            <Link to="/">
              <h1>CINEMAdb</h1>
            </Link>
          }
        </li>
      </ul>
      <ul>
        {LINKS.map((link) => {
          return <li key={link.to}>{<Link to={link.to}>{link.text}</Link>}</li>;
        })}
      </ul>
      <ul>
        <li>{<Link to="/watchlist">Watchlist</Link>}</li>
        <li>{<Link to="/watched">Watched</Link>}</li>
      </ul>
    </nav>
  );
}
