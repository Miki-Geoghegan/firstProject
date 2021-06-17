  const topTrumpsGame = new TopTrumpsGame(cards);
  const currentHand = new CurrentHand();
  
  
  function dogCharacteristicClicked(event) {
    console.log("a pickedPlayerCard ability has been clicked", event.target.textContent);
    event.target.style.color = 'white';
    
    populateCompHand(currentHand.pickedCompCard)
    
    setTimeout(function() {
      currentHand.pickedCharacteristic = event.target.className
      
      currentHand.compareCards(topTrumpsGame.shuffledCardsPlayer, topTrumpsGame.shuffledCardsComp)
      
      if (topTrumpsGame.shuffledCardsPlayer.length > 0) {
      
        currentHand.pickPlayerCard(topTrumpsGame.shuffledCardsPlayer)
        
        populatePlayerHand(currentHand.pickedPlayCard);
        
        currentHand.pickCompCard(topTrumpsGame.shuffledCardsComp)
        displayQuestionMark();
        
        document.getElementById('user-cards').innerHTML = topTrumpsGame.shuffledCardsPlayer.length;
        document.getElementById('computer-cards').innerHTML = topTrumpsGame.shuffledCardsComp.length;
        document.getElementById('tied-cards').innerHTML = currentHand.tiedCards.length;
        
        if (topTrumpsGame.endGame()) {
          document.getElementById('player-hand').innerHTML = ``
          document.getElementById('comp-hand').innerHTML = ``;
          document.getElementById('hand').innerHTML = `<h3 class = "winner">YOU WON</h3>`
          document.getElementById('play-title').innerHTML = `<button id = "reset-button">Reset</button>`;
          document.getElementById('card-titles').innerHTML = ``
          document.getElementById('reset-button').addEventListener("click", () => window.location.reload());
      }
  
      } else {
        document.getElementById('comp-hand').innerHTML = `<h3 class = "game-over">GAME OVER</h3>`
        document.getElementById('player-hand').innerHTML = ``;
        document.getElementById('play-title').innerHTML = `<button id = "reset-button">Reset</button>`;
        document.getElementById('card-titles').innerHTML = ``
        document.getElementById('reset-button').addEventListener("click", () => window.location.reload());

    }}, 3000) 
  }

  window.addEventListener('load', (event) => {
    console.log('TopTrumpsGame is loaded');

    topTrumpsGame.shuffleCards()
    topTrumpsGame.splitCards()

    currentHand.pickPlayerCard(topTrumpsGame.shuffledCardsPlayer);
    currentHand.pickCompCard(topTrumpsGame.shuffledCardsComp);
   

    populatePlayerHand(currentHand.pickedPlayCard)
    displayQuestionMark()

  });


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


  function displayQuestionMark() {
    document.getElementById('comp-hand').innerHTML = `
    <div class = "question-card">
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