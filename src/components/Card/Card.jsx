import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose, id }) {
  return (
    <div className={styles.container}>
      <button onClick={onClose} className={styles.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>

        <h2 className={styles.species}>{species}</h2>
        <h2 className={styles.gender}>{gender}</h2>

        <img src={image} alt={name} className={styles.image} />
      </Link>
    </div>
  );
}
