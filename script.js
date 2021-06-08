
const typingDiv = document.getElementById('typing');
const statsDiv = document.getElementById('stats');
const startGameBtn = document.getElementById("start-game");

const pharagraphs = [
    `So for once in my life let me get what I want. Lord knows it would be the first time.`,
    `I am the son and the heir of nothing in particular.`,
    `And if a double decker bus crashes into us, to die by your side is such a heavenly way to die.`,
    `In my life, why do I smile at people who I’d much rather kick in the eye?`,
    `I was looking for a job, and then I found a job and heaven knows I'm miserable now.`,
    `I want to live and I want to love. I want to catch something that I might be ashamed of.`,
    `With loves, and hates and passions just like mine. They were born, and then they lived, and then they died. It seems so unfair, I want to cry.`,
    `What she asked of me at the end of the day Caligula would have blushed.`,
    `Love is natural and real but not for such as you and I, my love`,
    `Belligerent ghouls run Manchester schools. Spineless swines, cemented minds.`,
    `A shoeless child on a swing reminds you of your own again.`,
    `I decree today that life is simply taking and not giving. England is mine, it owes me a living`,
    `Last night I dreamt that somebody loved me. No hope but no harm, just another false alarm.`,
    `You shut your mouth. How can you say I go about things the wrong way?`,
    `I would go out tonight, but I haven't got a stitch to wear. This man said, "It's gruesome that someone so handsome should care".`,
    `Driving in your car I never, never want to go home. Because I haven't got one, anymore.`,
    `There were times when I could have strangled her. But you know, I would hate anything to happen to her.`,
    `I am the son and the heir of a shyness that is criminally vulgar. I am the son and heir of nothing in particular.`,
    `I wish I could laugh but that joke isn't funny more, it's too close to home and it's too near the bone more than you'll ever know.`,
    `I'm not sure what happiness means, but I look in your eyes and I know that it isn't there.`,


  ];
  

  const startGame = () => {
    //remove button when game starts
    startGameBtn.classList.add("hidden");
    typingDiv.innerHTML = "";
    statsDiv.innerHTML = "";
    //get random paragraph from array
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
        document.getElementById("stats").innerText = `${parseInt(wpm)} words per minute.`;
        document.getElementById("stats").style.opacity = 1;
        document.removeEventListener("keydown", keydown);
        //display button when game ends
        startGameBtn.classList.remove("hidden");
        return;
      }
  
      cursorCharacter.classList.add("cursor");
    };
  
    document.addEventListener("keydown", keydown);
  };