var namesArray = [];
const nameListDiv = document.getElementById('name-list-div');
const nameListDiv2 = document.getElementById('name-list-div-2');
const container2 = document.getElementById('name-list');

let fillArray = () => {
  var entryName = document.getElementById('form-name').value;
  var entryEntries = document.getElementById('form-entries').value;

  for (var i = 0; i < entryEntries; i++) {
    namesArray.push(entryName);
  }
  return namesArray;
};

let addName = () => {
  let entryName1 = document.getElementById('form-name').value;
  let entryEntries1 = document.getElementById('form-entries').value;
  if (document.getElementById('name-list-div').childElementCount == 9) {
    const p = document.createElement('p');
    p.className = 'name-display';
    p.appendChild(document.createTextNode(`${entryName1} - ${entryEntries1}`));
    nameListDiv2.appendChild(p);
    document.getElementById('form-name').value = '';
    document.getElementById('form-entries').value = '';
    return false;
  } else {
    const p = document.createElement('p');
    p.className = 'name-display';
    p.appendChild(document.createTextNode(`${entryName1} - ${entryEntries1}`));
    nameListDiv.appendChild(p);
    document.getElementById('form-name').value = '';
    document.getElementById('form-entries').value = '';
    return false;
  }
};

let pickWinner = () => {
  let winner = namesArray[Math.floor(Math.random() * namesArray.length)];
  document.getElementById('winner-name').innerHTML = winner;
  document.getElementById('winner-button').innerHTML = 'Winner Selected!';

  return false;
};
