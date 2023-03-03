import styles from "../About/About.module.css";

export default function About(props) {
  return (
    <div>
      <h3>
        Renzo Viscio{" "}
        <a href="https://github.com/Zonorg" target={"_blank"} rel="noreferrer">
          GitHub
        </a>
      </h3>
      <img
        className={styles.imgAbout}
        src="./imgAbout.png"
        alt="RickAndMorty"
      />
      <p>
        Descripción del trabajo realizado:
        <br />
        <br />
        Aplicación de Rick y Morty creada con React para la integración de lo
        aprendido en el BootCamp{" "}
        <a
          className={styles.linkHenry}
          href="https://www.soyhenry.com/"
          target={"_blank"}
          rel="noreferrer"
        >
          Henry
        </a>
        .<br /> <br />
        La interfaz permite a los usuarios buscar los personajes de la serie por
        id, seleccionarlos y ver su descripción. <br />
        <br />
        La sección detallada de personajes incluye información de cada uno de
        ellos, como nombre, especie, género y su origen de aparición.
      </p>
    </div>
  );
}
