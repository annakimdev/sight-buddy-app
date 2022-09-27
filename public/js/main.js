
const nextBtn = document.querySelector('#next');
const randomDisplay = document.querySelector('#randomDisplay');

const soundBtn = document.querySelectorAll('#sound');
nextBtn.addEventListener('click', nextWord);

// Click next button to display next random word
function nextWord () {
    // Create deck array from deck.words in deck.ejs
    const deckArray = document.querySelector('.deckArray').innerHTML.split(',');

    // Display random element from deck array
    randomDisplay.innerHTML = deckArray[getRandomIndex(deckArray)];
}

// Helper function to get random index based on array length
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}