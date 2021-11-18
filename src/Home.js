import { Component } from "react";
import CardDisplay from "./components/CardDisplay";
import CharacterForm from "./components/CharacterForm";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <article>
        <header>
          <h2 className="title">Text-Rpg</h2>
        </header>
        <section>
          <CardDisplay />
          <CharacterForm />
        </section>
        <footer>
        </footer>
      </article>
    );
  }
}
