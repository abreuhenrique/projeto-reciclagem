const questions = [
  {
    question: "O que é considerado lixo eletrônico?",
    options: [
      "Restos de comida",
      "Equipamentos elétricos e eletrônicos descartados",
      "Papel e plástico",
      "Resíduos orgânicos"
    ],
    answer: 1
  },
  {
    question: "Qual é o destino ideal para um celular antigo?",
    options: [
      "Jogar no lixo comum",
      "Entregar em pontos de coleta de lixo eletrônico",
      "Guardar na gaveta",
      "Deixar no parque"
    ],
    answer: 1
  },
  {
    question: "Por que é importante reciclar lixo eletrônico?",
    options: [
      "Para liberar espaço em casa",
      "Porque contêm materiais tóxicos e recicláveis",
      "Porque ocupa muito espaço no lixo",
      "Porque é exigido por lei"
    ],
    answer: 1
  },
  {
    question: "Qual desses materiais pode ser recuperado de lixo eletrônico?",
    options: ["Ouro", "Carvão", "Madeira", "Cimento"],
    answer: 0
  },
  {
    question: "Qual é um dos maiores riscos do descarte inadequado de lixo eletrônico?",
    options: [
      "Contaminação do solo e da água",
      "Geração de calor",
      "Danos às estradas",
      "Poluição sonora"
    ],
    answer: 0
  },
  {
    question: "Onde geralmente encontramos pontos de coleta de lixo eletrônico?",
    options: [
      "Supermercados, lojas de eletrônicos e centros de reciclagem",
      "Farmácias",
      "Estádios de futebol",
      "Padarias"
    ],
    answer: 0
  },
  {
    question: "Qual órgão é responsável por regular a reciclagem de eletrônicos no Brasil?",
    options: [
      "IBAMA",
      "Ministério da Educação",
      "Banco Central",
      "ANEEL"
    ],
    answer: 0
  },
  {
    question: "Qual desses não é considerado lixo eletrônico?",
    options: [
      "Computador antigo",
      "Televisão quebrada",
      "Garrafas plásticas",
      "Celular usado"
    ],
    answer: 2
  },
  {
    question: "Qual componente eletrônico é mais reciclado no mundo?",
    options: [
      "Baterias",
      "Chips de computador",
      "Monitores de tubo",
      "Cabos de energia"
    ],
    answer: 0
  },
  {
    question: "O que significa logística reversa no contexto de lixo eletrônico?",
    options: [
      "Recuperação de produtos após o uso para reciclagem",
      "Envio de lixo para aterros sanitários",
      "Venda de produtos reciclados",
      "Transporte de eletrônicos para outros países"
    ],
    answer: 0
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
      .map(
        (option, index) => `
          <div>
            <input type="radio" name="option" value="${index}" id="option-${index}">
            <label for="option-${index}">${option}</label>
          </div>
        `
      )
      .join("")}
  `;
  document.getElementById("feedback").textContent = "";
  document.getElementById("next-button").style.display = "none";

  const options = document.getElementsByName("option");
  options.forEach(option => {
    option.addEventListener("click", () => checkAnswer(parseInt(option.value)));
  });
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
  document.getElementsByName("option").forEach(option => (option.disabled = true));
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
  document.getElementById("score").textContent = `Você acertou ${scorePercentage}% das perguntas.`;
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
