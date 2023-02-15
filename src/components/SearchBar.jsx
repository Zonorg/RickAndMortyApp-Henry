import styles from "./Search.module.css"

export default function SearchBar(props) {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="search" />
      <button onClick={() => props.onSearch} className={styles.button}>Agregar</button>
    </div>
  );
}
