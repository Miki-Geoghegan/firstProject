
//class for all card deck, shuffled card deck, player1 and comp seperate arrays, playerScore and compSocre (not yet populated)

class TopTrumpsGame {
    constructor(cards) {
      this.cards = cards;
      this.shuffleCardsHalf = [];
      this.shuffledCardsPlayer = [];
      this.shuffledCardsComp = [];
      this.playerScore = 0;
      this.compScore = 0;
    }

  
    // method shuffle whole pack
  
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

    // method split pack in two and give one to player 1, one to comp

  splitCards() {
    this.shuffledCardsHalf = Math.ceil(this.cards.length / 2);
    this.shuffledCardsPlayer = this.cards.slice(0, this.shuffledCardsHalf);
    this.shuffledCardsComp = this.cards.slice(this.shuffledCardsHalf, this.cards.length);
  }

  
  endGame() {
    if (this.shuffledCardsPlayer.length === this.cards.length) {
      return true;
    } else {
      return false;
    }
  }
}


// class to hold current card for player & comp as well as the characteristic picked by player (ready to compare)

class CurrentHand {
  constructor(hand) {
    this.pickedPlayCard = 0;
    this.pickedCompCard = 0;
    this.pickedCharacteristic = 0;
    this.tiedCards = [];
  }

  // method calling to the first card of the shuffledCardsPlayer (class TopTrumpsGame) and putting it as the pickedplaycard
  // shuffledCardsPlayer as a parameter allows it to be accessed from outside of the class

  pickPlayerCard(shuffledCardsPlayer) {
    this.pickedPlayCard = shuffledCardsPlayer[0]
  }

  // method doing the same for shuffledCardsComp

  pickCompCard(shuffledCardsComp) {
    this.pickedCompCard = shuffledCardsComp[0]
  }

  // method for comparing cards
  // need to make the string picked characteristic into number, to compare the numbers

  compareCards(shuffledCardsPlayer, shuffledCardsComp) {
    let value = this.pickedCharacteristic;
    let playerNumber = parseInt(this.pickedPlayCard[value]);
    let computerNumber = parseInt(this.pickedCompCard[value]);

// the played card needs to be removed from the front of it's current shuffled array
// it then will either be pushed to the players shuffled array, the computer's or the tied new array
// if player characteristic wins, it gets the cards and any cards in tiedCards (same for comp), then tied cards resets
// if there is a tie, tied cards gets the cards until someone wins

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
    }
    else if (playerNumber < computerNumber) {
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

// both player and comp will have index 0 showing as their first card from their shuffled array