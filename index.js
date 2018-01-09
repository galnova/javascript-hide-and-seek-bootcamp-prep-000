function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nesTed = document.querySelector('#nested .target');
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