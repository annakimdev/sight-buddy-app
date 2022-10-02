// Define variable for speechSynthesis
const synth = window.speechSynthesis;
let voiceSelect = document.querySelector('select');
let voices = [];

export function speechWord() {
    let speakWord = document.querySelector('#randomDisplay').innerHTML;
    console.log(speakWord);

    let speech = new SpeechSynthesisUtterance(speakWord);
    speechSynthesis.rate = 0.2;
    speechSynthesis.pitch = 0.6;
    
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i=0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            speech.voice = voices[i];
            break;
        }
    }
    synth.speak(speech);


}

// Populate voice list
export function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
        const aname = a.name.toUpperCase();
        const bname = b.name.toUpperCase();
        if (aname < bname) return 0;
        else return +1;
    });
    let selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    for (let i=0; i < voices.length; i++) {
        let option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

        if (voices[i].default) {
            option.textContent += ' -- DEFAULT';
        }

        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);
        voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
}

