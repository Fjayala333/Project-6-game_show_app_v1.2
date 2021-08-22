const startGame = document.querySelector('.btn_reset');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const lives = document.querySelectorAll('.tries');
const overlay = document.getElementById('overlay');
let missed = 0;

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