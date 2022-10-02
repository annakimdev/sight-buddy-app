import { speechWord, populateVoiceList } from './speech.js'
const speechBtn = document.querySelector('#speech');
speechBtn.addEventListener('click', speechWord);
populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

const nextBtn = document.querySelector('#next');
const randomDisplay = document.querySelector('#randomDisplay');

nextBtn.addEventListener('click', nextWord);

// Click next button to display next random word
function nextWord () {
    // Create deck array from deck.words in deck.ejs
    const deckArray = document.querySelector('.deckArray').innerHTML.split(',');

    // Display random element from deck array that is hidden
    randomDisplay.innerHTML = deckArray[getRandomIndex(deckArray)];
}

// Helper function to get random index based on array length
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}