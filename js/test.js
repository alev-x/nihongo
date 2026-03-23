// test.js

let testWords = [];
let shuffledCards = [];
let currentCardIndex = 0;

const flashcardElement = document.getElementById('flashcard');
const frontTextElement = document.getElementById('front-text');
const backTextElement = document.getElementById('back-text');
const statusElement = document.getElementById('status');

// Перемешивание
function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// Обновление карточки (учитывает stateBtn)
function updateCard() {
    if (!shuffledCards.length) {
        frontTextElement.textContent = 'Нет слов в тесте';
        backTextElement.textContent = 'Добавьте слова через карточки';
        statusElement.textContent = '0 из 0';
        return;
    }

    flashcardElement.classList.remove('flipped');
    
    // Проверяем stateBtn (глобальная переменная из change.js)
    if (typeof stateBtn !== 'undefined' && stateBtn) {
        // Японско-русский режим
        frontTextElement.textContent = shuffledCards[currentCardIndex].japanese;
        backTextElement.textContent = shuffledCards[currentCardIndex].russian;
    } else {
        // Русско-японский режим
        frontTextElement.textContent = shuffledCards[currentCardIndex].russian;
        backTextElement.textContent = shuffledCards[currentCardIndex].japanese;
    }
    
    statusElement.textContent = `Слово ${currentCardIndex + 1} из ${shuffledCards.length}`;
}

function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < shuffledCards.length - 1) {
        currentCardIndex++;
        updateCard();
    } else {
        alert('Вы прошли все слова в тесте!');
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

function reshuffleDeck() {
    if (testWords.length === 0) {
        alert('Нет слов для перемешивания');
        return;
    }
    shuffledCards = shuffleArray(testWords);
    currentCardIndex = 0;
    updateCard();
}

// Удалить текущее слово из теста
function removeFromTest() {
    if (!shuffledCards.length) return;
    const currentWord = shuffledCards[currentCardIndex];
    
    testWords = testWords.filter(word => word.japanese !== currentWord.japanese);
    localStorage.setItem('testWords', JSON.stringify(testWords));
    
    if (testWords.length === 0) {
        shuffledCards = [];
        updateCard();
        alert('Тест пуст. Добавьте новые слова через карточки.');
        return;
    }
    
    shuffledCards = shuffleArray(testWords);
    if (currentCardIndex >= shuffledCards.length) {
        currentCardIndex = shuffledCards.length - 1;
    }
    updateCard();
}

// Очистить весь тест
function clearTest() {
    if (confirm('Удалить все слова из теста?')) {
        localStorage.removeItem('testWords');
        testWords = [];
        shuffledCards = [];
        currentCardIndex = 0;
        updateCard();
        alert('Тест очищен');
    }
}

// Инициализация при загрузке
window.onload = function() {
    testWords = JSON.parse(localStorage.getItem('testWords')) || [];
    if (testWords.length === 0) {
        updateCard();
        return;
    }
    shuffledCards = shuffleArray(testWords);
    currentCardIndex = 0;
    updateCard();
};