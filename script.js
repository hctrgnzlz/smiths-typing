const typingDiv = document.getElementById('typing');

const text = 'I am the son and the heir of a shyness that is criminally vulgar. I am the son and heir of nothing in particular'

const characters = text.split('').map((char) => {

    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span
});

let cursorIndex = 0;
let cursorCharacter = characters [0];
cursorCharacter.classList.add('cursor');


document.addEventListener('keydown', ({key}) => {
    console.log (key);
    if (key === cursorCharacter.innerText) {
        //correct key is typed
        cursorCharacter.classList.remove('cursor');
        //add class is correct key typed
        cursorCharacter.classList.add('correct');
        //increment cursorIndex to move on to next letter
        cursorCharacter = characters[++cursorIndex];
        //add cursor class again to keep track of new letter
        cursorCharacter.classList.add('cursor');
    }
});