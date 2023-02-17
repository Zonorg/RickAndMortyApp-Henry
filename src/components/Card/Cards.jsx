import Card from "./Card.jsx";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div className={styles.container}>
      {characters ? (
        characters.map((character) => (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => onClose(character.id)}
            key={character.id}
            id={character.id}
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
      )}
    </div>
  );
}
