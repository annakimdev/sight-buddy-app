
const nextBtn = document.querySelectorAll('.next');
const soundBtn = document.querySelectorAll('.sound');
nextBtn.addEventListener('click', nextWord);

function nextWord () {
    const arrWordList = this.parentNode.dataset.word;
    return getRandomIndex(arrWordList)
}

function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length)
}