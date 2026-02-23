const questions = [
    {
        question: "Which formula is used to sum values?",
        options: ["=SUM()", "=ADD()", "=TOTAL()", "=PLUS()"],
        answer: 0
    },
    {
        question: "Which function finds average?",
        options: ["=AVG()", "=AVERAGE()", "=MEAN()", "=MID()"],
        answer: 1
    },
    {
        question: "Shortcut to open Find?",
        options: ["Ctrl + F", "Ctrl + H", "Ctrl + G", "Ctrl + S"],
        answer: 0
    }
];

let current = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[current].question;
    let optionsHTML = "";
    
    questions[current].options.forEach((option, index) => {
        optionsHTML += `<button onclick="checkAnswer(${index})">${option}</button>`;
    });

    document.getElementById("options").innerHTML = optionsHTML;
}

function checkAnswer(index) {
    if (index === questions[current].answer) {
        score++;
    }
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText = "Quiz Finished!";
        document.getElementById("options").innerHTML = "";
        document.getElementById("score").innerText = "Your Score: " + score;
    }
}

loadQuestion();
