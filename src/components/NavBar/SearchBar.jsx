import { useState } from "react";
import styles from "./Search.module.css";

export default function SearchBar(props) {
  const [text, setText] = useState("");
  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="search"
        value={text}
        onChange={handleChange}
      />
      <button onClick={() => props.onSearch(text)} className={styles.button}>
        Agregar
      </button>
    </div>
  );
}
