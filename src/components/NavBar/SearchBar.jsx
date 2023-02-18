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

  function handleRandomClick() {
    props.onSearch(getRandomCharacter());
  }

  function getRandomCharacter() {
    const maxId = 826; // Este es el ID máximo de los personajes disponibles en la API
    const randomId = Math.floor(Math.random() * maxId) + 1; // Genera un número aleatorio entre 1 y el ID máximo
    return randomId.toString(); // Devuelve el ID generado como una cadena de texto
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
      <button onClick={handleRandomClick} className={styles.button}>
        Random
      </button>
    </div>
  );
}
