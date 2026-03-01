// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let shuffledCards = [];
let currentCardIndex = 0;

// ========== DOM ЭЛЕМЕНТЫ ==========
const flashcardElement = document.getElementById('flashcard');
const frontTextElement = document.getElementById('front-text');
const backTextElement = document.getElementById('back-text');
const statusElement = document.getElementById('status');

// ========== ОБНОВЛЕНИЕ КАРТОЧКИ ==========
function updateCard() {
    if (!shuffledCards.length) {
        frontTextElement.textContent = 'Нет карточек';
        backTextElement.textContent = 'Нет карточек';
        statusElement.textContent = '0 из 0';
        return;
    }
    flashcardElement.classList.remove('flipped');
    frontTextElement.textContent = shuffledCards[currentCardIndex].japanese;
    backTextElement.textContent = shuffledCards[currentCardIndex].russian;
    statusElement.textContent = `Карточка ${currentCardIndex + 1} из ${shuffledCards.length}`;
}

// ========== ПЕРЕВОРОТ ==========
function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

// ========== ВПЕРЁД ==========
function nextCard() {
    if (currentCardIndex < shuffledCards.length - 1) {
        currentCardIndex++;
        updateCard();
    } else {
        alert('Вы достигли конца колоды!');
    }
}

// ========== НАЗАД ==========
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}


// ========== ПОКАЗАТЬ ПРОИЗВОЛЬНЫЙ МАССИВ КАРТОЧЕК ==========
function showCustomCards(cardsArray) {
    if (!cardsArray || !cardsArray.length) {
        alert('Нет карточек для показа');
        return;
    }
    // Просто записываем массив в shuffledCards (без перемешивания)
    shuffledCards = cardsArray;   // можно оставить как есть, либо сделать копию: [...cardsArray]
    currentCardIndex = 0;
    updateCard(); // обязательно обновляем карточку
}

// ========== ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ==========
document.addEventListener('DOMContentLoaded', function() {
    const stored = localStorage.getItem('searchResults');
    if (!stored) {
        alert('Нет результатов поиска. Сначала выполните поиск на главной.');
        window.location.href = 'index.html';  // вернуться на главную
        return;
    }

    try {
        const foundCards = JSON.parse(stored);
        showCustomCards(foundCards);
        localStorage.removeItem('searchResults'); // почистили за собой
    } catch (e) {
        console.error('Ошибка загрузки результатов', e);
        alert('Ошибка загрузки результатов');
    }
});