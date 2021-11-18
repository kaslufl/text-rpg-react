import { Component } from "react";
import "./styles.css";

export default class CharacterForm extends Component {

  handleSubmit = async (event) => {
    event.preventDefault();

    let data = new FormData(document.getElementById("character-form"));

    const character = {};
    data.forEach(function (value, key) {
      character[key] = value;
    });

    console.log(character);
    document.getElementById("character-form").reset();

    const res = await fetch("http://localhost:8080/character", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(character),
    })
      .then((res) => {
        console.log(res);
        alert("Cadastrado com Sucesso")
      })
      .catch((error) => {
        console.log(error);
      });
      
  };

  render() {
    return (
      <section className="character-form">
        <h2 className="black-title">Registrar personagem</h2>
        <form id="character-form" onSubmit={this.handleSubmit}>
          <label for="idDiscord">ID Discord</label>
          <input type="text" className="character-form" name="idDiscord" />
          <label for="name">Nome</label>
          <input type="text" className="character-form" name="name" />
          <label for="background">História</label>
          <input type="text" className="character-form" name="background" />
          <button type="submit" class="character-form">
            Registrar
          </button>
        </form>
      </section>
    );
  }
}
