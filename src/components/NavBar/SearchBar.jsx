import { useState } from "react";
import styles from "./Search.module.css";

export default function SearchBar(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      props.onSearch(text);
    }
  }

  function handleClick() {
    props.onSearch(text);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick} className={styles.button}>
        Agregar
      </button>
    </div>
  );
}
