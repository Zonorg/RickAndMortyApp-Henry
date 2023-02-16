import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(text) {
    fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id))
  }

  return (
    <div
      className="App"
      style={{ padding: "25px", backgroundColor: "#7FFF00" }}
    >
      <Nav onSearch={onSearch} />
      <hr />
      <Cards characters={characters} onClose={onClose}/>
    </div>
  );
}

export default App;
