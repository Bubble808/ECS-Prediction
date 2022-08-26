// Constructor function for Question objects
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
            btn.classList.add("chosen-answer");
        }
} 

let q6 = new Question("btn6A", "btn6B", "btn6C", "btn6D")
// q6.addEvents();

// function test() {
//     document.getElementById("btn6A").classList.add("chosen-answer");
// }