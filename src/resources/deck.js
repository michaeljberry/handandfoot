import Card from './card';

export default class Deck {
  fullDeck = [
    {
      rank: 1,
      points: 20,
      name: 'ace',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 2,
      points: 20,
      name: 'two',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 3,
      points: -50,
      name: 'three',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 4,
      points: 5,
      name: 'four',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 5,
      points: 5,
      name: 'five',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 6,
      points: 5,
      name: 'six',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 7,
      points: 5,
      name: 'seven',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 8,
      points: 5,
      name: 'eight',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 9,
      points: 10,
      name: 'nine',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 10,
      points: 10,
      name: 'ten',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 11,
      points: 10,
      name: 'jack',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 12,
      points: 10,
      name: 'queen',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 13,
      points: 10,
      name: 'king',
      color: 'red',
      suit: 'heart',
    },
    {
      rank: 1,
      points: 20,
      name: 'ace',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 2,
      points: 20,
      name: 'two',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 3,
      points: -50,
      name: 'three',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 4,
      points: 5,
      name: 'four',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 5,
      points: 5,
      name: 'five',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 6,
      points: 5,
      name: 'six',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 7,
      points: 5,
      name: 'seven',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 8,
      points: 5,
      name: 'eight',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 9,
      points: 10,
      name: 'nine',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 10,
      points: 10,
      name: 'ten',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 11,
      points: 10,
      name: 'jack',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 12,
      points: 10,
      name: 'queen',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 13,
      points: 10,
      name: 'king',
      color: 'red',
      suit: 'diamond',
    },
    {
      rank: 1,
      points: 20,
      name: 'ace',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 2,
      points: 20,
      name: 'two',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 3,
      points: 5,
      name: 'three',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 4,
      points: 5,
      name: 'four',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 5,
      points: 5,
      name: 'five',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 6,
      points: 5,
      name: 'six',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 7,
      points: 5,
      name: 'seven',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 8,
      points: 5,
      name: 'eight',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 9,
      points: 10,
      name: 'nine',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 10,
      points: 10,
      name: 'ten',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 11,
      points: 10,
      name: 'jack',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 12,
      points: 10,
      name: 'queen',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 13,
      points: 10,
      name: 'king',
      color: 'black',
      suit: 'club',
    },
    {
      rank: 1,
      points: 20,
      name: 'ace',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 2,
      points: 20,
      name: 'two',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 3,
      points: 5,
      name: 'three',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 4,
      points: 5,
      name: 'four',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 5,
      points: 5,
      name: 'five',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 6,
      points: 5,
      name: 'six',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 7,
      points: 5,
      name: 'seven',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 8,
      points: 5,
      name: 'eight',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 9,
      points: 10,
      name: 'nine',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 10,
      points: 10,
      name: 'ten',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 11,
      points: 10,
      name: 'jack',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 12,
      points: 10,
      name: 'queen',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 13,
      points: 10,
      name: 'king',
      color: 'black',
      suit: 'spade',
    },
    {
      rank: 0,
      points: 50,
      name: 'joker',
    },
    {
      rank: 0,
      points: 50,
      name: 'joker',
    },
  ];

  constructor() {
    this.deckOfCards = this.fullDeck.map((card) => new Card({
      rank: card.rank,
      points: card.points,
      name: card.name,
      color: card.color ?? null,
      suit: card.suit ?? null,
    }));
  }

  get deck() {
    return this.deckOfCards;
  }

  get suits() {
    return [...new Set(this.fullDeck.map((card) => card.suit).filter(Boolean))];
  }

  get fivePointCards() {
    return this.cardsWithPointValue(5);
  }

  get tenPointCards() {
    return this.cardsWithPointValue(10);
  }

  get twentyPointCards() {
    return this.cardsWithPointValue(20);
  }

  get fiftyPointCards() {
    return this.cardsWithPointValue(50);
  }

  get negativeFiftyPointCards() {
    return this.cardsWithPointValue(-50);
  }

  deckConfig() {
    return this.fullDeck;
  }

  cardsWithPointValue(points) {
    return this.fullDeck.filter((card) => card.points === points).map((card) => card.rank);
  }

  cardByName(rank, suit) {
    return new Card(...this.fullDeck.filter((card) => card.rank === rank && card.suit === suit));
  }
}
