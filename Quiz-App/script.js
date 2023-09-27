 const questions = [
    {
        question: "Who is the last Pharaoh of anicient Egypt?",
        answers: [
            { text: "Cleopatra VII", correct: true},
            { text: "Ramses II", correct: false},
            { text: "Tutankhamun", correct: false},
            { text: "Hatshepsut", correct: false},
        ]
    },
    {
        question: "What is the name of the largest moon of Saturn, known for its thick, orange atmosphere and unique hydrocarbon lakes?",
        answers: [
            { text: "Ganymede", correct: false},
            { text: "Europa", correct: false},
            { text: "Titan", correct: true},
            { text: "Triton", correct: false},
        ]
    },
    {
        question: "What programming language, developed by Bjarne Stroustrup in the 1980s, is often used for systems programming and is known for its support of object-oriented programming?",
        answers: [
            { text: "Python", correct: false},
            { text: "Java", correct: false},
            { text: "C++", correct: true},
            { text: "Ruby", correct: false},
        ]
    },
    {
        question: "Who was the first president of the United States?",
        answers: [
            { text: "Thomas Jefferson", correct: false},
            { text: "Benjamin Franklin", correct: false},
            { text: "George Washington", correct: true},
            { text: "John Adams", correct: false},
        ]
    },
    {
        question: "Which artist is known for his painting The Starry Night and is famous for his post-impressionist style?",
        answers: [
            { text: "Salvador Dali", correct: false},
            { text: "Claude Monet", correct: false},
            { text: "Pablo Picasso", correct: false},
            { text: "Vincent van Gogh", correct: true},
        ]
    },
    {
        question: "What is the fundamental particles responsible for carrying the electromagnetic force?",
        answers: [
            { text: "Photon", correct: true},
            { text: "Graviton", correct: false},
            { text: "Neutrino", correct: false},
            { text: "Quark", correct: false},
        ]
    },
    {
        question: "Who was the first Vice President and the second President of India, serving as the President from 1962 to 1967?",
        answers: [
            { text: "Rajendra Prasad", correct: false},
            { text: "Sarvepalli Radhakrishnan", correct: true},
            { text: "Indira Gandhi", correct: false},
            { text: "V.V. Giri", correct: false},
        ]
    },
    {
        question: "In the Mahabharata, during which dice game did Yudhisthira lose his kingdom and brothers to the Kauravas?",
        answers: [
            { text: "Sabha Parva", correct: true},
            { text: "Vana Parva", correct: false},
            { text: "Virata Parva", correct: false},
            { text: "Udyoga Parva", correct: false},
        ]
    },
    {
        question: "Which exoplanet, located about 39 light-years away from Earth, was the first one to be discovered in the habitable zone of its star and is often described as Earth's cousin ?",
        answers: [
            { text: "Proxima Centauri b", correct: false},
            { text: "TRAPPIST-1d", correct: false},
            { text: "Kepler-452b", correct: true},
            { text: "Kepler-186f", correct: false},
        ]
    },
    {
        question: "What is the name of the process by which a massive star collapses under its own gravity and then explodes, releasing an incredible amount of energy?",
        answers: [
            { text: "Redshift", correct: false},
            { text: "Stellar nucleosynthesis", correct: false},
            { text: "Neutronization", correct: false},
            { text: "Supernova", correct: true},
        ]
    },
 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML == "Next";
    showQuestion();
 }

 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click", selectAnswer);
    });
 }


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

 startQuiz();