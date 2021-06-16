const cards = [
    { name: 'Dachshund', img: 'Dachshund.jpeg', playfulness: '8', energy: '6', trainability: '4', intelligence: '6', size: '2', dogFriendly: '5', barkTendancy: '10'},
    { name: 'Pitbull', img: 'Pitbull.jpeg', playfulness: '10', energy: '8', trainability: '8', intelligence: '9', size: '6', dogFriendly: '1', barkTendancy: '5'},
    { name: 'Vizsla', img: 'Vizsla.jpeg', playfulness: '10', energy: '10', trainability: '9', intelligence: '8', size: '7', dogFriendly: '10', barkTendancy: '9'},
    { name: 'Whippet', img: 'Whippet.jpeg', playfulness: '9', energy: '10', trainability: '6', intelligence: '7', size: '5', dogFriendly: '8', barkTendancy: '1'},
    { name: 'German Shepherd', img: 'GermanShepherd.jpeg', playfulness: '9', energy: '9', trainability: '10', intelligence: '10', size: '8', dogFriendly: '3', barkTendancy: '8'},
    { name: 'French Bulldog', img: 'FrenchBulldog.jpg', playfulness: '8', energy: '5', trainability: '8', intelligence: '6', size: '3', dogFriendly: '9', barkTendancy: '3'},
    { name: 'Dalmatian', img: 'Dalmatian.jpeg', playfulness: '7', energy: '9', trainability: '7', intelligence: '7', size: '7', dogFriendly: '7', barkTendancy: '4'},
    { name: 'Newfoundland', img: 'newfoundland.jpg', playfulness: '7', energy: '4', trainability: '7', intelligence: '9', size: '10', dogFriendly: '7', barkTendancy: '7'},
    { name: 'Doberman', img: 'Doberman.jpeg', playfulness: '8', energy: '7', trainability: '9', intelligence: '10', size: '9', dogFriendly: '2', barkTendancy: '1'},
    { name: 'Yorkshire Terrier', img: 'yorkshireTerrier.jpeg', playfulness: '6', energy: '8', trainability: '5', intelligence: '4', size: '1', dogFriendly: '6', barkTendancy: '6'},
    { name: 'Poodle', img: 'Poodle.jpeg', playfulness: '9', energy: '7', trainability: '10', intelligence: '10', size: '7', dogFriendly: '8', barkTendancy: '3'},
    { name: 'Maltese', img: 'Maltese.jpeg', playfulness: '5', energy: '5', trainability: '4', intelligence: '4', size: '2', dogFriendly: '6', barkTendancy: '8'},
    { name: 'Scottish Terrier', img: 'scottishTerrier.jpg', playfulness: '6', energy: '4', trainability: '2', intelligence: '4', size: '3', dogFriendly: '8', barkTendancy: '9'},
    { name: 'Chi Chi', img: 'chiChi.jpg', playfulness: '4', energy: '6', trainability: '5', intelligence: '5', size: '1', dogFriendly: '3', barkTendancy: '10'},
    { name: 'Beagle', img: 'Beagle.jpeg', playfulness: '10', energy: '8', trainability: '1', intelligence: '7', size: '4', dogFriendly: '10', barkTendancy: '7'},
    { name: 'Cockapoo', img: 'cockapoo.jpeg', playfulness: '9', energy: '5', trainability: '6', intelligence: '8', size: '5', dogFriendly: '9', barkTendancy: '4'},
    { name: 'Basset Hound', img: 'bassetHound.jpeg', playfulness: '5', energy: '3', trainability: '3', intelligence: '5', size: '6', dogFriendly: '10', barkTendancy: '6'},
    { name: 'Mastiff', img: 'mastiff.jpg', playfulness: '3', energy: '6', trainability: '2', intelligence: '3', size: '10', dogFriendly: '4', barkTendancy: '2'},
    { name: 'Husky', img: 'husky.jpeg', playfulness: '10', energy: '10', trainability: '3', intelligence: '5', size: '8', dogFriendly: '4', barkTendancy: '10'},
    { name: 'Shichon', img: 'shichon.jpg', playfulness: '8', energy: '5', trainability: '4', intelligence: '6', size: '5', dogFriendly: '7', barkTendancy: '5'},
  ];

  
// linking with the classes in memory.js file

const topTrumpsGame = new TopTrumpsGame(cards);
const currentHand = new CurrentHand();

// function choose a characteristic with a click (see ul onclick)
// function to add blue to the clicked target when an event (a click) occurs

  function dogCharacteristicClicked(event) {
    console.log("a pickedPlayerCard ability has been clicked", event.target.textContent);
    event.target.style.color = 'blue';

// calling the populateCompHand (current card) function when characteristic clicked and filling this.pickedCompCard with this card
// will only occur once clicked, previously will be ?
    populateCompHand(currentHand.pickedCompCard)

// setting a timer for the click event
    setTimeout(function() {

// making the picked characteristic in memory.js the class name of the target of the click (characteristic clicked i.e. 'playfulness')
    currentHand.pickedCharacteristic = event.target.className

// calling the compareCards function in memory.js with shuffledCardsPlayer and Comp so that it can access the shuffled cards packs
    currentHand.compareCards(topTrumpsGame.shuffledCardsPlayer, topTrumpsGame.shuffledCardsComp)

  // once timeout, pick another player card with pickPlayerCard function (i[0]), need to access shuffledCardsPlayer
    currentHand.pickPlayerCard(topTrumpsGame.shuffledCardsPlayer)
 
    // call populate the current player hand function and pass it to pickedPlayCard
    populatePlayerHand(currentHand.pickedPlayCard);

    // once timer runs out, questionmark with flip back around
    currentHand.pickCompCard(topTrumpsGame.shuffledCardsComp)
    displayQuestionMark();

    document.getElementById('user-cards').innerHTML = topTrumpsGame.shuffledCardsPlayer.length;
    document.getElementById('computer-cards').innerHTML = topTrumpsGame.shuffledCardsComp.length;
    document.getElementById('tied-cards').innerHTML = currentHand.tiedCards.length;


    if (topTrumpsGame.endGame()) {
      document.getElementById('player-hand').innerHTML = `<h3 class = "winner">YOU WON THE GAME></h3>`
    } else {
      document.getElementById('comp-hand').innerHTML = `<h3 class = "game-over"GAME OVER, the computer has won!></h3>`
    }

  }, 3000)



  
  }

// calling classes from previous page to start when page is loaded 

  window.addEventListener('load', (event) => {
    console.log('TopTrumpsGame is loaded');

    // will first shuffle then split the them into two as per functions on memory page
    topTrumpsGame.shuffleCards()
    topTrumpsGame.splitCards()

    // calling pickPlayerCard function below (will take the first card from shuffledplayers deck) and same for comp
    // needs to be able to access shuffledCardsPlayer?

    currentHand.pickPlayerCard(topTrumpsGame.shuffledCardsPlayer);
    currentHand.pickCompCard(topTrumpsGame.shuffledCardsComp);
   
   // calling function populatePlayer below and linking this so current pickedPlayCard in class CurrentHand in memory.js is the card that populates the HTML

    populatePlayerHand(currentHand.pickedPlayCard)
    displayQuestionMark()

  });


// function to populatePlayerHand with a specific card from class pickedPlayerCard (first card of shuffled player deck)

  function populatePlayerHand(pickedPlayerCard) {
    console.log(pickedPlayerCard)
   document.getElementById('player-hand').innerHTML = `
   <div class = "dog-card">
   <h1>${pickedPlayerCard.name}</h1>
   <img src="./Images/${pickedPlayerCard.img}" alt="${pickedPlayerCard.name}" height="150px">
   <ul dataset= ${pickedPlayerCard} onclick = "dogCharacteristicClicked(event)">
     <li class = "playfulness">Playfulness: ${pickedPlayerCard.playfulness}</li>
     <li class = "energy">Energy: ${pickedPlayerCard.energy}</li>
     <li class = "trainability">Trainability: ${pickedPlayerCard.trainability}</li>
     <li class = "intelligence">Intelligence: ${pickedPlayerCard.intelligence}</li>
     <li class = "size">Size: ${pickedPlayerCard.size}</li>
     <li class = "dogFriendly">Dog-friendly: ${pickedPlayerCard.dogFriendly}</li>
     <li class = "barkTendancy">Bark-tendancy: ${pickedPlayerCard.barkTendancy}</li>
   </ul>
 </div>
 `
  }

// Start by displaying questionmark before clicked and comp hand is shown

function displayQuestionMark() {
  document.getElementById('comp-hand').innerHTML = `
  <div class = "dog-card">
  <img src="./Images/questionMark.png" alt = "questionMarkImg"/>
  </div>
  `
}


  function populateCompHand(pickedCompCard) {
    document.getElementById('comp-hand').innerHTML = `
    <div class = "dog-card">
    <h1>${pickedCompCard.name}</h1>
    <img src="./Images/${pickedCompCard.img}" alt="${pickedCompCard.name}" height="150px">
    <ul>
      <li class = "playfulness">Playfulness: ${pickedCompCard.playfulness}</li>
      <li>Energy: ${pickedCompCard.energy}</li>
      <li>Trainability: ${pickedCompCard.trainability}</li>
      <li>Intelligence: ${pickedCompCard.intelligence}</li>
      <li>Size: ${pickedCompCard.size}</li>
      <li>Dog-friendly: ${pickedCompCard.dogFriendly}</li>
      <li>Bark-tendancy: ${pickedCompCard.barkTendancy}</li>
    </ul>
  </div>
  `
  }

  