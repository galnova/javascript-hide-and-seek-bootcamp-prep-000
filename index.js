function getFirstSelector(selector) {
  return document.querySelector('p');
}

function nestedTarget() {
  const nesTed = document.querySelector('#nested div div div div.target');
  return nesTed;
}

function increaseRankBy(n) {
  const raise = document.getElementsByClassName('ranked-list');
  // var a = parseInt("10") + n;
}

function deepestChild() {
  const deepC = document.getElementById('grand-node')[0];
}