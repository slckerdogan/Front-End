let QUESTIONS=[];
let activeQuestionIndex=0;
let questionsCount=0;
const choices=["A","B","C","D"];
let selectedAnswer;
let totalCorrectChoice=0;
const quizModalEl= document.querySelector(".quizModal");

const getQuestions = () =>{
    fetch("quiz.json")
        .then(response => {
            return response.json();
        })

        .then(questions =>{
            QUESTIONS=questions;
            questionsCount=QUESTIONS.length;
        });
}

const updateQuizOrder=()=>{
    let quizOrderEl=document.querySelector("#quizOrder");
    quizOrderEl.innerHTML= (activeQuestionIndex+1) + "/" + questionsCount;

    let quizProgressEl=document.querySelector(".quizProgress");
    quizProgressEl.style.width = (activeQuestionIndex+1) / questionsCount * 100 + "%";

    if(activeQuestionIndex==questionsCount-1){
        document.querySelector(".quizBtn").innerHTML="COMPLETE";
    }

    updateQuestion();
}

const createQuestionAnswers=(activeQuestion)=>{
    let answerHTML="";
    activeQuestion.answers.forEach((answer,index) => {
        answerHTML+=`
        <div class="answersArea" data-id="${answer.id}" onclick="selectChoice(this)">
            <div class="choice">${choices[index]}</div>
            <div class="text">${answer.text}</div>
        </div>
        `
    });
    return answerHTML;    
}

const updateQuestion=()=>{
    const activeQuestion=QUESTIONS[activeQuestionIndex];
    let questionHTML=`
    <h2> ${activeQuestionIndex+1} - ${activeQuestion.text} </h2>
    <div class="answers">${createQuestionAnswers(activeQuestion)}</div>
    `;

    const questionContainerEl=document.querySelector("#questionContainer");
    questionContainerEl.innerHTML=questionHTML;
};


const selectChoice= (el)  =>{
    const questionAnswersEls=Array.from(document.querySelectorAll(".answersArea"));

    questionAnswersEls.find(el=>{
      if(el.classList.contains("selected")) el.classList.remove("selected");
    });
    selectedAnswer=el.dataset.id;
    el.classList.add("selected");
};

const checkAnswer = () => {
    const selectedAnswerObj = QUESTIONS[activeQuestionIndex-1].answers.find(
        (a) => a.id==selectedAnswer
    ); 
    console.log("sfdgfhgj" + selectedAnswer);
    console.log("qwert" + selectedAnswerObj.isCorrect);
    if(selectedAnswerObj.isCorrect) totalCorrectChoice++;
    selectedAnswer = null;
};

const nextQuestion =() =>{
    if(selectedAnswer){
        if(activeQuestionIndex<questionsCount-1){
            activeQuestionIndex++;
            checkAnswer();
            updateQuizOrder();
        }
        else{
            document.getElementById("totalCorrectChoice").innerHTML=totalCorrectChoice;
            quizModalEl.classList.add("show");
        }
        
    }
    else{
        alert("Lütfen bir seçim yapiniz");
    }
};

const closeModal = () =>{
    quizModalEl.classList.remove("show");
    document.querySelector(".quizBtn").disabled=true;
    document.querySelector(".quizBtn").style.backgroundColor="red";
    document.querySelector(".quizBtn").style.cursor="default";
}

const repeatQuiz = () =>{
    activeQuestionIndex=0;
    selectedAnswer=undefined;
    totalCorrectChoice=0;
    updateQuizOrder();
    closeModal();
    document.querySelector(".quizBtn").disabled=false;
    document.querySelector(".quizBtn").style.backgroundColor="#99b3ca";
    document.querySelector(".quizBtn").style.cursor="pointer";
    document.querySelector(".quizBtn").innerHTML="NEXT";
    
    
    
}

getQuestions();
setTimeout(()=>{
    updateQuizOrder();
},100);
