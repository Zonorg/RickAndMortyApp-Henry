import React from "react";
import styles from "./Card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={styles.container}>
      <button onClick={onClose} className={styles.closeButton}>X</button>
      <h2 className={styles.name}>{name}</h2>
      <h2 className={styles.species}>{species}</h2>
      <h2 className={styles.gender}>{gender}</h2>

      <img src={image} alt={name} className={styles.image}/>
    </div>
  );
}
