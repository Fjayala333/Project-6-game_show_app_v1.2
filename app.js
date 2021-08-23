const startGame = document.querySelector('.btn__reset');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const lives = document.querySelectorAll('tries');

const phrases = [
    "Let It Go",
    "Show Yourself",
    "You're Welcome",
    "Un Poco Loco",
    "Be Our Guest"
];

// Listens for start game button to be pressed

startGame.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Grabs a random phrase from list of phrases

getRandomPhraseAsArray = arr => {
    const randomNumber = Math.floor(Math.random() * arr.length);
    let phraseArray = arr[randomNumber].split('');
    return phraseArray;
};
getRandomPhraseAsArray(phrases);

// add letters of a string to display
const addPhraseToDisplay = arr => {
   
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];

        if (li.textContent === ' ') {
            li.className = 'space';
        } else {
            li.className = 'letter';
        }
    const lettering = document.querySelector('ul');
    lettering.appendChild(li);
}
    
}
let phraseArray = getRandomPhraseAsArray(phrases);

addPhraseToDisplay(phraseArray);

// checks if a letter is in the phrase
const checkLetter = button => {
    let matched = null;

   for (i = 0; i < letters.length; i++) {
       if (button === letters[i].textContent.toLowerCase()) {
            letters[i].classList.add('show')
            matched = true;
        }
 }
 return matched;
};

// listens for onscreen keyboard to be clicked
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
let missed = 0;


keyboard.addEventListener('click', (e) => {
    if ( e.target.tagName === "BUTTON" ) {
        e.target.className = 'chosen' ;
        e.target.disabled = true;
        const match = checkLetter(e.target.textContent.toLowerCase());
        if (match === null) {
            document.querySelectorAll('img')[missed].src = "images/lostHeart.png";
            missed++;
        }
        checkWin();
    }
});


// checks if game was won or lost
const checkWin = () => {
    const lettering = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    const overlay = document.getElementById('overlay');


    if (lettering.length === show.length) {
        startGame.classList.replace('start', 'win');
        overlay.style = 'display';
        startGame.display = 'flex';
        document.querySelector('h2').innerHTML = 'You Win!';
        startGame.style.display = 'none';
    }

    if (missed === 5) {
        startGame.classList.replace('start', 'lose')
        overlay.style = 'display';
        startGame.display = 'flex';
        document.querySelector('h2').innerHTML = 'You Lose!';
        startGame.style.display = 'none';
    }
}


