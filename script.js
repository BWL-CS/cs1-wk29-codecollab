// SECTION 1 - Just like our project

const styleButton = document.querySelector('#styleButton');
styleButton.addEventListener('click', changeStyle);

function changeStyle() {
  const firstParagraph = document.querySelector('.description');
  firstParagraph.style.color = '#D63384';
  firstParagraph.style.fontSize = '16px';
  firstParagraph.style.fontStyle = 'italic';
  firstParagraph.style.border = '2px solid grey';
  firstParagraph.style.padding = '5px';
}


// SECTION 2 - Looping through multiple elements

const highlightButton = document.querySelector('#highlightButton');
highlightButton.addEventListener('click', highlightVocab);

function highlightVocab() {
  const allVocabElements = document.querySelectorAll('.vocab');
  for (const element of allVocabElements) {
    element.classList.add('highlight'); 
  }
}


// SECTION 3 - Challenge! 

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', clearStyle);

function clearStyle() {

  const allVocabElements = document.querySelectorAll('.vocab');

  for (const element of allVocabElements) {
    if (element.classList.contains('highlight')) {
      element.classList.remove('highlight'); 
    }
  }

  const firstParagraph = document.querySelector('.description');

  firstParagraph.style.color = 'inherit';
  firstParagraph.style.fontSize = 'inherit';
  firstParagraph.style.fontStyle = 'inherit';
  firstParagraph.style.border = 'inherit';
  firstParagraph.style.padding = 'inherit';
}
