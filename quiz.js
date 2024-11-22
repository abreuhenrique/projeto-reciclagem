const questions = [
  {
    question: "O que é lixo eletrônico?",
    options: [
      "Apenas baterias descartadas",
      "Equipamentos eletrônicos quebrados ou obsoletos",
      "Materiais plásticos de uso comum",
      "Comida estragada"
    ],
    correctAnswer: 1
  },
  {
    question: "Por que é importante reciclar o lixo eletrônico?",
    options: [
      "Porque ele ocupa muito espaço nos aterros sanitários",
      "Porque os componentes eletrônicos podem ser reciclados e reutilizados",
      "Porque os eletrônicos são perigosos para a saúde e para o meio ambiente",
      "Todas as alternativas acima"
    ],
    correctAnswer: 3
  },
  {
    question: "Quais materiais podem ser recuperados de um lixo eletrônico?",
    options: [
      "Metais como ouro, cobre e prata",
      "Plásticos e vidro",
      "Placas de circuito impresso",
      "Todos os itens acima"
    ],
    correctAnswer: 3
  },
  {
    question: "Onde deve ser descartado corretamente o lixo eletrônico?",
    options: [
      "Em qualquer lixeira comum",
      "Em pontos de coleta específicos para eletrônicos",
      "Em lixeiras de recicláveis",
      "No lixo orgânico"
    ],
    correctAnswer: 1
  },
  {
    question: "Quais problemas podem ocorrer se o lixo eletrônico for descartado de maneira inadequada?",
    options: [
      "Contaminação do solo e da água com substâncias tóxicas",
      "Aumento da poluição do ar",
      "Riscos à saúde humana devido à exposição a metais pesados",
      "Todas as alternativas acima"
    ],
    correctAnswer: 3
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
    document.getElementById("score").textContent = `${scorePercentage}`;
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
