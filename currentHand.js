class CurrentHand {
    constructor() {
      this.pickedPlayCard = 0;
      this.pickedCompCard = 0;
      this.pickedCharacteristic = 0;
      this.tiedCards = [];
    }

    pickPlayerCard(shuffledCardsPlayer) {
      this.pickedPlayCard = shuffledCardsPlayer[0]
    }
  
    pickCompCard(shuffledCardsComp) {
      this.pickedCompCard = shuffledCardsComp[0]
    }

  
    compareCards(shuffledCardsPlayer, shuffledCardsComp) {
      let playerNumber = parseInt(this.pickedPlayCard[this.pickedCharacteristic]);
      let computerNumber = parseInt(this.pickedCompCard[this.pickedCharacteristic]);
      let playedCompCard = shuffledCardsComp.shift();
      let playedPlayerCard = shuffledCardsPlayer.shift();
      
      if (playerNumber > computerNumber) {
        shuffledCardsPlayer.push(playedPlayerCard);
        shuffledCardsPlayer.push(playedCompCard);
        if (this.tiedCards.length > 0) {
          for (let i = 0; i < this.tiedCards.length; i ++) {
          shuffledCardsPlayer.push(this.tiedCards[i])
          }
          this.tiedCards = []
        }
      } else if (playerNumber < computerNumber) {
        shuffledCardsComp.push(playedPlayerCard);
        shuffledCardsComp.push(playedCompCard);
        if (this.tiedCards.length > 0) {
          for (let i = 0; i < this.tiedCards.length; i ++) {
            shuffledCardsComp.push(this.tiedCards[i])
          }
          this.tiedCards = []
        }
      } else {
        this.tiedCards.push(playedPlayerCard);
        this.tiedCards.push(playedCompCard);
      }
    }
  }