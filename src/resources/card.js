export default class Card {
  constructor({
    rank: cardRank,
    points: cardPoints,
    name: cardName,
    color: cardColor = null,
    suit: cardSuit = null,
  }) {
    this.cardRank = cardRank;
    this.cardPoints = cardPoints;
    this.cardName = cardName;
    if (cardColor) {
      this.cardColor = cardColor;
    }
    if (cardSuit) {
      this.cardSuit = cardSuit;
    }
  }

  get rank() {
    return this.cardRank;
  }

  get points() {
    return this.cardPoints;
  }

  get name() {
    return this.cardName;
  }

  get color() {
    return this.cardColor;
  }

  get suit() {
    return this.cardSuit;
  }
}
