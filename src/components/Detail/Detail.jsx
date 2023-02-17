import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../Detail/Detail.module.css";

export default function Detail(props) {
  const [infoDetail, setInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  function backToHome(){
    navigate("/home")
  }

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setInfo(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return () => setInfo({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div>
        <button onClick={backToHome} className={styles.botonVolver}>
          Volver
        </button>
      </div>
      {infoDetail.id ? (
        <div>
          <h3>{infoDetail.name}</h3>
          <h5>Estado: {infoDetail.status}</h5>
          <h5>Especie: {infoDetail.species}</h5>
          <h5>Género: {infoDetail.gender}</h5>
          <h5>Origen: {infoDetail.origin?.name}</h5>
          <div>
            <img src={infoDetail.image} alt={infoDetail.name} />
          </div>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
}
