
var Data = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live?",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  }
];

const onFAQClick = ( el) => {
    el.addEventListener('click', ()=>{

        if( el.childNodes[1].className.includes("invisible")){
            el.childNodes[1].classList.remove("invisible")
        }else{
              el.childNodes[1].classList.add("invisible");
        }
    })
}

let container = document.getElementById("container")
Data.forEach( el => {
    let parent = document.createElement("div")
    let question = document.createElement("div");
    let btnContainer = document.createElement("div");
    let btn = document.createElement("i");
    let qContainer = document.createElement("div");
    let qTxt = document.createElement("p");
    let answer = document.createElement("div");
    let aTxt = document.createElement("p");

    parent.classList.add("FAQ", "container", "one" , "border" , "column")
    question.classList.add("question", "container", "center-align");
    btnContainer.classList.add("chevron","container","center-align","center-justify" );
    btn.classList.add("fa-solid", "fa-chevron-down");
    qContainer.classList.add("question", "center-align", "container");
    answer.classList.add("answer", "container", "invisible");

    parent.appendChild(question)
    parent.appendChild(answer)
    question.appendChild(btnContainer);
    question.appendChild(qContainer);
    btnContainer.appendChild(btn);
    qContainer.appendChild(qTxt);
    answer.appendChild(aTxt);

    qTxt.innerHTML = el.question; 
    aTxt.innerHTML = el.answer;
    onFAQClick(parent)

    container.appendChild(parent);  
})
