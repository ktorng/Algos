/*
  data structure for generic deck of cards
*/

function deckOfCards() {
  const suits = ['C', 'D', 'H', 'S'];
  this.deck = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 1; j <= 13; j++) {
      this.deck.push(j + suits[i]);
    }
  }

}

deckOfCards.prototype.flipAll = function() {
  return this.deck;
}

deckOfCards.prototype.shuffle = function() {
  let rand;
  let swap;
  for (let i = 51; i >= 0; i--) {
    rand = Math.ceil(Math.random() * i);
    swap = this.deck[i];
    this.deck[i] = this.deck[rand];
    this.deck[rand] = swap;
  }
}




const deck = new deckOfCards();
console.log(deck.shuffle());
console.log(deck.flipAll());
