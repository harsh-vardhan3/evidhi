const quizData = [
    

    //Quiz data on Fundamental Duties and Rights
    {
        question: "Fundamental Duties were added to the Indian Constitution by which amendment?",
        a: "40th Amendment",
        b: "42nd Amendment",
        c: "44th Amendment",
        d: "46th Amendment",
        correct: "b",
    },
    {
        question: "According to the Indian Constitution, how many Fundamental Duties are there for citizens?",
        a: "8",
        b: "10",
        c: "12",
        d: "14",
        correct: "b",
    },
    {
        question: "The Fundamental Duties are inspired by the Constitution of which country?",
        a: "United States",
        b: "Japan",
        c: "Germany",
        d: "South Africa",
        correct: "c",
    },
    {
        question: "The Right to Freedom in the Indian Constitution includes which of the following?",
        a: "Right to Education",
        b: "Right to Exploitation",
        c: "Right against Exploitation",
        d: "Right to Property",
        correct: "c",
    },
    {
        question: "Which Fundamental Right is also known as the 'heart and soul' of the Indian Constitution?",
        a: "Right to Equality",
        b: "Right to Freedom",
        c: "Right to Constitutional Remedies",
        d: "Right to Education",
        correct: "c",
    },
    {
        question: "The Right to Privacy was declared as a Fundamental Right by the Supreme Court in which case?",
        a: "Keshavananda Bharati case",
        b: "Maneka Gandhi case",
        c: "Golaknath case",
        d: "Puttaswamy case",
        correct: "d",
    },
    {
        question: "Which article of the Indian Constitution guarantees the Right to Education?",
        a: "Article 21",
        b: "Article 25",
        c: "Article 45",
        d: "Article 30",
        correct: "c",
    },
    {
        question: "Which fundamental rights cannot be suspended even during an emergency?",
        a: "Right to Speech",
        b: "Right to Religion",
        c: "Right to Equality",
        d: "Right to Life and Personal Liberty",
        correct: "d",
    },
    {
        question: "Which of the following Article of the Indian Constitution guarantees 'Equality Before the Law and Equal Protection of Law within the Territory of India'?",
        a: "15",
        b: "14",
        c: "17",
        d: "18",
        correct: "b",
    },
    {
        question: "In which part of the Indian Constitution, the Fundamental Rights are provided?",
        a: "Part II",
        b: "Part III",
        c: "Part V",
        d: "Part IV",
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

