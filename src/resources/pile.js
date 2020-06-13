import Deck from './deck';

export default class Pile {
  constructor(numberOfPlayers) {
    this.pileOfCards = [];
    let numberOfDecksNeeded = numberOfPlayers + 1;
    while (numberOfDecksNeeded > 0) {
      this.pileOfCards.push(...new Deck().deck);
      numberOfDecksNeeded--;
    }
  }

  get pile() {
    return this.pileOfCards;
  }

  set replacePileOfCards(newPile) {
    this.pileOfCards = newPile;
  }

  // Inspired by Tuan Pham-Barnes:
  // https://medium.com/swlh/the-javascript-shuffle-62660df19a5d
  riffleShuffle(pile = this.pile) {
    // Randomize the point in the deck at which the cut will happen, with
    // a varianace of +/- 4.
    const cutPileAt = pile.length / 2 + (Math.floor(Math.random() * 9) - 4);
    const leftHalf = pile.splice(0, cutPileAt);
    const rightHalf = pile;
    let leftCount = leftHalf.length;
    let rightCount = rightHalf.length;

    const shuffledPile = [];
    while (leftCount > 0 && rightCount > 0) {
      // Randomize the number of cards to drop from each half this time through
      // with a variance of +/- 3.
      const dropFromLeft = Math.floor(Math.random() * 4);
      const dropFromRight = Math.floor(Math.random() * 4);

      // Randomize which half drops first
      if (Math.floor(Math.random() * 2)) {
        shuffledPile.push(...leftHalf.splice(leftHalf.length - dropFromLeft, dropFromLeft));
        shuffledPile.push(...rightHalf.splice(rightHalf.length - dropFromRight, dropFromRight));
      } else {
        shuffledPile.push(...rightHalf.splice(rightHalf.length - dropFromRight, dropFromRight));
        shuffledPile.push(...leftHalf.splice(leftHalf.length - dropFromLeft, dropFromLeft));
      }
      leftCount = leftHalf.length;
      rightCount = rightHalf.length;
    }

    this.replacePileOfCards = [...shuffledPile, ...rightHalf, ...leftHalf];
  }

  thoroughlyShuffle() {
    let timesToShuffle = 7;
    while (timesToShuffle > 0) {
      this.riffleShuffle();
      timesToShuffle--;
    }
  }
}
