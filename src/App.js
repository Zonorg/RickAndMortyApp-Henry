import "./App.css";
import { useState } from "react";
import Nav from "./components/NavBar/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Utilities/Error404";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(text) {
    fetch(`https://rickandmortyapi.com/api/character/${text}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("Este personaje ya fue agregado.");
          }
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((character) => character.id !== id));
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {characters.length === 0 && <Route path="*" element={<Error404 />} />}
      </Routes>
    </div>
  );
}

export default App;
