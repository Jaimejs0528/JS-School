const appBuildPiano = function () {
    const numberWhiteKey = 7;
    const path = getPath();
    const pathTmp=`${path}sounds/`;
    const sounds = [`${pathTmp}Do.mp3`, `${pathTmp}Re.mp3`, `${pathTmp}Mi.mp3`, `${pathTmp}Fa.mp3`, `${pathTmp}Sol.mp3`,
        `${pathTmp}La.mp3`, `${pathTmp}Si.mp3`, `${pathTmp}DoSost.mp3`, `${pathTmp}ReSost.mp3`, `${pathTmp}FaSost.mp3`,
        `${pathTmp}SolSost.mp3`, `${pathTmp}LaSost.mp3`];
    const keys = ['KeyA','KeyS','KeyD','KeyF','KeyJ','KeyK','KeyL','KeyW','KeyE','KeyR','KeyI','KeyO'];
    const typeKeys = {
        white: "white-key",
        black: "black-key"
    };
    const keyboard = document.querySelector(".container");
    const offDom = document.createDocumentFragment();
    const audioCtx = new AudioContext();
    buildKeyboard();

    function playKeyClick(sound) {
        return () => {
            if(sound.paused){
                sound.play();
            }else{
                sound.currentTime = 0;
            }
        }
    }

    function playKeyKeyboard(sound,key) {
        return (event) => {
            if(!event.repeat){
                console.log(event.code);
                if(event.code === key) {
                    if(sound.paused){
                        sound.play();
                    }else{
                        sound.currentTime = 0;
                    }
                }
            }
        }
    }

    function getPath() {
        let path;
        const fullPath= location.pathname.split('/');
        fullPath.pop();
        path = fullPath.join('/');
        return (path+='/');
    }
    function addKey(typeKey, sound) {
        const key = document.createElement("div");
        const soundElement = document.createElement("audio");
        soundElement.setAttribute("type", "audio/mpeg");
        soundElement.setAttribute("src", sound);
        key.setAttribute("class", `${typeKey}`);
        key.appendChild(soundElement);
        return key;
    };

    // Function that creates all the piano's Keyboard, its html code, apply
    //
    function buildKeyboard() {
        for (const [index, soundToKey] of sounds.entries()) {
            let key;
            if (index < numberWhiteKey) {
                key = addKey(typeKeys.white, soundToKey);
                const audio = key.querySelector("audio");
                const track = audioCtx.createMediaElementSource(audio);
                track.connect(audioCtx.destination);
                const playSound = playKeyClick(audio);
                const playSoundKeyboard = playKeyKeyboard(audio,keys[index]);
                key.addEventListener('click', playSound);
                window.addEventListener('keydown',playSoundKeyboard);
            } else {
                key = addKey(typeKeys.black, soundToKey);
                const audio = key.querySelector("audio");
                const playSound = playKeyClick(audio);
                const playSoundKeyboard = playKeyKeyboard(audio,keys[index]);
                key.addEventListener('click', playSound);
                window.addEventListener('keydown',playSoundKeyboard);
            }
            offDom.appendChild(key);
        }
        keyboard.appendChild(offDom);
    };
};

window.addEventListener('load', appBuildPiano);