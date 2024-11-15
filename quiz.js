const questions = [
    {
        question: "Em quais desses lugares abaixo posso descartar uma bateria velha?",
        options: ["Lixo comum", "Lixo de reciclagem eletrônica", "Lixo de casa", "Maranhão"],
        answer: 1
    },
    {
        question: "Quais desses países mais reciclam lixo eletrônico?",
        options: ["Estados Unidos", "Inglaterra", "Estônia", "Brasil"],
        answer: 2
    },
    {
        question: "Qual é o maior predador de felinos?",
        options: ["Chita", "Gavião", "Cavalo", "Coelho"],
        answer: 0
    },
    {
        question: "Qual é o menor país do mundo?",
        options: ["Mônaco", "Malta", "Vaticano", "San Marino"],
        answer: 2
    },
    {
        question: "Quantos continentes existem no mundo?",
        options: ["5", "6", "7", "8"],
        answer: 2
    },
    {
        question: "Qual é o elemento químico representado pelo símbolo 'O'?",
        options: ["Ouro", "Oxigênio", "Ósmio", "Osso"],
        answer: 1
    },
    {
        question: "Qual é o maior oceano do mundo?",
        options: ["Atlântico", "Índico", "Pacífico", "Ártico"],
        answer: 2
    },
    {
        question: "Quantos planetas há no sistema solar?",
        options: ["7", "8", "9", "10"],
        answer: 1
    },
    {
        question: "Qual é o deserto mais seco do mundo?",
        options: ["Saara", "Atacama", "Gobi", "Kalahari"],
        answer: 1
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let userName = "";

function startQuiz() {
    const usernameInput = document.getElementById("username");
    if (usernameInput.value.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }
    userName = usernameInput.value;
    document.getElementById("user-name-display").textContent = userName;
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionData = questions[currentQuestion];
    questionContainer.innerHTML = `
        <h3>${questionData.question}</h3>
        ${questionData.options
            .map((option, index) => `
                <div>
                    <input type="radio" name="option" value="${index}" onclick="checkAnswer(${index})">
                    <label>${option}</label>
                </div>
            `).join("")}
    `;
    document.getElementById("feedback").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer(selectedOption) {
    const questionData = questions[currentQuestion];
    const feedback = document.getElementById("feedback");
    if (selectedOption === questionData.answer) {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = `Incorreto! A resposta correta é: ${questionData.options[questionData.answer]}`;
        feedback.style.color = "red";
    }
    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const scorePercentage = Math.round((score / questions.length) * 100);
    document.getElementById("score").textContent = `${scorePercentage}%`;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("username").value = "";
}
