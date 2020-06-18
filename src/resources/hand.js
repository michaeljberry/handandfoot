export default class Hand {
  constructor(cards) {
    this.cardsInHand = cards;
  }

  get hand() {
    return this.cardsInHand;
  }

  sortTheCards(a, b) {
    const cardA = a.rank;
    const cardB = b.rank;

    if (cardA > cardB) {
      return 1;
    }
    return -1;
  }
}
