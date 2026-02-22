
// --------------------------------------------------------------
// 1. ИСХОДНЫЙ МАССИВ ДАННЫХ (твой, без изменений)
// --------------------------------------------------------------



// --------------------------------------------------------------
// 2. ОПРЕДЕЛЯЕМ ТЕКУЩУЮ БУКВУ ИЗ ЗАГОЛОВКА (твой код)
// --------------------------------------------------------------
const titleElement = document.getElementById('pageTitle');
const textfromTitle = titleElement.textContent;
const currentLetter = textfromTitle[0]; // например 'А' (или 'A' — зависит от заголовка)

// --------------------------------------------------------------
// 3. ПОЛУЧАЕМ МАССИВ КАРТОЧЕК ДЛЯ ЭТОЙ БУКВЫ (твоя функция)
// --------------------------------------------------------------
function getCardsByLetter(letter) {
    
    // ВНИМАНИЕ: если у тебя русская буква, замени 'A' на 'А' (русскую)
    const alphabetIndex = letter.toUpperCase().charCodeAt(0) - 'あ'.charCodeAt(0);
    console.log(alphabetIndex)
    return allData[alphabetIndex] || [];
}

const cardsToRender = getCardsByLetter(currentLetter); // оригинальный массив (не трогаем)
console.log('Оригинальные карточки:', cardsToRender);

// --------------------------------------------------------------
// 4. НОВОЕ: ФУНКЦИЯ ПЕРЕМЕШИВАНИЯ (алгоритм Фишера–Йетса)
// --------------------------------------------------------------
function shuffleArray(arr) {
    const copy = [...arr]; // работаем с копией, оригинал не меняем
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// --------------------------------------------------------------
// 5. НОВОЕ: ПЕРЕМЕШАННАЯ КОЛОДА И УПРАВЛЕНИЕ ЕЮ
// --------------------------------------------------------------
let shuffledCards = [];          // сюда сложим перемешанные карточки
let currentCardIndex = 0;       // твой индекс – он теперь относится к shuffledCards

// Создаём новую перемешанную колоду и сбрасываем индекс
function reshuffleDeck() {
    shuffledCards = shuffleArray(cardsToRender);
    currentCardIndex = 0;
    updateCard();               // сразу показываем первую карточку
    console.log('Колода перемешана:', shuffledCards);
}

// --------------------------------------------------------------
// 6. РАБОТА С DOM (всё твоё, только заменён cardsToRender на shuffledCards)
// --------------------------------------------------------------
const flashcardElement = document.getElementById('flashcard');
const frontTextElement = document.getElementById('front-text');
const backTextElement = document.getElementById('back-text');
const statusElement = document.getElementById('status');

// Функция отображения текущей карточки (берёт данные из shuffledCards)
function updateCard() {
    if (!shuffledCards.length) {
        // если колода пуста (например, нет карточек для буквы)
        frontTextElement.textContent = 'Нет карточек';
        backTextElement.textContent = 'Нет карточек';
        statusElement.textContent = '0 из 0';
        return;
    }

    flashcardElement.classList.remove('flipped');
    // проверка условия: 
    // если нажата кнопка японско-русский: лицевая сторона япон., изнаночная рус; 
    // если же нажата кнопка русско-японский: лицевая сторона рус., изнаночная япон; 
    if (stateBtn) {
        frontTextElement.textContent = shuffledCards[currentCardIndex].japanese;
        backTextElement.textContent = shuffledCards[currentCardIndex].russian;
    } else {
        frontTextElement.textContent = shuffledCards[currentCardIndex].russian;
        backTextElement.textContent = shuffledCards[currentCardIndex].japanese;
    }
    statusElement.textContent = `Карточка ${currentCardIndex + 1} из ${shuffledCards.length}`;
}

// Переворот карточки
function flipCard() {
    flashcardElement.classList.toggle('flipped');
}

// Вперёд (без повторов, пока не кончится колода)
function nextCard() {
    if (currentCardIndex < shuffledCards.length - 1) {
        currentCardIndex++;
        updateCard();
    } else {
       alert('Вы достигли конца колоды!'); // здесь можно добавить авто‑перемешивание
    //    reshuffleDeck(); // раскомментируй, если хочешь автоматически начинать заново
    }
}

// Назад (просто листаем уже перемешанную колоду)
function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
    }
}

// --------------------------------------------------------------
// 7. СТАРТ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// --------------------------------------------------------------
window.onload = function() {
    reshuffleDeck(); // перемешиваем и показываем первую случайную карточку
    console.log('changeStateBtn', stateBtn);
};




