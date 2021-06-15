
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
    console.log(this.shuffledCardsPlayer);
    console.log(this.shuffledCardsComp);
  }
}

// class to hold current card for player & comp as well as the characteristic picked by player (ready to compare)

class CurrentHand {
  constructor(hand) {
    this.pickedPlayCard = 0;
    this.pickedCompCard = 0;
    this.pickedCharacteristic = 0;
  }

  // method calling to the first card of the shuffledCardsPlayer (class TopTrumpsGame) and putting it as the pickedplaycard

  pickPlayerCard(shuffledCardsPlayer) {
    this.pickedPlayCard = shuffledCardsPlayer[0]
  }

  // method doing the same for shuffledCardsComp

  pickCompCard(shuffledCardsComp) {
    this.pickedCompCard = shuffledCardsComp[0]
  }

  // method for comparing cards, if playerCard > compCard returns false, else true 
  // need to make the string into number, to compare the numbers

  compareCards() {
    let value = this.pickedCharacteristic;
    console.log(this.pickedPlayCard)
    console.log(this.pickedPlayCard[value]);
    let toNumber = Number(this.pickedPlayCard[value]);
    console.log(typeof toNumber)
    let compare = this.pickedPlayCard[toNumber] > this.pickedCompCard[toNumber];
    console.log(compare)
    return compare;
  }
  
// need to add parseInt somewhere

}

// both player and comp will have index 0 showing as their first card from their shuffled array

/*
compareCards(characteristic1, characteristic2) {
  if (characteristic1 === characteristic2) {
    this.pairsGuessed++;
    this.checkIfFinished();
    return true;
  } else {
    return false;
  }
  */