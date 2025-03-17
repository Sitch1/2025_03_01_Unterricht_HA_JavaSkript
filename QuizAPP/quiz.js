let score = 0;
let currentQuestionIndex = 0;

let questions = [
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["Hannover", "Berlin", "Hamburg", "München"],
        correctAnswer: 1
    },
    {
        question: "Welche Farbe hat eine Zitrone?",
        answers: ["Rot", "Blau", "Grün", "Gelb"],
        correctAnswer: 3
    }
];






function displayQuestion() {
    let question = questions[currentQuestionIndex];

    document.getElementById("question").textContent = question.question;

    let answersDiv = document.getElementById("answers");

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement("button")
        answerButton.textContent = answer;
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (userAnswer == correctAnswer) {
        score += 1;
    }
}