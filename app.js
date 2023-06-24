// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
const speakButton = document.getElementById('speakButton');
const nounButton = document.getElementById('nounButton');
const verbButton = document.getElementById('verbButton');
const adjectiveButton = document.getElementById('adjectiveButton');
const nounButton2 = document.getElementById('nounButton2');
const placeButton = document.getElementById('placeButton');
const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const storyContainer = document.getElementById('story');

let nouns = ['Dog', 'Cat', 'Bird', 'Tree', 'Flower'];
let verbs = ['Runs', 'Jumps', 'Flies', 'Eats', 'Sleeps'];
let adjectives = ['Big', 'Small', 'Happy', 'Sad', 'Funny'];
let places = ['Park', 'Beach', 'Lake', 'Forest', 'City'];
let adverbs = ['Quickly', 'Slowly', 'Daily', 'Never', 'Rare'];

let story = [];

function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory() {
    story = [
        getRandomWord(nouns),
        getRandomWord(verbs),
        getRandomWord(adjectives),
        getRandomWord(places),
        getRandomWord(adverbs)
    ];
    displayStory();
}

function displayStory() {
    storyContainer.textContent = story.join(' ');
}

function speakNow(string) {
    const utterThis = new SpeechSynthesisUtterance(string);
    synth.speak(utterThis);
}

speakButton.addEventListener('click', function () {
    speakNow(storyContainer.textContent);
});

function updateWord(button, wordList) {
    button.addEventListener('click', function () {
        const randomWord = getRandomWord(wordList);
        storyContainer.textContent = randomWord;
    });
}

updateWord(nounButton, nouns);
updateWord(verbButton, verbs);
updateWord(adjectiveButton, adjectives);
updateWord(nounButton2, places);
updateWord(placeButton, adverbs);

generateButton.addEventListener('click', generateStory);

resetButton.addEventListener('click', function () {
    story = [];
    storyContainer.textContent = '';
});
