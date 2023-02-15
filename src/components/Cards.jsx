import Card from "./Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.container}>
      {characters ? (
        characters.map((character) => (
          <Card
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => alert(character.name)}
            key={character.id}
          />
        ))
      ) : (
        <h3>No hay personajes</h3>
      )}
    </div>
  );
}
