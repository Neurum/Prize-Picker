var namesArray = [];
const nameListDiv = document.getElementById('name-list-div');

let fillArray = () => {
  var entryName = document.getElementById('form-name').value;
  var entryEntries = document.getElementById('form-entries').value;

  for (var i = 0; i < entryEntries; i++) {
    namesArray.push(entryName);
  }
  console.log(namesArray);

  return false;
};

let addName = () => {
  let entryName = document.getElementById('form-name').value;
  let entryEntries = document.getElementById('form-entries').value;
  const p = document.createElement('p');
  p.className = 'name-display';
  p.appendChild(document.createTextNode(`${entryName} - ${entryEntries}`));
  nameListDiv.appendChild(p);
  document.getElementById('form-name').value = '';
  document.getElementById('form-entries').value = '';
  return false;
};

let pickWinner = () => {
  let winner = namesArray[Math.floor(Math.random() * namesArray.length)];
  document.getElementById('winner-name').innerHTML = winner;
  document.getElementById('winner-button').innerHTML = 'Winner Selected!';
};
