import React, {Component} from 'react';
import queryString from 'query-string';
import Hello from './Hello'

export interface AppProps {}
export interface AppState {
  name: string;
  cards: Card[]; // an array of card objects with id and title properties
  selectedCard: string; // the id of the selected card
}

export type Card = {
    id: string
    title: string
}

export interface AppProps {
    cards: Card[]
}

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      cards: [], // an array of card objects with id and title properties
      selectedCard: null, // the id of the selected card
      name: '- Click a Card'
    };
  }
  componentDidMount() {
    // get the cards from props or fetch from an API
    this.setState({ cards: this.props.cards });

    // get the query string from the URL
    const query = queryString.parse(window.location.search);

    // if there is a cardId parameter, set it as the selected card
    if (query.cardId) {
      this.setState({ selectedCard: query.cardId });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if the selected card changes, update the query string in the URL
    if (this.state.selectedCard !== prevState.selectedCard) {
      const query = queryString.stringify({ cardId: this.state.selectedCard });
      window.history.pushState(null, '', `?${query}`);
    }
  }

  handleCardClick = (cardId) => {
    // set the clicked card as the selected card
    this.setState({ selectedCard: cardId });
  };
  render() {
    return (
      <div className="App">
        <Hello name={this.state.name} />
        <div className="card-list">
          {this.state.cards.map((card) => (
            <div
              key={card.id}
              className={`card ${this.state.selectedCard === card.id ? 'selected' : ''}`}
              onClick={() => this.handleCardClick(card.id)}
            >
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
