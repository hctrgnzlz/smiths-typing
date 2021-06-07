const typingDiv = document.getElementById('typing');
console.log(typingDiv);

const text = 'I am the son and the heir of a shyness that is criminally vulgar. I am the son and heir of nothing in particular'

const characters = text.split('').map((char) => {

    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span
});

const firstCharacter = characters [0];
firstCharacter.classList.add('cursor');


document.addEventListener('keydown', ({key}) => {
    console.log (key);
})