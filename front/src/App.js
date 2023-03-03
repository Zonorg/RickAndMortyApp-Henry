import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Error404 from "./components/Utilities/Error404";
import Form from "./components/Form/Form.jsx";
import Nav from "./components/NavBar/Nav.jsx";
import Cards from "./components/Card/Cards.jsx";
import About from "./components/About/About.jsx";
import Favorites from "./components/Utilities/Favorites";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const username = "";
  const password = "";
  
  const logOut = () => {
    setAccess(false);
    navigate("/");
  };

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
            navigate("/home");
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
      {location.pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
        {characters.length === 0 && <Route path="*" element={<Error404 />} />}
      </Routes>
    </div>
  );
}

export default App;
