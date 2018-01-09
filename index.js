function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nesTed = document.querySelector('#nested .target');
  return nesTed;
}

function increaseRankBy(n) {
  let rankedItems = document.querySelector('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < rankedItems.length; i++) {
    let rank = parseInt(rankedItems[i].innerHTML);
    rankedItems[i].innerHTML = rank + n;
  }
}

function deepestChild() {
  const deepC = document.querySelector('#grand-node div div div div');
  return deepC;
}