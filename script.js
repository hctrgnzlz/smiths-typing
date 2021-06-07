const typingDiv = document.getElementById('typing');

const text = 'You shut your mouth. How can you say I go about things the wrong way?'

const characters = text.split('').map((char) => {

    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span
});

let cursorIndex = 0;
let cursorCharacter = characters [0];
cursorCharacter.classList.add('cursor');

let startTime = null;
let endTime = null;

const keyListener = document.addEventListener('keydown', ({key}) => {
    console.log (key);
    if (!startTime) {
        startTime = new Date ();
    }
    
    if (key === cursorCharacter.innerText) {
        //correct key is typed
        cursorCharacter.classList.remove('cursor');
        //add class is correct key typed
        cursorCharacter.classList.add('correct');
        //increment cursorIndex to move on to next letter
        cursorCharacter = characters[++cursorIndex];
        //add cursor class again to keep track of new letter
    }
    if (cursorIndex >= characters.length) {
        const endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.split(" ").length;
        const wps = numberOfWords / seconds;
        const wpm = wps * 60.0;
        //display words/characters per minute.
        document.getElementById("stats").innerText = `wpm = ${parseInt(wpm)}`;
        document.removeEventListener('keydown', keyListener);
        return;
    }
    cursorCharacter.classList.add('cursor');

});