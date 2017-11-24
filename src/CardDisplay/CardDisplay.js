import React, { Component } from "react";
import chunk from "lodash/chunk";
import CardRow from "../CardRow/CardRow";
import FetchFilms from "../FilmService/FetchFilms";

class CardDisplay extends Component {
  constructor() {
    super();
    this.state = {
      chunkedFilms: []
    };
  }

  componentDidMount() {
    FetchFilms().then(films => {
      this.setState({ chunkedFilms: chunk(films, 3) });
    });
  }

  render() {
    return this.state.chunkedFilms.map((filmArr, index) => {
      return <CardRow key={index} filmArr={filmArr} />;
    });
  }
}

export default CardDisplay;
