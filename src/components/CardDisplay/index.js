import { Component } from "react";
import Card from "../Card";
import "./styles.css";

export default class CardDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { cardList: [] };
  }

  onLoadingFailure(error) {
    console.log(error);
  }

  componentDidMount() {
    fetch("http://localhost:8080/character")
      .then((response) => response.json(), this.onLoadingFailure)
      .then((json) => this.setState({ cardList: json }), this.onLoadingFailure);
  }

  render() {
    console.log(this.state);
    return (
      <section className="display">
        <h2 className="black-title">Personagens</h2>
        <div className="display">
          {this.state.cardList.map(function (character) {
            return <Card character={character} />;
          })}
        </div>
      </section>
    );
  }
}
