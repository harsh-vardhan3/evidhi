const quizData = [
    

    //Quiz data general 1
    {
        question: "Which part of the Constitution of India deals with Directive Principles of State Policy?",
        a: "Part II",
        b: "Part IV",
        c: "Part VI",
        d: "Part IX",
        correct: "b",
    },
    {
        question: "What is the tenure of a Member of Parliament in the Lok Sabha?",
        a: "3 years",
        b: "4 years",
        c: "5 years",
        d: "6 years",
        correct: "c",
    },
    {
        question: "What is the retirement age for judges of the Supreme Court of India?",
        a: "62 years",
        b: "65 years",
        c: "68 years",
        d: "There is no fixed retirement age",
        correct: "b",
    },
    {
        question: "Which Fundamental Right is also known as the 'heart and soul of the Constitution'?",
        a: "Right to Equality",
        b: "Right to Freedom of Religion",
        c: "Right to Constitutional Remedies",
        d: "Right to Education",
        correct: "c",
    },
    {
        question: "In which year did the Indian Constitution come into effect?",
        a: "1947",
        b: "1949",
        c: "1950",
        d: "1952",
        correct: "c",
    },
    {
        question: "Which article of the Constitution deals with the appointment and removal of the Vice President of India?",
        a: "Article 62",
        b: "Article 66",
        c: "Article 71",
        d: "Article 80",
        correct: "d",
    },
    {
        question: "What is the minimum voting age for participating in local body elections in India?",
        a: "16 years",
        b: "18 years",
        c: "21 years",
        d: "25 years",
        correct: "b",
    },
    {
        question: "Which schedule of the Constitution lists the powers and functions of Municipalities?",
        a: "Sixth Schedule",
        b: "Ninth Schedule",
        c: "Tenth Schedule",
        d: "Twelfth Schedule",
        correct: "d",
    },
    {
        question: "Which article of the Constitution provides protection to civil servants from arbitrary actions?",
        a: "Article 311",
        b: "Article 321",
        c: "Article 411",
        d: "Article 511",
        correct: "a",
    },
    {
        question: "What is the maximum strength of the Lok Sabha as per the Constitution?",
        a: "500",
        b: "545",
        c: "552",
        d: "560",
        correct: "c",
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