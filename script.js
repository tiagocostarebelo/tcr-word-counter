let userInput;
const submitBtn = document.querySelector('.user__input-submit');

submitBtn.addEventListener('click', counter);

function counter() {    
    const userText = document.getElementById('user-text').value;
    userInput = userText;
    wordCounter(userInput);  
    charCounter(userInput);    
}

const wordCounter = (input) => {
    //split the array
    const words = userInput.split(' ');
    //count words
    const totalWords = words.length;
    const totalWordsDisplay = document.querySelector('.counter__display-words--total');
    totalWordsDisplay.innerHTML = totalWords;
}

const charCounter = (input) => {
    const regex = /\S/g;
    const totalChars = input.split(regex).length - 1;
    const totalCharsDisplay = document.querySelector('.counter__display-characters--total');
    totalCharsDisplay.innerHTML = totalChars;
}




