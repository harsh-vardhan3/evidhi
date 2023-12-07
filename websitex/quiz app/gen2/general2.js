const quizData = [
    

    //Quiz data General 2
    {
        question: "What is the supreme law of India?",
        a: "Indian Penal Code",
        b: "Constitution of India",
        c: "Civil Procedure Code",
        d: "Code of Criminal Procedure",
        correct: "b",
    },
    {
        question: "Which part of the Constitution deals with Fundamental Rights?",
        a: "Part I",
        b: "Part III",
        c: "Part IV",
        d: "Part V",
        correct: "b",
    },
    {
        question: "What does Article 21 of the Constitution guarantee?",
        a: "Right to Equality",
        b: "Right to Freedom of Speech",
        c: "Right to Life and Personal Liberty",
        d: "Right to Religious Freedom",
        correct: "c",
    },
    {
        question: "Which body is responsible for the interpretation of the Constitution?",
        a: "Supreme Court of India",
        b: "President of India",
        c: "Parliament",
        d: "Election Commission",
        correct: "a",
    },
    {
        question: "Which amendment to the Constitution deals with the Right to Education as a fundamental right?",
        a: "42nd Amendment",
        b: "86th Amendment",
        c: "73rd Amendment",
        d: "105th Amendment",
        correct: "b",
    },
    {
        question: "Which writ is known as the 'Great Writ' and is a remedy against illegal detention?",
        a: "Writ of Certiorari",
        b: "Writ of Mandamus",
        c: "Writ of Habeas Corpus",
        d: "Writ of Prohibition",
        correct: "c",
    },
    {
        question: "What is the minimum voting age in India according to the Constitution?",
        a: "16 years",
        b: "18 years",
        c: "21 years",
        d: "25 years",
        correct: "b",
    },
    {
        question: "Which schedule of the Constitution lists the powers and functions of Panchayats?",
        a: "First Schedule",
        b: "Eighth Schedule",
        c: "Ninth Schedule",
        d: "Eleventh Schedule",
        correct: "d",
    },
    {
        question: "Who is the head of the judiciary in a state in India?",
        a: "Chief Minister",
        b: "Governor",
        c: "Chief Justice",
        d: "President",
        correct: "c",
    },
    {
        question: "Which article of the Constitution deals with the impeachment of the President of India?",
        a: "Article 60",
        b: "Article 61",
        c: "Article 62",
        d: "Article 63",
        correct: "b",
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