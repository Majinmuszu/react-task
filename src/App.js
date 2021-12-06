import "./App.css";
import Quote from "./components/Quote";

import React, { Component } from "react";

export class App extends Component {
  state = {
    quotes: [],
    newQuotes: [],
    idx: -1,
  };

  fetchQuoteAndAuthor = () => {
    fetch(
      "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ quotes: response });
      })
      .then(() => {
        this.setNewQuote();
      })
      .catch(console.log);
  };
  componentDidMount = () => {
    this.fetchQuoteAndAuthor();
  };

  randomNumber = () => Math.floor(Math.random() * this.state.quotes.length);

  setIdx = () => {
    this.state.newQuotes.length > 0 && this.state.newQuotes.length < 3
    ? this.setState(({ idx }) => ({
      idx: (idx+1),
    }))
    :this.setState(({ idx }) => ({
      idx: ((this.state.newQuotes.length)),
    }));
  };

  setNewQuote = () => {
    const newQuote = this.state.quotes[this.randomNumber()];
    this.setState(({ newQuotes }) => ({
      newQuotes: [...newQuotes, newQuote],
    }));
    this.setIdx();
    console.log(this.state.newQuotes);
    console.log(this.state.idx);
    return this.state.newQuotes;
  };
  prevQuote = () => {
    this.state.newQuotes.length === 1 
    ? alert('There are no quotes to see, please generate more')
    : this.setState(({idx}) => ({
      idx: idx-1
    }))
    return this.state.newQuotes;
  }
  viewQuote = (i) => {
    return this.state.newQuotes[i];
  };

  render() {
    const quote = this.viewQuote(this.state.idx);
    return (
      <div className="App">
        <Quote quote={quote} />

        <button type="button" onClick={() => this.prevQuote()}>&#9194; PREVIOUS QUOTE</button>
        <button type="button" onClick={() => this.setNewQuote()}>
        &#127922; NEW RANDOM QUOTE
        </button>
      </div>
    );
  }
}

export default App;
