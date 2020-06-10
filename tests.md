# Hand and Foot Tests

### Models
- Books
  - id (int)
  - Closed (bool)
  - Unnatural (bool)
  - rank (int)
  - cards in book (JSON)
  - team (int)
- Piles
  - id (int)
  - Draw (bool)
  - Discard (bool)
  - Cards (JSON)
- Cards
  - Suit (varchar)
  - Rank (varchar)
  - Color (varchar)
  - Point Value (int)
- Players
  - id (int)
  - Team (int)
  - Name (varchar)
- HandsAndPlayers Pivot (M:1)
  - hand_id (int)
  - player_id (int)
- Hands
  - id (int)
  - Foot (Bool)
  - Cards (JSON)
  - Player (int)
- PlayersAndTeams Pivot (M:M)
  - player_id (int)
  - team_id (int)
- Teams
  - id (int)
  - Team Name (varchar)
  - Points (int)
- GamesAndTeams Pivot (M:M)
  - game_id (int)
  - team_id (int)
- Games
  - id (int)
  - Winner (team.id; int)
  - Current Round (int)
  - Number of decks (int)

### Routes
- Books
  - /teams/{id}/books/open/{numeric_value}/{cards}
  - /teams/{id}/books/close/{book_id}

### Going Out
- Team must have at least two "Natural" closed books
- Team cannot go out if do not have at least two "Natural" closed books
- Team must have at least two "Unnatural" closed books
- Team cannot go out if do not have at least two "Unnatural" closed books
- One player on the team must have no cards in hand or foot

### Game Setup
- Must have 4 or more players
- Must have an even number of players
- Must have at least as many decks as players plus one
- Must deal 14 cards to hand
- Must deal 14 cards to foot
- Draw pile must have remaining cards
- Draw pile must have remaining count of cards
  - (Number_of_decks * 52) - (Players_Count * 28)
- The first pile chosen is the player's hand

### Gameplay
- Round 2 cannot be played before round 1
- Round 3 cannot be played before round 2

#### Your Turn
- Player must pick up
- Player may play a card on their own team's books
- Player may open a new book
- Player must pick up one card from the draw pile, if they choose to pick up from the draw pile
- Player must pick up the top five cards of the discard pile, if they choose to pick up from the discard pile

#### Discard Pile
- Player cannot pick up from the discard pile if the top card is a red three
- A red 3 may be picked up from the discard pile if it is below the top card
- Player can only pick up as many cards that are in the discard pile if there are fewer than 5 cards
- Player must play top card in that turn if picked up from discard pile
- Player may not look at cards below top card in the discard pile (no peeking)

#### Hand/Foot
- Player may look at only one pile of cards at a time (hand)
- Player may choose to sort the cards in their hand

#### Books
- A book being opened must have at least three cards (including wilds)
- A book being closed must have only the same rank card (except wilds) *may already have
- Book of cards cannot close until there are at least seven cards in the book
- Book cannot contain more wild cards than rank cards
- Book cannot contain cards other than rank cards and wild cards
- Book cannot contain all wild cards
- A red 3 cannot be played in a book of 3's.
- Player may not make a book of red 3's.
- Player cannot play card on other team's books
- A closed book may continue to receive the same rank cards or wilds
- A closed natural book has a red rank card on top
  - A closed natural black 3 book is rotated 90 degrees
- A closed unnatural book has a black rank card on top
- A natural book cannot contain wild cards
- An unnatural book must contain at least one wild card
- 2's and Jokers are wild cards and cannot be played as a rank

#### Melding
- A player cannot meld first for their team, unless the cards being laid down total to more than 50 points in round 1
- A player cannot meld first for their team, unless the cards being laid down total to more than 90 points in round 2
- A player cannot meld first for their team, unless the cards being laid down total to more than 120 points in round 3
- A player can meld cards, if their team has already melded.

#### Round End
- After each round, points are counted and recorded
- Round stops once a team has required closed books and one team member plays last card in their foot
- After points are recorded, all cards are shuffled thoroughly
- The next round cannot start until the cards are shuffled

### Terminology
- Natural Book
- Unnatural Book
- Meld
- Go out
- Open(ed) Book
- Close(d) Book

### Points
- All closed natural books are 100 points
- All closed unnatural books are 50 points
- Each rank card played in team's books are positive points at the end of the round for that team
- Each unplayed card in hand or foot of any player are negative points at the end of the round for that team
- All cards from 4-8 are 5 points
- All black 3's are 5 points
- All cards from 9-K are 10 points
- All aces and 2's are 20 points
- All jokers are 50 points
- Red 3's are -50 points
- Team that had a member go out earns 150 points
