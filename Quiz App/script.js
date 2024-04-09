const question = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true },
            { text: "argentina", correct: false },
            { text: "Delhi", correct: false },
            { text: "Mumbai", correct: false }
        ]
    },
    {
        question: "Which country has a border with all the other countries in the world?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Australia", correct: false },
            { text: "Brazil", correct: false },
            { text: "Canada", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add('correct');
        score++;
        
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(answerButtonsElement.children).forEach((button) => {
        if(button.dataset.correct==="true") {
            button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextButton.style.display='block'   
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<question.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score}/${question.length}`;
    nextButton.innerHTML="Restart";
    nextButton.style.display='block';
}
nextButton.addEventListener( "click" , ()=>{
    if(currentQuestionIndex<question.length){
        handleNextButton();
        }else{
            startQuiz();
        }
}) 
startQuiz();
