// Constructor function for Question objects
// let six = document.createElement("div");
// document.getElementById("six").classList.add("gray-background-two grid-container");
// let node = document.createTextNode("6) I was bothered by things that usually don't bother me");

class createQuestion {
    constructor(text, numQ) {
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
        
        //a
        this.div1 = document.createElement("div");
        this.btn1 = document.createElement("button");
        this.btn1.setAttribute("id","btn" + numQ + "A");
        this.btn1.classList.add("btngrid");
        this.div1.appendChild(this.btn1)
        document.getElementById("num").appendChild(this.div1);

        //b
        this.div2 = document.createElement("div");
        this.btn2 = document.createElement("button");
        this.btn2.setAttribute("id", "btn" + numQ + "B");
        this.btn2.classList.add("btngrid");
        this.div2.appendChild(this.btn2);
        document.getElementById("num").appendChild(this.div2);

        //c
        this.div3 = document.createElement("div");
        this.btn3 = document.createElement("button");
        this.btn3.setAttribute("id", "btn" + numQ + "C");
        this.btn3.classList.add("btngrid");
        this.div3.appendChild(this.btn3)
        document.getElementById("num").appendChild(this.div3);

        //d
        this.div4 = document.createElement("div");
        this.btn4 = document.createElement("button");
        this.btn4.setAttribute("id", "btn" + numQ + "D");
        this.btn4.classList.add("btngrid");
        this.div4.appendChild(this.btn4)
        document.getElementById("num").appendChild(this.div4);

        this.lastdiv = document.createElement("div");
        this.lastdiv.classList.add("hrstyles");
        this.lasthr = document.createElement("hr");
        this.lastdiv.appendChild(this.lasthr);
        document.getElementById("mc").appendChild(this.lastdiv);
        // <div class="hrstyles"><hr></div>




    }

}

class Question {
    constructor(btnA, btnB, btnC, btnD) {
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.score = 0;
        this.btnAEl = document.getElementById(btnA);
        this.btnBEl = document.getElementById(btnB);
        this.btnCEl = document.getElementById(btnC);
        this.btnDEl = document.getElementById(btnD);
        this.addEvents();
    }

        addEvents() {
            this.btnAEl.addEventListener('click', () => this.pick(this.a, this.btnAEl));
            this.btnBEl.addEventListener('click', () => this.pick(this.b, this.btnBEl));
            this.btnCEl.addEventListener('click', () => this.pick(this.c, this.btnCEl));
            this.btnDEl.addEventListener('click', () => this.pick(this.d, this.btnDEl));
        }

        pick(chosen, btn)  {
            chosen = true;
            this.btnAEl.classList.remove("chosen-answer");
            this.btnBEl.classList.remove("chosen-answer");
            this.btnCEl.classList.remove("chosen-answer");
            this.btnDEl.classList.remove("chosen-answer");
            btn.classList.add("chosen-answer");
        }
} 

let question6 = new createQuestion("6) I was bothered by things that usually don´t bother me", 6)
let question7 = new createQuestion("7) I did not feel like eating; my appetite was poor", 7)
let q6 = new Question("btn6A", "btn6B", "btn6C", "btn6D");
let q7 = new Question("btn7A", "btn7B", "btn7C", "btn7D");