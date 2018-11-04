// Imports
// import getPath from './Tool.js';

const appBuildPiano = function main() {
  const first = {
    numberWhite: 7,
    numBlack: 5,
    notes: ['Do', 'Re', 'Mi', 'Fa', 'Sol', 'La', 'Si', 'Do#', 'Re#', 'Fa#', 'Sol#', 'La#'],
    sounds: ['audios/Do.mp3', 'audios/Re.mp3', 'audios/Mi.mp3', 'audios/Fa.mp3', 'audios/Sol.mp3',
      'audios/La.mp3', 'audios/Si.mp3', 'audios/DoSost.mp3', 'audios/ReSost.mp3', 'audios/FaSost.mp3',
      'audios/SolSost.mp3', 'audios/LaSost.mp3'],
    keysCodes: [65, 83, 68, 70, 74, 75, 76, 87, 69, 85, 73, 79],
    keyChars: ['a', 's', 'd', 'f', 'j', 'k', 'l', 'w', 'e', 'u', 'i', 'o'],
    positions: ['9%', '24%', '52%', '66%', '81%'],
  };
  const selected = first;
  const typeKeys = {
    white: 'white-key',
    black: 'black-key',
  };
  const audioCtx = new AudioContext();
  const volumeControl = audioCtx.createGain();

  function calcPositions() {
    const arrayAux = [1, 2, 4, 5, 6];
    const base = 13;
    return arrayAux.map(value => `${base * value}%`);
  }

  function playAudio(sound) {
    return () => {
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
    };
  }

  function playAudioKeyboard(sound, key) {
    return (event) => {
      if (!event.repeat) {
        // eslint-disable-next-line no-console
        console.log(event.code);
        if (event.which === key) {
          playAudio(sound)(); // play the sound using the function playAudio
        }
      }
    };
  }

  function addMetronomeControl() {
    const bpmToSecond = bpm => Math.floor(60000 / bpm);
    const metronomeContainer = document.querySelector('#metronome');
    const imgMetronome = metronomeContainer.querySelector('img');
    const audioMetronome = metronomeContainer.querySelector('audio');
    const track = audioCtx.createMediaElementSource(audioMetronome);
    track.connect(volumeControl).connect(audioCtx.destination);
    const metronomeInput = metronomeContainer.querySelector('div').querySelector('input');
    let tick;
    let tickSeconds = bpmToSecond(metronomeInput.value);

    const playMetronome = playAudio(audioMetronome);
    metronomeInput.addEventListener('input', () => {
      tickSeconds = bpmToSecond(metronomeInput.value);
      metronomeContainer.querySelector('span').textContent = `${metronomeInput.value} bpm`;
      if (tick) {
        clearInterval(tick);
        tick = setInterval(playMetronome, tickSeconds);
      }
    });
    imgMetronome.addEventListener('click', () => {
      if (!tick) {
        tick = setInterval(playMetronome, tickSeconds);
        imgMetronome.src = 'images/metronome-tick.svg';
        imgMetronome.alt = 'metronome-on';
      } else {
        clearInterval(tick);
        tick = undefined;
        imgMetronome.src = 'images/metronome.svg';
        imgMetronome.alt = 'metronome-off';
      }
    });
  }

  function addVolumeControl() {
    const volumeContainer = document.querySelector('#volume-control');
    const volumeInput = volumeContainer.querySelector('input');
    const volumeImg = volumeContainer.previousElementSibling;
    let currentLevel = volumeInput.value;
    volumeImg.addEventListener('click', () => {
      if (volumeControl.gain.value >= 0.03) {
        currentLevel = volumeInput.value;
        volumeControl.gain.value = 0;
        volumeInput.value = 0;
        volumeImg.src = 'images/volume-mute.svg';
        volumeImg.alt = 'volume-mute';
      } else {
        volumeControl.gain.value = currentLevel;
        volumeInput.value = currentLevel;
        volumeImg.src = 'images/volume-high.svg';
        volumeImg.alt = 'volume-active';
      }
    });
    volumeInput.addEventListener('input', () => {
      volumeControl.gain.value = volumeInput.value;
      if (volumeInput.value <= 0.03) {
        volumeImg.src = 'images/volume-mute.svg';
        volumeImg.alt = 'volume-mute';
      } else {
        volumeImg.src = 'images/volume-high.svg';
        volumeImg.alt = 'volume-active';
      }
    });
  }

  function addPositionCSS(key, positionX) {
    key.style.left = positionX;
  }

  function addKey(typeKey, sound) {
    const key = document.createElement('div');
    const soundElement = document.createElement('audio');
    soundElement.setAttribute('type', 'audio/mpeg');
    soundElement.preload = 'auto';
    soundElement.src = sound;
    soundElement.crossOrigin = 'anonymous';
    key.setAttribute('class', `${typeKey}`);
    key.appendChild(soundElement);
    return key;
  }

  // Function that creates all the piano's Keyboard, its html code, apply
  // CSS and event listeners
  function buildKeyboard() {
    // Use map to loop the audios array, map is faster than foreach
    const keyboard = document.querySelector('.keyboard-container');
    const offDom = document.createDocumentFragment();
    selected.sounds.map((soundToKey, index) => {
      let key;
      if (index < selected.numberWhite) {
        key = addKey(typeKeys.white, soundToKey);
      } else {
        key = addKey(typeKeys.black, soundToKey);
        key.id = selected.notes[index];
        const offIndex = index - selected.numberWhite;
        const attributeClass = selected.positions[offIndex];
        addPositionCSS(key, attributeClass);
      }
      const audioElement = key.querySelector('audio');
      const track = audioCtx.createMediaElementSource(audioElement);
      track.connect(volumeControl).connect(audioCtx.destination);
      const playSound = playAudio(audioElement);
      const playSoundKeyboard = playAudioKeyboard(audioElement, selected.keysCodes[index]);
      key.addEventListener('click', playSound);
      window.addEventListener('keydown', playSoundKeyboard);
      offDom.appendChild(key);
      return undefined;
    });
    keyboard.appendChild(offDom);
    addVolumeControl();
    addMetronomeControl();
  }

  buildKeyboard();
};
window.addEventListener('load', appBuildPiano);
