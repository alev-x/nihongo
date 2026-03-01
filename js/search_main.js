
// ========== ФУНКЦИЯ ПОИСКА ==========
function searchCards(query) {
    if (!query.trim()) return [];

    const lowerQuery = query.toLowerCase();
    let results = [];

    for (let i = 0; i < allData.length; i++) {
        const letterArray = allData[i];
        for (let j = 0; j < letterArray.length; j++) {
            const card = letterArray[j];
            const japaneseText = card.japanese.toLowerCase();
            const russianText = card.russian.toLowerCase();

            if (japaneseText.includes(lowerQuery) || russianText.includes(lowerQuery)) {
                results.push(card);
            }
        }
    }
    return results;
}

// ========== ОБРАБОТЧИК КНОПКИ ==========
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');

if (searchBtn) {
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query === '') {
            alert('Введите слово для поиска');
            return;
        }

        const results = searchCards(query);
        if (results.length === 0) {
            alert('Ничего не найдено 😢');
            return;
        }

        // Сохраняем результаты и переходим на страницу поиска
        localStorage.setItem('searchResults', JSON.stringify(results));
        window.location.href = 'search.html';
    });
}