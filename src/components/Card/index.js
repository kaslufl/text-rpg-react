import "./styles.css";

export default function Card({ character }) {
  return (
    <div className="card">
      <p className="card-title">Discord ID: {character.idDiscord}</p>
      <p className="card-name">Nome: {character.name}</p>
      <p className="card-text">História: {character.background}</p>
      <div className="card-stats">
        <p className="stats">Ataque: {character.stats.attack}</p>
        <p className="stats">Defesa: {character.stats.defense}</p>
      </div>
    </div>
  );
}
