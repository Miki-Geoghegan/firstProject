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
  

  function dogCharacteristicClicked(event) {
    console.log("a dog ability has been clicked", event.target.textContent);

  }

  window.addEventListener('load', (event) => {
    const topTrumpsGame = new TopTrumpsGame(cards);
    console.log('TopTrumpsGame is loaded');
    let html = '';
    topTrumpsGame.cards.forEach((dog) => {
      html += `
      <div id = "dogCard">
      <h1>${dog.name}</h1>
      <img src="./Images/${dog.img}" alt="${dog.name}" height="150px">
      <ul onclick = "dogCharacteristicClicked(event)">
        <li>Playfulness: ${dog.playfulness}</li>
        <li>Energy: ${dog.energy}</li>
        <li>Trainability: ${dog.trainability}</li>
        <li>Intelligence: ${dog.intelligence}</li>
        <li>Size: ${dog.size}</li>
        <li>Dog-friendly: ${dog.dogFriendly}</li>
        <li>Bark-tendancy: ${dog.barkTendancy}</li>
      </ul>
    </div>
      `;
    });
  
    document.getElementById('card-bank').innerHTML = html;
  });