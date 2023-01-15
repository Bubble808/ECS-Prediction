class createabcd {
  constructor(letter, numQ, abcd) {
        //framwwork/html stuff
        this.div = document.createElement("div");
        this.btn = document.createElement("button");
        this.btn.setAttribute("id","btn" + numQ + letter);
        this.btn.classList.add("btngrid");
        this.div.appendChild(this.btn)
        document.getElementById("num").appendChild(this.div);


        //add event listener to each button 
        document.getElementById("btn" + numQ + letter).addEventListener('click', () => this.pick(letter, numQ, abcd));

    }

  pick(chosen, numQ, abcd)  {

    for(let i = 0; i < abcd.length(); i++){
      abcd[i] = false;
    }
    
    if(chosen == "A") {abcd[0] = true;}
    else if(chosen == "B") {abcd[1] = true;}
    else if(chosen == "C") {abcd[2] = true;}
    else if(chosen == "D") {abcd[3]= true;}

    document.getElementById("btn" + numQ+ "A").classList.remove("chosen-answer");
    document.getElementById("btn" + numQ + "B").classList.remove("chosen-answer");
    document.getElementById("btn" + numQ + "C").classList.remove("chosen-answer");
    document.getElementById("btn" + numQ + "D").classList.remove("chosen-answer");

    document.getElementById("btn" + numQ + chosen).classList.add("chosen-answer");

  }


}

class createQuestion {
    constructor(text, numQ) {
      this.score = 0;

        this.outerDiv = document.createElement("div");
        this.outerDiv.classList.add("gray-background-two");
        this.outerDiv.classList.add("grid-container");
        this.outerDiv.setAttribute("id", "num");
        document.getElementById("mc").appendChild(this.outerDiv);


        this.text = text;
        this.question = document.createElement("h4");
        this.text = document.createTextNode(this.text)
        this.question.appendChild(this.text)
        document.getElementById("num").appendChild(this.question);

        this.abcd = [false, false, false, false];

        this.createA = new createabcd("A", numQ, this.abcd);
        this.createB = new createabcd("B", numQ, this.abcd);
        this.createC = new createabcd("C", numQ, this.abcd);
        this.createD = new createabcd("D", numQ, this.abcd);
  }

    scoreCESD(first, second, third, fourth) {
      if (this.abcd[0] === true) {
        this.score = first;
      } else if (this.abcd[1] === true) {
        this.score = second;
      } else if (this.abcd[2]=== true) {
        this.score = third;
      } else if (this.abcd[3]=== true) {
        this. score = fourth;
      }
    }

}


let questionsArray = []; 
questionsArray[0] = new createQuestion("6) I was bothered by things that usually don´t bother me", 6);
questionsArray[1] = new createQuestion("7) I did not feel like eating; my appetite was poor", 7);
questionsArray[2] = new createQuestion("8) I felt that I could not shake off the blues even with help from my family or friends", 8);
questionsArray[3] = new createQuestion("9) I felt I was just as good as other people", 9);



document.getElementById("submit-btn").addEventListener("click", getResult)

//Result won't work unless all questions answered

function getResult() {
    for(let i = 0; i < questionsArray.length; i++) {
      if(i===3 || i === 7 || i === 11 || i === 15){
        questionsArray[i].scoreCESD(3, 2, 1, 0);
      } else {
        questionsArray[i].scoreCESD(0, 1, 2, 3);
      }
    }

    let finalScore = 0;

    for(let i =0; i < questionsArray.length; i++) {
      finalScore += questionsArray[i].score;
    }
  

  document.getElementById("finalGrade").innerHTML = "eCS prediction risk grade: " + finalScore;
}
