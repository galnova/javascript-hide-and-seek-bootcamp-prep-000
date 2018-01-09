function getFirstSelector(div) {
  return document.querySelector('div#nested');
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
  const deepC = document.querySelector('#grand-node div div div div');
  return deepC;
}