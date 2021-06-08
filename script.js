const typingDiv = document.getElementById('typing');
const statsDiv = document.getElementById('stats');
const startGameBtn = document.getElementById("start-game");

const pharagraphs = [
    `So for once in my life let me get what I want. Lord knows it would be the first time.`,
    `I am the son and the heir, oh, of nothing in particular.`,
    `And if a double decker bus crashes into us, to die by your side is such a heavenly way to die.`,
  ];
  

  const startGame = () => {
    //remove button when game starts
    startGameBtn.classList.add("hidden");
    typingDiv.innerHTML = "";
    statsDiv.innerHTML = "";
  
    const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];
  
    const characters = text.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      typingDiv.appendChild(span);
      return span;
    });

    let cursorIndex = 0;
    let cursorCharacter = characters [cursorIndex];
    cursorCharacter.classList.add('cursor');

    let startTime = null;

    const keydown = ({ key }) => {
        if (!startTime) {
          startTime = new Date();
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
        // game ended
        const endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.split(" ").length;
        const wps = numberOfWords / seconds;
        const wpm = wps * 60.0;
        document.getElementById("stats").innerText = `wpm = ${parseInt(wpm)}`;
        document.removeEventListener("keydown", keydown);
        //display button when game ends
        startGameBtn.classList.remove("hidden");
        return;
      }
  
      cursorCharacter.classList.add("cursor");
    };
  
    document.addEventListener("keydown", keydown);
  };