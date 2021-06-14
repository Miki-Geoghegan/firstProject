class TopTrumpsGame {
    constructor(cards) {
      this.cards = cards;
      this.shuffleCardsTotal = [];
      this.shuffledCardsPlayer = [];
      this.shuffledCardsComp = [];
      this.playerScore = 0;
      this.compScore = 0;
    }

  
  
    shuffleCards() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
      const halfCards = Math.ceil(this.shuffleCardsTotal.length / 2);


    }
  }
  