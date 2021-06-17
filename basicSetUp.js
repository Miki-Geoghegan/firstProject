class TopTrumpsGame {
  constructor(cards) {
    this.cards = cards;
    this.shuffledCardsPlayer = [];
    this.shuffledCardsComp = [];
  }
  
  shuffleCards() {
    for (let k = this.cards.length - 1; k > 0; k--) {
      const i = Math.floor(Math.random() * (this.cards.length));
      const j = Math.floor(Math.random() * (this.cards.length));
      let temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
    console.log(this.cards);
  }

  splitCards() {
    let midPoint = Math.ceil(this.cards.length / 2);
    this.shuffledCardsPlayer = this.cards.slice(0, midPoint);
    this.shuffledCardsComp = this.cards.slice(midPoint, this.cards.length);
  }

  
  endGame() {
    if (this.shuffledCardsPlayer.length === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}