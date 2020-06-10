export default {
  suits: {
    heart: {
      color: 'red',
      ranks: {
        0: {
          name: 'Joker',
          pointValue: 50,
        },
        1: {
          name: 'Ace',
          pointValue: 20,
        },
        2: {
          name: 'Two',
          pointValue: 20,
        },
        3: {
          name: 'Three',
          pointValue: -50,
        },
        4: {
          name: 'Four',
          pointValue: 5,
        },
        5: {
          name: 'Five',
          pointValue: 5,
        },
        6: {
          name: 'Six',
          pointValue: 5,
        },
        7: {
          name: 'Seven',
          pointValue: 5,
        },
        8: {
          name: 'Eight',
          pointValue: 5,
        },
        9: {
          name: 'Nine',
          pointValue: 10,
        },
        10: {
          name: 'Ten',
          pointValue: 10,
        },
        11: {
          name: 'Jack',
          pointValue: 10,
        },
        12: {
          name: 'Queen',
          pointValue: 10,
        },
        13: {
          name: 'King',
          pointValue: 10,
        },
      },
    },
    diamond: {
      color: 'red',
      ranks: {
        0: {
          name: 'Joker',
          pointValue: 50,
        },
        1: {
          name: 'Ace',
          pointValue: 20,
        },
        2: {
          name: 'Two',
          pointValue: 20,
        },
        3: {
          name: 'Three',
          pointValue: -50,
        },
        4: {
          name: 'Four',
          pointValue: 5,
        },
        5: {
          name: 'Five',
          pointValue: 5,
        },
        6: {
          name: 'Six',
          pointValue: 5,
        },
        7: {
          name: 'Seven',
          pointValue: 5,
        },
        8: {
          name: 'Eight',
          pointValue: 5,
        },
        9: {
          name: 'Nine',
          pointValue: 10,
        },
        10: {
          name: 'Ten',
          pointValue: 10,
        },
        11: {
          name: 'Jack',
          pointValue: 10,
        },
        12: {
          name: 'Queen',
          pointValue: 10,
        },
        13: {
          name: 'King',
          pointValue: 10,
        },
      },
    },
    club: {
      color: 'black',
      ranks: {
        0: {
          name: 'Joker',
          pointValue: 50,
        },
        1: {
          name: 'Ace',
          pointValue: 20,
        },
        2: {
          name: 'Two',
          pointValue: 20,
        },
        3: {
          name: 'Three',
          pointValue: 5,
        },
        4: {
          name: 'Four',
          pointValue: 5,
        },
        5: {
          name: 'Five',
          pointValue: 5,
        },
        6: {
          name: 'Six',
          pointValue: 5,
        },
        7: {
          name: 'Seven',
          pointValue: 5,
        },
        8: {
          name: 'Eight',
          pointValue: 5,
        },
        9: {
          name: 'Nine',
          pointValue: 10,
        },
        10: {
          name: 'Ten',
          pointValue: 10,
        },
        11: {
          name: 'Jack',
          pointValue: 10,
        },
        12: {
          name: 'Queen',
          pointValue: 10,
        },
        13: {
          name: 'King',
          pointValue: 10,
        },
      },
    },
    spade: {
      color: 'black',
      ranks: {
        0: {
          name: 'Joker',
          pointValue: 50,
        },
        1: {
          name: 'Ace',
          pointValue: 20,
        },
        2: {
          name: 'Two',
          pointValue: 20,
        },
        3: {
          name: 'Three',
          pointValue: 5,
        },
        4: {
          name: 'Four',
          pointValue: 5,
        },
        5: {
          name: 'Five',
          pointValue: 5,
        },
        6: {
          name: 'Six',
          pointValue: 5,
        },
        7: {
          name: 'Seven',
          pointValue: 5,
        },
        8: {
          name: 'Eight',
          pointValue: 5,
        },
        9: {
          name: 'Nine',
          pointValue: 10,
        },
        10: {
          name: 'Ten',
          pointValue: 10,
        },
        11: {
          name: 'Jack',
          pointValue: 10,
        },
        12: {
          name: 'Queen',
          pointValue: 10,
        },
        13: {
          name: 'King',
          pointValue: 10,
        },
      },
    },
  },
  fullDeckIncludingJokers() {
    let totalCards = 0;
    Object.keys(this.suits).forEach((suit) => {
      totalCards += Object.keys(this.suits[suit].ranks).length;
    });
    return totalCards;
  },
  pointValueCards(value) {
    return Object.keys(this.suits).map(
      (suit) => Object.keys(this.suits[suit].ranks).filter(
        (rank) => this.suits[suit].ranks[rank].pointValue === value,
      ),
    );
  },
};
