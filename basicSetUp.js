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

  
  endGame(tiedCards) {
    if (this.shuffledCardsPlayer.length === this.cards.length) {
      return true;
    } else if (this.shuffledCardsComp.length === this.cards.length) {
      return false
    }
     else if (tiedCards.length >= 2 && this.shuffledCardsComp.length === 0) {
      alert (`Computer cards are empty, the player wins! `)
      return -2
    } else if (tiedCards.length >= 2 && this.shuffledCardsPlayer.length === 0) {
        alert (`Player cards are empty, the computer wins!`)
        return -2
    } else {
      return -1;
    }
  }
}