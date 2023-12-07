const quizData = [

    //Quiz data on Writs
    {
        question: "What is the purpose of the Writ of Habeas Corpus in India?",
        a: "To protect against double jeopardy",
        b: "To ensure the release of a person unlawfully detained",
        c: "To settle property disputes",
        d: "To enforce contractual obligations",
        correct: "b",
    },
    {
        question: "Which Writ is issued by a higher court to a lower court or tribunal to prevent it from exceeding its jurisdiction?",
        a: "Writ of Habeas Corpus",
        b: "Writ of Certiorari",
        c: "Writ of Mandamus",
        d: "Writ of Prohibition",
        correct: "d",
    },
    {
        question: "Which Writ is used to command a public official to perform a duty that they are required to perform as a part of their official duties?",
        a: "Writ of Mandamus",
        b: "Writ of Certiorari",
        c: "Writ of Habeas Corpus",
        d: "Writ of Prohibition",
        correct: "a",
    },
    {
        question: "Which Writ is issued to prevent a person from holding an office that they are not qualified for?",
        a: "Writ of Quo Warranto",
        b: "Writ of Certiorari",
        c: "Writ of Mandamus",
        d: "Writ of Prohibition",
        correct: "a",
    },
    {
        question: "Which Writ is used to review and quash illegal or unconstitutional decisions of administrative bodies?",
        a: "Writ of Certiorari",
        b: "Writ of Habeas Corpus",
        c: "Writ of Mandamus",
        d: "Writ of Quo Warranto",
        correct: "a",
    },
    
];


let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="score">
    <div class="scoremsg">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
        <br>
        <br>
        <hr style="width:100%; text-align:center">
        <br>
        <br>
    </div>
    <div class="scorebutton">
    <a href="../../vriddhi/index.html"><button>Go Back</button></a>
        <button onClick="window.location.reload();" type="button">Re-Try</button>
        <a href="#"><button>Check Ans</button></a>        
    </div>
</div>
    `
}
loadQuestion(index);