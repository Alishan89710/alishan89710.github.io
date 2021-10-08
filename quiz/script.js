const quizWork = [{
        Question: "Q1 :  An HTML document can contain _____ ?",
        A: "Attributes",
        B: "Tags",
        C: "Raw text",
        D: "All the answers are",
        ans: "ans3"
    },
    {
        Question: " Q2:  page designed in HTML is called _____?",

        A: "Application",

        B: "Cover page",

        C: "Front - end",

        D: "Web Page",

        ans: "ans4"
    }

    ,

    {
        Question: "Q3: An HTML document is saved with the ____ extension?",
        A: "htl",

        B: "html",

        C: "hml",
        D: "htnl",

        ans: "ans3"
    },
    {
        Question: "Q4. The HTML document contains a root tag called ____?",
        A: "HEAD",

        B: "Title",

        C: "Body",

        D: "HTML",
        ans: "ans3"
    }

    , {
        Question: "Q5. If we want to place text around an image, which CSS property should we use ?",
        A: "push"

        ,
        B: "float"

        ,
        C: "align"

        ,
        D: "wrap",
        ans: "ans4"
    }
];



const question = document.querySelector('.question')
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showsCore')


let questionCount = 0;
let score = 0;
const onload = () => {
    let questionList = quizWork[questionCount]
    question.innerText = questionList.Question;
    option1.innerText = questionList.A;
    option2.innerText = questionList.B;
    option3.innerText = questionList.C;
    option4.innerText = questionList.D;


};
onload();
const getAnswerChecked = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}
const herLoad = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}
submit.addEventListener('click', () => {

    answerChecked = getAnswerChecked();
    console.log(answerChecked);
    if (answerChecked === quizWork[questionCount].ans) {
        score++;

    }
    questionCount++;
    herLoad();
    if (questionCount < quizWork.length) {
        onload();
    } else {
        showScore.innerHTML = `<h2> your score: ${score} / ${quizWork.length}&#127942; </h2>
        <button class="btn" onclick="location.reload();">Play agin</button>
        `
        showScore.classList.remove('scoreArea')


    }
})