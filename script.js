// SECTION #1
// Compare this code to the section below. Similarities? Differences? BE SPECIFIC!!!
const highlighterButton = document.querySelector('#highlighterButton');
highlighterButton.onclick = highlightVocab;
function highlightVocab() {
  const allVocabElements = document.querySelectorAll('.vocab');
  for (const element of allVocabElements) {
    element.classList.add('highlight'); 
  }
}

// SECTION #2
// Compare this code to the section above. Similarities? Differences? BE SPECIFIC!!!
const styleButton = document.querySelector('#styleButton');
styleButton.onclick = () => {
  const firstParagraph = document.querySelector('.description');
  firstParagraph.style.color = 'grey';
  firstParagraph.style.fontSize = '20px';
};

// SECTION #3
const clearButton = document.querySelector('#clearButton');
clearButton.onclick = function() {
  const allVocabElements = document.querySelectorAll('.vocab');
  for (const element of allVocabElements) {
    if (element.classList.contains('highlight')) {
      element.classList.remove('highlight'); 
    }
  }
  const firstParagraph = document.querySelector('.description');
  firstParagraph.style.color = 'inherit';
  firstParagraph.style.fontSize = 'inherit';
};
