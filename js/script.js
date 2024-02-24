
function play() {
    ScreenPlay('home');
    ScreenPlay('finalScore');
    game('playground');
    setElementValue('currentLife', 5);
    setElementValue('current-score', 0);
    continueGame();
}
function gameOver() {
    ScreenPlay('playground');
    game('finalScore');
    const gameScore = getElementValue('current-score');
    setElementValue('game-score', gameScore);
    const CurrentAlphabet = getElementText('currentAlphabet');
    removeBackgroundColor(CurrentAlphabet);

}
// reusable function
function getElementText(elementById) {
    const element = document.getElementById(elementById);
    const text = element.innerText;
    return text;
}
function ScreenPlay(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function game(elementBytId) {
    const elementName = document.getElementById(elementBytId);
    elementName.classList.remove('hidden');
}
function setBackgroundColor(elementBytId) {
    const elementName = document.getElementById(elementBytId);
    elementName.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementBytId) {
    const elementName = document.getElementById(elementBytId);
    elementName.classList.remove('bg-orange-400');
}
function getElementValue(elementById) {
    const elementName = document.getElementById(elementById);
    const elementValueText = elementName.innerText;
    const value = parseInt(elementValueText);
    return value;

}
function setElementValue(elementById, value) {
    const elementName = document.getElementById(elementById);
    elementName.innerText = value;
}
document.addEventListener
function continueGame() {
    const alphabet = getrandomAlphabet();
    const getcurrentAlphabet = document.getElementById('currentAlphabet');
    getcurrentAlphabet.innerText = alphabet;
    setBackgroundColor(alphabet);
}
function getrandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrdt';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * alphabets.length;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;
}
function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    if(playerPressed === 'Escape'){
        gameOver();
    }
    const currentAlphabetElement = document.getElementById('currentAlphabet');
    const currentalphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentalphabet.toLowerCase();
    if (playerPressed === expectedAlphabet) {
        const currentScore = getElementValue('current-score');
        const updateScore = currentScore + 1;
        setElementValue('current-score', updateScore);
        // const currentScore = document.getElementById('current-score');
        // const currentText = currentScore.innerText;
        // const score = parseInt(currentText);
        // const newScore = score + 1;
        // currentScore.innerText = newScore;
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    } else {
        const lifeScore = getElementValue('currentLife');
        const updateScore = lifeScore - 1;
        setElementValue('currentLife', updateScore);
        //    const currentLifeNumber = document.getElementById('currentLife');
        //    const currentLifeText = currentLifeNumber.innerText;
        //    const currentLifeLeft = parseInt(currentLifeText);
        //    const howmany = currentLifeLeft -1;
        //    currentLifeNumber.innerText = howmany;
        if (updateScore === 0) {
            gameOver();
        }
    }

}
document.addEventListener('keyup', handleKeyboardButtonPress);
