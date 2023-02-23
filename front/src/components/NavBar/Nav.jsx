import React from "react";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav(props) {
  const location = useLocation();
  const showSearchBar = location.pathname !== "/about";

  return (
    <div className={styles.containerNav}>
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/favorites">
        <span>Favorites</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      {showSearchBar && <SearchBar onSearch={props.onSearch} />}
    </div>
  );
}
