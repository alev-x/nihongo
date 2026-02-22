// Ищем кнопки на странице
const tabsBtns = document.querySelectorAll(".tabs__button");
let stateBtn = true;
//Функция, которая будет убирать класс active у кнопки
function changeStateBtn() {
    tabsBtns.forEach(btn => btn.classList.toggle("active"));
}

//Перебор кнопок с навешиваниям на них слушателя событий
tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
    changeStateBtn();
    
    if (stateBtn) {
        stateBtn = false;
        console.log(stateBtn);
    } else {
        stateBtn = true;
        console.log(stateBtn);
    }
    
    updateCard();
}));
