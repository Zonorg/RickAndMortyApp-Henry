import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Nav(props) {
  return (
    <div className={styles.containerNav}>
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
