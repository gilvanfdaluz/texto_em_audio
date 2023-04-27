let textarea = document.querySelector('#textarea');
let voices = document.querySelector('#voices');
let button = document.querySelector('#button');
let selectedVoice = 0;

window.speechSynthesis.addEventListener('voiceschanged', () => {
  let voiceslist = window.speechSynthesis.getVoices();
  for(let i in voiceslist) {
    let optionEl = document.createElement('option');
    optionEl.setAttribute('value', i);
    optionEl.innerText = voiceslist[i].name;
    voices.appendChild(optionEl);
  }
});
  
button.addEventListener('click', () => {
  if (textarea.value !== ''){
  let voiceslist = window.speechSynthesis.getVoices();
    let ut = new SpeechSynthesisUtterance(textarea.value);
    ut.voice = voiceslist[selectedVoice];
    window.speechSynthesis.speak(ut);
  }
});

voices.addEventListener('change', () => {
  selectedVoice = parseInt(voices.value);
});

function updateStatus() {
  if(window.speechSynthesis.speaking) {
    voices.setAttribute('disabled', 'disabled');
    button.setAttribute('disabled', 'disabled');
  } else {
    voices.removeAttribute('disabled');
    button.removeAttribute('disabled');
  }
}

setInterval(updateStatus, 100);