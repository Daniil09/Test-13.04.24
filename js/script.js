//  Массив с вопросами, вариантами и правильными ответами
let questions = [
    {
        question: "После какого класса вы хотите уйти?",
        options: ["9 класс", "11 класс"],
        correctAnswer: "11 класс"
    },
    {
        question: "Какое вы выбрали направление?",
        options: ["Физ-мат", "Хим-био", "Гуманитарное", "Архитектурное"],
        correctAnswer: "Физ-мат"
    },
    {
        question: "В какой город вы хотите поступить?",
        options: ["Тюмень", "Москва", "Санкт-Петербург"],
        correctAnswer: "Тюмень"
    }
]

let currentQuestion = 0 // Текущий вопрос
let correctAnswers = 0 // Кол-во правильных ответов

// функция для отображения текущего вопроса и вариантов ответов
function displayQuestion() {
    let questionElement = document.getElementById("question"); // Получить блок для размещения вопроса
    // Размещаем вопрос на стрранице
    questionElement.textContent = `Вопрос ${currentQuestion + 1}: ${questions[currentQuestion].question} `;
    let optionsElements = document.getElementById("options"); // Получить блок для размещения кнопок
    optionsElements.innerHTML = " ";// Отчищаем содержимое блока optionsElements

    // Получить массив ответов
    let optionsArray = questions[currentQuestion].options;

    // Создать кнопки с вариантами ответов и привязать к ним функцию перехода к следуйщему опросу
    optionsArray.forEach((option) => {
        let button = document.createElement("button");
        optionsElements.append(button);
        button.textContent = option;
    });

}

displayQuestion();
