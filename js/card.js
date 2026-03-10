// --------------------------------------------------------------
// 0. ПЕРЕМЕННЫЕ (объявляем let, чтобы можно было перезаписать)
// --------------------------------------------------------------
let cardsToRender = [];          // исходный массив карточек (будет заполнен позже)
let shuffledCards = [];          // перемешанная колода
let currentCardIndex = 0;        // текущий индекс

// --------------------------------------------------------------
// 1. ОПРЕДЕЛЯЕМ РЕЖИМ: кандзи или обычный
// --------------------------------------------------------------
const urlParams = new URLSearchParams(window.location.search);
const kanji = urlParams.get('kanji');
const reading = urlParams.get('reading');

if (kanji && reading) {
    // -------------------- РЕЖИМ КАНДЗИ --------------------
    // Ищем иероглиф в kanjiData (этот файл должен быть подключен)
    const kanjiObj = kanjiData.find(item => item.kanji === kanji);
    if (!kanjiObj) {
        alert('Иероглиф не найден в базе');
        cardsToRender = [];
    } else {
        // Берём нужный массив (он или кун)
        cardsToRender = (reading === 'on') ? kanjiObj.on : kanjiObj.kun;
        if (!cardsToRender || cardsToRender.length === 0) {
            alert('Нет карточек для этого чтения');
            cardsToRender = [];
        }
    }

    // Настраиваем навигационные ссылки (если они есть на странице)
    const navLink1 = document.getElementById('navLink1');
    const navLink2 = document.getElementById('navLink2');
    if (navLink1) {
        navLink1.href = `./kanji-choice.html?kanji=${encodeURIComponent(kanji)}`;
        navLink1.textContent = 'чтения';
    }
    if (navLink2) {
        navLink2.href = './../alphabet/kanji.html';  // путь к странице со списком иероглифов
        navLink2.textContent = 'иероглифы';
    }
} else {
    // -------------------- ОБЫЧНЫЙ РЕЖИМ (хирагана/катакана) --------------------
    // Получаем текущую букву из заголовка
    const titleElement = document.getElementById('pageTitle');
    if (!titleElement) {
        console.error('Элемент #pageTitle не найден');
        cardsToRender = [];
    } else {
        const textfromTitle = titleElement.textContent;
        const currentLetter = textfromTitle[0]; // например 'あ'
        // Используем существующую функцию для получения карточек по букве
        cardsToRender = getCardsByLetter(currentLetter) || [];
    }
}

console.log('Исходные карточки:', cardsToRender);

// --------------------------------------------------------------
// 2. ФУНКЦИЯ ПОЛУЧЕНИЯ КАРТОЧЕК ПО БУКВЕ (для обычного режима)
// --------------------------------------------------------------
function getCardsByLetter(letter) {
    // ВНИМАНИЕ: если заголовок на русском, замени 'あ' на 'А' (русскую)
    const alphabetIndex = letter.toUpperCase().charCodeAt(0) - 'あ'.charCodeAt(0);
    console.log('Индекс буквы:', alphabetIndex);
    // Предполагается, что allData объявлен глобально (в allData.js)
    return allData[alphabetIndex] || [];
}

// --------------------------------------------------------------
// 3. ФУНКЦИЯ ПЕРЕМЕШИВАНИЯ (алгоритм Фишера–Йетса)
// --------------------------------------------------------------
function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// --------------------------------------------------------------
// 4. УПРАВЛЕНИЕ КОЛОДОЙ
// --------------------------------------------------------------
function reshuffleDeck() {
    shuffledCards = shuffleArray(cardsToRender);
    currentCardIndex = 0;
    updateCard();
    console.log('Колода перемешана:', shuffledCards);
}

// --------------------------------------------------------------
// 5. РАБОТА С DOM
// --------------------------------------------------------------
const flashcardElement = document.getElementById('flashcard');
const frontTextElement = document.getElementById('front-text');
const backTextElement = document.getElementById('back-text');
const statusElement = document.getElementById('status');

function updateCard() {
    if (!shuffledCards.length) {
        frontTextElement.textContent = 'Нет карточек';
        backTextElement.textContent = 'Нет карточек';
        statusElement.textContent = '0 из 0';
        return;
    }

    flashcardElement.classList.remove('flipped');

    // Переменная stateBtn должна быть определена в change.js (глобально)
    if (stateBtn) {
        // Японско-русский
        frontTextElement.textContent = shuffledCards[currentCardIndex].japanese;
        backTextElement.textContent = shuffledCards[currentCardIndex].russian;
    } else {
        // Русско-японский
        frontTextElement.textContent = shuffledCards[currentCardIndex].russian;
        backTextElement.textContent = shuffledCards[currentCardIndex].japanese;
    }

    statusElement.textContent = `Карточка ${currentCardIndex + 1} из ${shuffledCards.length}`;
}

// Переворот карточки
function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

// Вперёд
function nextCard() {
    if (currentCardIndex < shuffledCards.length - 1) {
        currentCardIndex++;
        updateCard();
    } else {
        alert('Вы достигли конца колоды!');
    }
}

// Назад
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// --------------------------------------------------------------
// 6. СТАРТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// --------------------------------------------------------------
window.onload = function() {
    reshuffleDeck();
    console.log('stateBtn:', typeof stateBtn !== 'undefined' ? stateBtn : 'не определена');
};