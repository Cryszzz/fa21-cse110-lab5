// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
var text = document.querySelector('textarea');
var voiceSelect = document.querySelector('select');
var image = document.querySelector("img")
var spoken=0;
var voices = [];

function init() {
  document.querySelector('button').addEventListener('click', opensound)
}

function populateVoiceList() {
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function opensound() {
  var utterThis = new SpeechSynthesisUtterance(text.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
}

setInterval(checkmouth, 100);

function checkmouth(){
  image.src = synth.speaking
    ? 'assets/images/smiling-open.png'
    : 'assets/images/smiling.png';
}

