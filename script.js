//global variables 
let q1A = false;
let q1B = false;
let q1C = false;
let score1 = 0;
let scorebmi = 0;

let q4A = false;
let q4B = false;
let score4 = 0;

let q5A = false;
let q5B = false;
let score5 = 0;

let q6A = false;
let q6B = false;
let q6C = false;
let q6D = false;
let score6 = 0;

let q7A = false;
let q7B = false;
let q7C = false;
let q7D = false;
let score7 = 0;

let q8A = false;
let q8B = false;
let q8C = false;
let q8D = false;
let score8 = 0;

let q9A = false;
let q9B = false;
let q9C = false;
let q9D = false;
let score9 = 0;

let q10A = false;
let q10B = false;
let q10C = false;
let q10D = false;
let score10 = 0;

let q11A = false;
let q11B = false;
let q11C = false;
let q11D = false;
let score11 = 0;

let q12A = false;
let q12B = false;
let q12C = false;
let q12D = false;
let score12 = 0;

let q13A = false;
let q13B = false;
let q13C = false;
let q13D = false;
let score13 = 0;

let q14A = false;
let q14B = false;
let q14C = false;
let q14D = false;
let score14 = 0;

let q15A = false;
let q15B = false;
let q15C = false;
let q15D = false;
let score15 = 0;

let q16A = false;
let q16B = false;
let q16C = false;
let q16D = false;
let score16 = 0;

let q17A = false;
let q17B = false;
let q17C = false;
let q17D = false;
let score17 = 0;

let q18A = false;
let q18B = false;
let q18C = false;
let q18D = false;
let score18 = 0;

let q19A = false;
let q19B = false;
let q19C = false;
let q19D = false;
let score19 = 0;

let q20A = false;
let q20B = false;
let q20C = false;
let q20D = false;
let score20 = 0;

let q21A = false;
let q21B = false;
let q21C = false;
let q21D = false;
let score21 = 0;

let q22A = false;
let q22B = false;
let q22C = false;
let q22D = false;
let score22 = 0;

let q23A = false;
let q23B = false;
let q23C = false;
let q23D = false;
let score23 = 0;

let q24A = false;
let q24B = false;
let q24C = false;
let q24D = false;
let score24 = 0;

let q25A = false;
let q25B = false;
let q25C = false;
let q25D = false;
let score25 = 0;

let finalcesdScore = 0;
let finalCSGrade = 0;

//variables to store html elements
let btn1AEl = document.getElementById("btn1A");
let btn1BEl = document.getElementById("btn1B");
let btn1CEl = document.getElementById("btn1C");

let in2El = document.getElementById("input2");
let in3El = document.getElementById("input3");

let btn4AEl = document.getElementById("btn4A");
let btn4BEl = document.getElementById("btn4B");

let btn5AEl = document.getElementById("btn5A");
let btn5BEl = document.getElementById("btn5B");

let btn6AEl = document.getElementById("btn6A");
let btn6BEl = document.getElementById("btn6B");
let btn6CEl = document.getElementById("btn6C");
let btn6DEl = document.getElementById("btn6D");

let btn7AEl = document.getElementById("btn7A");
let btn7BEl = document.getElementById("btn7B");
let btn7CEl = document.getElementById("btn7C");
let btn7DEl = document.getElementById("btn7D");

let btn8AEl = document.getElementById("btn8A");
let btn8BEl = document.getElementById("btn8B");
let btn8CEl = document.getElementById("btn8C");
let btn8DEl = document.getElementById("btn8D");

let btn9AEl = document.getElementById("btn9A");
let btn9BEl = document.getElementById("btn9B");
let btn9CEl = document.getElementById("btn9C");
let btn9DEl = document.getElementById("btn9D");

let btn10AEl = document.getElementById("btn10A");
let btn10BEl = document.getElementById("btn10B");
let btn10CEl = document.getElementById("btn10C");
let btn10DEl = document.getElementById("btn10D");

let btn11AEl = document.getElementById("btn11A");
let btn11BEl = document.getElementById("btn11B");
let btn11CEl = document.getElementById("btn11C");
let btn11DEl = document.getElementById("btn11D");

let btn12AEl = document.getElementById("btn12A");
let btn12BEl = document.getElementById("btn12B");
let btn12CEl = document.getElementById("btn12C");
let btn12DEl = document.getElementById("btn12D");

let btn13AEl = document.getElementById("btn13A");
let btn13BEl = document.getElementById("btn13B");
let btn13CEl = document.getElementById("btn13C");
let btn13DEl = document.getElementById("btn13D");

let btn14AEl = document.getElementById("btn14A");
let btn14BEl = document.getElementById("btn14B");
let btn14CEl = document.getElementById("btn14C");
let btn14DEl = document.getElementById("btn14D");

let btn15AEl = document.getElementById("btn15A");
let btn15BEl = document.getElementById("btn15B");
let btn15CEl = document.getElementById("btn15C");
let btn15DEl = document.getElementById("btn15D");

let btn16AEl = document.getElementById("btn16A");
let btn16BEl = document.getElementById("btn16B");
let btn16CEl = document.getElementById("btn16C");
let btn16DEl = document.getElementById("btn16D");

let btn17AEl = document.getElementById("btn17A");
let btn17BEl = document.getElementById("btn17B");
let btn17CEl = document.getElementById("btn17C");
let btn17DEl = document.getElementById("btn17D");

let btn18AEl = document.getElementById("btn18A");
let btn18BEl = document.getElementById("btn18B");
let btn18CEl = document.getElementById("btn18C");
let btn18DEl = document.getElementById("btn18D");

let btn19AEl = document.getElementById("btn19A");
let btn19BEl = document.getElementById("btn19B");
let btn19CEl = document.getElementById("btn19C");
let btn19DEl = document.getElementById("btn19D");

let btn20AEl = document.getElementById("btn20A");
let btn20BEl = document.getElementById("btn20B");
let btn20CEl = document.getElementById("btn20C");
let btn20DEl = document.getElementById("btn20D");

let btn21AEl = document.getElementById("btn21A");
let btn21BEl = document.getElementById("btn21B");
let btn21CEl = document.getElementById("btn21C");
let btn21DEl = document.getElementById("btn21D");

let btn22AEl = document.getElementById("btn22A");
let btn22BEl = document.getElementById("btn22B");
let btn22CEl = document.getElementById("btn22C");
let btn22DEl = document.getElementById("btn22D");

let btn23AEl = document.getElementById("btn23A");
let btn23BEl = document.getElementById("btn23B");
let btn23CEl = document.getElementById("btn23C");
let btn23DEl = document.getElementById("btn23D");

let btn24AEl = document.getElementById("btn24A");
let btn24BEl = document.getElementById("btn24B");
let btn24CEl = document.getElementById("btn24C");
let btn24DEl = document.getElementById("btn24D");

let btn25AEl = document.getElementById("btn25A");
let btn25BEl = document.getElementById("btn25B");
let btn25CEl = document.getElementById("btn25C");
let btn25DEl = document.getElementById("btn25D");



//event listeners
//dropdown
document.getElementById("dropbtn").addEventListener("click", dropdown)
document.addEventListener("click", closeDropdown)

btn1A.addEventListener("click", btn1APick);
btn1B.addEventListener("click", btn1BPick);
btn1C.addEventListener("click", btn1CPick);

btn4A.addEventListener("click", btn4APick);
btn4B.addEventListener("click", btn4BPick);

btn5A.addEventListener("click", btn5APick);
btn5B.addEventListener("click", btn5BPick);

btn6A.addEventListener("click", btn6APick);
btn6B.addEventListener("click", btn6BPick);
btn6C.addEventListener("click", btn6CPick);
btn6D.addEventListener("click", btn6DPick);

btn7A.addEventListener("click", btn7APick);
btn7B.addEventListener("click", btn7BPick);
btn7C.addEventListener("click", btn7CPick);
btn7D.addEventListener("click", btn7DPick);

btn8A.addEventListener("click", btn8APick);
btn8B.addEventListener("click", btn8BPick);
btn8C.addEventListener("click", btn8CPick);
btn8D.addEventListener("click", btn8DPick);

btn9A.addEventListener("click", btn9APick);
btn9B.addEventListener("click", btn9BPick);
btn9C.addEventListener("click", btn9CPick);
btn9D.addEventListener("click", btn9DPick);

btn10A.addEventListener("click", btn10APick);
btn10B.addEventListener("click", btn10BPick);
btn10C.addEventListener("click", btn10CPick);
btn10D.addEventListener("click", btn10DPick);

btn11A.addEventListener("click", btn11APick);
btn11B.addEventListener("click", btn11BPick);
btn11C.addEventListener("click", btn11CPick);
btn11D.addEventListener("click", btn11DPick);

btn12A.addEventListener("click", btn12APick);
btn12B.addEventListener("click", btn12BPick);
btn12C.addEventListener("click", btn12CPick);
btn12D.addEventListener("click", btn12DPick);

btn13A.addEventListener("click", btn13APick);
btn13B.addEventListener("click", btn13BPick);
btn13C.addEventListener("click", btn13CPick);
btn13D.addEventListener("click", btn13DPick);

btn14A.addEventListener("click", btn14APick);
btn14B.addEventListener("click", btn14BPick);
btn14C.addEventListener("click", btn14CPick);
btn14D.addEventListener("click", btn14DPick);

btn15A.addEventListener("click", btn15APick);
btn15B.addEventListener("click", btn15BPick);
btn15C.addEventListener("click", btn15CPick);
btn15D.addEventListener("click", btn15DPick);

btn16A.addEventListener("click", btn16APick);
btn16B.addEventListener("click", btn16BPick);
btn16C.addEventListener("click", btn16CPick);
btn16D.addEventListener("click", btn16DPick);

btn17A.addEventListener("click", btn17APick);
btn17B.addEventListener("click", btn17BPick);
btn17C.addEventListener("click", btn17CPick);
btn17D.addEventListener("click", btn17DPick);

btn18A.addEventListener("click", btn18APick);
btn18B.addEventListener("click", btn18BPick);
btn18C.addEventListener("click", btn18CPick);
btn18D.addEventListener("click", btn18DPick);

btn19A.addEventListener("click", btn19APick);
btn19B.addEventListener("click", btn19BPick);
btn19C.addEventListener("click", btn19CPick);
btn19D.addEventListener("click", btn19DPick);

btn20A.addEventListener("click", btn20APick);
btn20B.addEventListener("click", btn20BPick);
btn20C.addEventListener("click", btn20CPick);
btn20D.addEventListener("click", btn20DPick);

btn21A.addEventListener("click", btn21APick);
btn21B.addEventListener("click", btn21BPick);
btn21C.addEventListener("click", btn21CPick);
btn21D.addEventListener("click", btn21DPick);

btn22A.addEventListener("click", btn22APick);
btn22B.addEventListener("click", btn22BPick);
btn22C.addEventListener("click", btn22CPick);
btn22D.addEventListener("click", btn22DPick);

btn23A.addEventListener("click", btn23APick);
btn23B.addEventListener("click", btn23BPick);
btn23C.addEventListener("click", btn23CPick);
btn23D.addEventListener("click", btn23DPick);

btn24A.addEventListener("click", btn24APick);
btn24B.addEventListener("click", btn24BPick);
btn24C.addEventListener("click", btn24CPick);
btn24D.addEventListener("click", btn24DPick);

btn25A.addEventListener("click", btn25APick);
btn25B.addEventListener("click", btn25BPick);
btn25C.addEventListener("click", btn25CPick);
btn25D.addEventListener("click", btn25DPick);



//functions
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function closeDropdown(e) {
  if (e.target.id !== "dropbtn") {
    document.getElementById("myDropdown").classList.remove("show");
    if (q1A === true) {
    document.getElementById("dropbtn").innerHTML = "≤ 30 years old ▽";
    score1 = 0;
    } else if (q1B === true) {
    document.getElementById("dropbtn").innerHTML = "31-35 years old ▽";
    score1 = 2;
    } else if (q1C === true) {
    document.getElementById("dropbtn").innerHTML = "> 35 years old ▽";
    score1 = 4;
    }
  }
}

//question 1 functions
function btn1APick() {
  q1A = true;
  q1B = false;
  q1C = false;
}

function btn1BPick() {
  q1A = false;
  q1B = true;
  q1C = false;
}

function btn1CPick() {
  q1A = false;
  q1B = false;
  q1C = true;
}

// Question 4 functions
function btn4APick() {
  q4A = true;
  q4B = false;
  btn4AEl.classList.add("chosen-answer");
  btn4BEl.classList.remove("chosen-answer");
}

function btn4BPick() {
  q4A = false;
  q4B = true;
  btn4AEl.classList.remove("chosen-answer");
  btn4BEl.classList.add("chosen-answer");
}

// Question 5 functions
function btn5APick() {
  q5A = true;
  q5B = false;
  btn5AEl.classList.add("chosen-answer");
  btn5BEl.classList.remove("chosen-answer");
}

function btn5BPick() {
  q5A = false;
  q5B = true;
  btn5AEl.classList.remove("chosen-answer");
  btn5BEl.classList.add("chosen-answer");
}

// Question 6 functions
function removeBlue6() {
  btn6AEl.classList.remove("chosen-answer");
  btn6BEl.classList.remove("chosen-answer");
  btn6CEl.classList.remove("chosen-answer");
  btn6DEl.classList.remove("chosen-answer");
}

function btn6APick() {
  q6A = true;
  q6B = false;
  q6C = false;
  q6D = false;
  removeBlue6();
  btn6AEl.classList.add("chosen-answer");
}

function btn6BPick() {
  q6A = false;
  q6B = true;
  q6C = false;
  q6D = false;
  removeBlue6();
  btn6B.classList.add("chosen-answer");
}

function btn6CPick() {
  q6A = false;
  q6B = false;
  q6C = true;
  q6D = false;
  removeBlue6();
  btn6C.classList.add("chosen-answer");
}

function btn6DPick() {
  q6A = false;
  q6B = false;
  q6C = false;
  q6D = true;
  removeBlue6();
  btn6D.classList.add("chosen-answer");
}

// question 7 functions 
function removeBlue7() {
  btn7AEl.classList.remove("chosen-answer");
  btn7BEl.classList.remove("chosen-answer");
  btn7CEl.classList.remove("chosen-answer");
  btn7DEl.classList.remove("chosen-answer");
}

function btn7APick() {
  q7A = true;
  q7B = false;
  q7C = false;
  q7D = false;
  removeBlue7();
  btn7AEl.classList.add("chosen-answer");
}

function btn7BPick() {
  q7A = false;
  q7B = true;
  q7C = false;
  q7D = false;
  removeBlue7();
  btn7B.classList.add("chosen-answer");
}

function btn7CPick() {
  q7A = false;
  q7B = false;
  q7C = true;
  q7D = false;
  removeBlue7();
  btn7C.classList.add("chosen-answer");
}

function btn7DPick() {
  q7A = false;
  q7B = false;
  q7C = false;
  q7D = true;
  removeBlue7();
  btn7D.classList.add("chosen-answer");
}


// Question 8 functions
function removeBlue8() {
  btn8AEl.classList.remove("chosen-answer");
  btn8BEl.classList.remove("chosen-answer");
  btn8CEl.classList.remove("chosen-answer");
  btn8DEl.classList.remove("chosen-answer");
}

function btn8APick() {
  q8A = true;
  q8B = false;
  q8C = false;
  q8D = false;
  removeBlue8();
  btn8AEl.classList.add("chosen-answer");
}

function btn8BPick() {
  q8A = false;
  q8B = true;
  q8C = false;
  q8D = false;
  removeBlue8();
  btn8B.classList.add("chosen-answer");
}

function btn8CPick() {
  q8A = false;
  q8B = false;
  q8C = true;
  q8D = false;
  removeBlue8();
  btn8C.classList.add("chosen-answer");
}

function btn8DPick() {
  q8A = false;
  q8B = false;
  q8C = false;
  q8D = true;
  removeBlue8();
  btn8D.classList.add("chosen-answer");
}

// question 9 functions 
function removeBlue9() {
  btn9AEl.classList.remove("chosen-answer");
  btn9BEl.classList.remove("chosen-answer");
  btn9CEl.classList.remove("chosen-answer");
  btn9DEl.classList.remove("chosen-answer");
}

function btn9APick() {
  q9A = true;
  q9B = false;
  q9C = false;
  q9D = false;
  removeBlue9();
  btn9AEl.classList.add("chosen-answer");
}

function btn9BPick() {
  q9A = false;
  q9B = true;
  q9C = false;
  q9D = false;
  removeBlue9();
  btn9B.classList.add("chosen-answer");
}

function btn9CPick() {
  q9A = false;
  q9B = false;
  q9C = true;
  q9D = false;
  removeBlue9();
  btn9C.classList.add("chosen-answer");
}

function btn9DPick() {
  q9A = false;
  q9B = false;
  q9C = false;
  q9D = true;
  removeBlue9();
  btn9D.classList.add("chosen-answer");
}


// Question 10 functions
function removeBlue10() {
  btn10AEl.classList.remove("chosen-answer");
  btn10BEl.classList.remove("chosen-answer");
  btn10CEl.classList.remove("chosen-answer");
  btn10DEl.classList.remove("chosen-answer");
}

function btn10APick() {
  q10A = true;
  q10B = 0;
  q10C = 0;
  q10D = 0;
  removeBlue10();
  btn10AEl.classList.add("chosen-answer");
}

function btn10BPick() {
  q10A = false;
  q10B = true;
  q10C = false;
  q10D = false;
  removeBlue10();
  btn10B.classList.add("chosen-answer");
}

function btn10CPick() {
  q10A = false;
  q10B = false;
  q10C = true;
  q10D = false;
  removeBlue10();
  btn10C.classList.add("chosen-answer");
}

function btn10DPick() {
  q10A = false;
  q10B = false;
  q10C = false;
  q10D = true;
  removeBlue10();
  btn10D.classList.add("chosen-answer");
}

// question 11 functions 
function removeBlue11() {
  btn11AEl.classList.remove("chosen-answer");
  btn11BEl.classList.remove("chosen-answer");
  btn11CEl.classList.remove("chosen-answer");
  btn11DEl.classList.remove("chosen-answer");
}

function btn11APick() {
  q11A = true;
  q11B = false;
  q11C = false;
  q11D = false;
  removeBlue11();
  btn11AEl.classList.add("chosen-answer");
}

function btn11BPick() {
  q11A = false;
  q11B = true;
  q11C = false;
  q11D = false;
  removeBlue11();
  btn11B.classList.add("chosen-answer");
}

function btn11CPick() {
  q11A = false;
  q11B = false;
  q11C = true;
  q11D = false;
  removeBlue11();
  btn11C.classList.add("chosen-answer");
}

function btn11DPick() {
  q11A = false;
  q11B = false;
  q11C = false;
  q11D = true;
  removeBlue11();
  btn11D.classList.add("chosen-answer");
}


// Question 12 functions
function removeBlue12() {
  btn12AEl.classList.remove("chosen-answer");
  btn12BEl.classList.remove("chosen-answer");
  btn12CEl.classList.remove("chosen-answer");
  btn12DEl.classList.remove("chosen-answer");
}

function btn12APick() {
  q12A = true;
  q12B = false;
  q12C = false;
  q12D = false;
  removeBlue12();
  btn12AEl.classList.add("chosen-answer");
}

function btn12BPick() {
  q12A = false;
  q12B = true;
  q12C = false;
  q12D = false;
  removeBlue12();
  btn12B.classList.add("chosen-answer");
}

function btn12CPick() {
  q12A = false;
  q12B = false;
  q12C = true;
  q12D = false;
  removeBlue12();
  btn12C.classList.add("chosen-answer");
}

function btn12DPick() {
  q12A = false;
  q12B = false;
  q12C = false;
  q12D = true;
  removeBlue12();
  btn12D.classList.add("chosen-answer");
}

// question 13 functions 
function removeBlue13() {
  btn13AEl.classList.remove("chosen-answer");
  btn13BEl.classList.remove("chosen-answer");
  btn13CEl.classList.remove("chosen-answer");
  btn13DEl.classList.remove("chosen-answer");
}

function btn13APick() {
  q13A = true;
  q13B = false;
  q13C = false;
  q13D = false;
  removeBlue13();
  btn13AEl.classList.add("chosen-answer");
}

function btn13BPick() {
  q13A = false;
  q13B = true;
  q13C = false;
  q13D = false;
  removeBlue13();
  btn13B.classList.add("chosen-answer");
}

function btn13CPick() {
  q13A = false;
  q13B = false;
  q13C = true;
  q13D = false;
  removeBlue13();
  btn13C.classList.add("chosen-answer");
}

function btn13DPick() {
  q13A = false;
  q13B = false;
  q13C = false;
  q13D = true;
  removeBlue13();
  btn13D.classList.add("chosen-answer");
}


// Question 14 functions
function removeBlue14() {
  btn14AEl.classList.remove("chosen-answer");
  btn14BEl.classList.remove("chosen-answer");
  btn14CEl.classList.remove("chosen-answer");
  btn14DEl.classList.remove("chosen-answer");
}

function btn14APick() {
  q14A = true;
  q14B = false;
  q14C = false;
  q14D = false;
  removeBlue14();
  btn14AEl.classList.add("chosen-answer");
}

function btn14BPick() {
  q14A = false;
  q14B = true;
  q14C = false;
  q14D = false;
  removeBlue14();
  btn14B.classList.add("chosen-answer");
}

function btn14CPick() {
  q14A = false;
  q14B = false;
  q14C = true;
  q14D = false;
  removeBlue14();
  btn14C.classList.add("chosen-answer");
}

function btn14DPick() {
  q14A = false;
  q14B = false;
  q14C = false;
  q14D = true;
  removeBlue14();
  btn14D.classList.add("chosen-answer");
}

// question 15 functions 
function removeBlue15() {
  btn15AEl.classList.remove("chosen-answer");
  btn15BEl.classList.remove("chosen-answer");
  btn15CEl.classList.remove("chosen-answer");
  btn15DEl.classList.remove("chosen-answer");
}

function btn15APick() {
  q15A = true;
  q15B = false;
  q15C = false;
  q15D = false;
  removeBlue15();
  btn15AEl.classList.add("chosen-answer");
}

function btn15BPick() {
  q15A = false;
  q15B = true;
  q15C = false;
  q15D = false;
  removeBlue15();
  btn15B.classList.add("chosen-answer");
}

function btn15CPick() {
  q15A = false;
  q15B = false;
  q15C = true;
  q15D = false;
  removeBlue15();
  btn15C.classList.add("chosen-answer");
}

function btn15DPick() {
  q15A = false;
  q15B = false;
  q15C = false;
  q15D = true;
  removeBlue15();
  btn15D.classList.add("chosen-answer");
}


// question 16 functions 
function removeBlue16() {
  btn16AEl.classList.remove("chosen-answer");
  btn16BEl.classList.remove("chosen-answer");
  btn16CEl.classList.remove("chosen-answer");
  btn16DEl.classList.remove("chosen-answer");
}

function btn16APick() {
  q16A = true;
  q16B = false;
  q16C = false;
  q16D = false;
  removeBlue16();
  btn16AEl.classList.add("chosen-answer");
}

function btn16BPick() {
  q16A = false;
  q16B = true;
  q16C = false;
  q16D = false;
  removeBlue16();
  btn16B.classList.add("chosen-answer");
}

function btn16CPick() {
  q16A = false;
  q16B = false;
  q16C = true;
  q16D = false;
  removeBlue16();
  btn16C.classList.add("chosen-answer");
}

function btn16DPick() {
  q16A = false;
  q16B = false;
  q16C = false;
  q16D = true;
  removeBlue16();
  btn16D.classList.add("chosen-answer");
}


// question 17 functions 
function removeBlue17() {
  btn17AEl.classList.remove("chosen-answer");
  btn17BEl.classList.remove("chosen-answer");
  btn17CEl.classList.remove("chosen-answer");
  btn17DEl.classList.remove("chosen-answer");
}

function btn17APick() {
  q17A = true;
  q17B = false;
  q17C = false;
  q17D = false;
  removeBlue17();
  btn17AEl.classList.add("chosen-answer");
}

function btn17BPick() {
  q17A = false;
  q17B = true;
  q17C = false;
  q17D = false;
  removeBlue17();
  btn17B.classList.add("chosen-answer");
}

function btn17CPick() {
  q17A = false;
  q17B = false;
  q17C = true;
  q17D = false;
  removeBlue17();
  btn17C.classList.add("chosen-answer");
}

function btn17DPick() {
  q17A = false;
  q17B = false;
  q17C = false;
  q17D = true;
  removeBlue17();
  btn17D.classList.add("chosen-answer");
}



// Question 18 functions
function removeBlue18() {
  btn18AEl.classList.remove("chosen-answer");
  btn18BEl.classList.remove("chosen-answer");
  btn18CEl.classList.remove("chosen-answer");
  btn18DEl.classList.remove("chosen-answer");
}

function btn18APick() {
  q18A = true;
  q18B = false;
  q18C = false;
  q18D = false;
  removeBlue18();
  btn18AEl.classList.add("chosen-answer");
}

function btn18BPick() {
  q18A = false;
  q18B = true;
  q18C = false;
  q18D = false;
  removeBlue18();
  btn18B.classList.add("chosen-answer");
}

function btn18CPick() {
  q18A = false;
  q18B = false;
  q18C = true;
  q18D = false;
  removeBlue18();
  btn18C.classList.add("chosen-answer");
}

function btn18DPick() {
  q18A = false;
  q18B = false;
  q18C = false;
  q18D = true;
  removeBlue18();
  btn18D.classList.add("chosen-answer");
}

// question 19 functions 
function removeBlue19() {
  btn19AEl.classList.remove("chosen-answer");
  btn19BEl.classList.remove("chosen-answer");
  btn19CEl.classList.remove("chosen-answer");
  btn19DEl.classList.remove("chosen-answer");
}

function btn19APick() {
  q19A = true;
  q19B = false;
  q19C = false;
  q19D = false;
  removeBlue19();
  btn19AEl.classList.add("chosen-answer");
}

function btn19BPick() {
  q19A = false;
  q19B = true;
  q19C = false;
  q19D = false;
  removeBlue19();
  btn19B.classList.add("chosen-answer");
}

function btn19CPick() {
  q19A = false;
  q19B = false;
  q19C = true;
  q19D = false;
  removeBlue19();
  btn19C.classList.add("chosen-answer");
}

function btn19DPick() {
  q19A = false;
  q19B = false;
  q19C = false;
  q19D = true;
  removeBlue19();
  btn19D.classList.add("chosen-answer");
}


// Question 20 functions
function removeBlue20() {
  btn20AEl.classList.remove("chosen-answer");
  btn20BEl.classList.remove("chosen-answer");
  btn20CEl.classList.remove("chosen-answer");
  btn20DEl.classList.remove("chosen-answer");
}

function btn20APick() {
  q20A = true;
  q20B = false;
  q20C = false;
  q20D = false;
  removeBlue20();
  btn20AEl.classList.add("chosen-answer");
}

function btn20BPick() {
  q20A = false;
  q20B = true;
  q20C = false;
  q20D = false;
  removeBlue20();
  btn20B.classList.add("chosen-answer");
}

function btn20CPick() {
  q20A = false;
  q20B = false;
  q20C = true;
  q20D = false;
  removeBlue20();
  btn20C.classList.add("chosen-answer");
}

function btn20DPick() {
  q20A = false;
  q20B = false;
  q20C = false;
  q20D = true;
  removeBlue20();
  btn20D.classList.add("chosen-answer");
}

// question 21 functions 
function removeBlue21() {
  btn21AEl.classList.remove("chosen-answer");
  btn21BEl.classList.remove("chosen-answer");
  btn21CEl.classList.remove("chosen-answer");
  btn21DEl.classList.remove("chosen-answer");
}

function btn21APick() {
  q21A = true;
  q21B = 0;
  q21C = 0;
  q21D = 0;
  removeBlue21();
  btn21AEl.classList.add("chosen-answer");
}

function btn21BPick() {
  q21A = false;
  q21B = true;
  q21C = false;
  q21D = false;
  removeBlue21();
  btn21B.classList.add("chosen-answer");
}

function btn21CPick() {
  q21A = false;
  q21B = false;
  q21C = true;
  q21D = false;
  removeBlue21();
  btn21C.classList.add("chosen-answer");
}

function btn21DPick() {
  q21A = false;
  q21B = false;
  q21C = false;
  q21D = true;
  removeBlue21();
  btn21D.classList.add("chosen-answer");
}


// Question 22 functions
function removeBlue22() {
  btn22AEl.classList.remove("chosen-answer");
  btn22BEl.classList.remove("chosen-answer");
  btn22CEl.classList.remove("chosen-answer");
  btn22DEl.classList.remove("chosen-answer");
}

function btn22APick() {
  q22A = true;
  q22B = false;
  q22C = false;
  q22D = false;
  removeBlue22();
  btn22AEl.classList.add("chosen-answer");
}

function btn22BPick() {
  q22A = false;
  q22B = true;
  q22C = false;
  q22D = false;
  removeBlue22();
  btn22B.classList.add("chosen-answer");
}

function btn22CPick() {
  q22A = false;
  q22B = false;
  q22C = true;
  q22D = false;
  removeBlue22();
  btn22C.classList.add("chosen-answer");
}

function btn22DPick() {
  q22A = false;
  q22B = false;
  q22C = false;
  q22D = true;
  removeBlue22();
  btn22D.classList.add("chosen-answer");
}

// question 23 functions 
function removeBlue23() {
  btn23AEl.classList.remove("chosen-answer");
  btn23BEl.classList.remove("chosen-answer");
  btn23CEl.classList.remove("chosen-answer");
  btn23DEl.classList.remove("chosen-answer");
}

function btn23APick() {
  q23A = true;
  q23B = false;
  q23C = false;
  q23D = false;
  removeBlue23();
  btn23AEl.classList.add("chosen-answer");
}

function btn23BPick() {
  q23A = false;
  q23B = true;
  q23C = false;
  q23D = false;
  removeBlue23();
  btn23B.classList.add("chosen-answer");
}

function btn23CPick() {
  q23A = false;
  q23B = false;
  q23C = true;
  q23D = false;
  removeBlue23();
  btn23C.classList.add("chosen-answer");
}

function btn23DPick() {
  q23A = false;
  q23B = false;
  q23C = false;
  q23D = true;
  removeBlue23();
  btn23D.classList.add("chosen-answer");
}


// Question 24 functions
function removeBlue24() {
  btn24AEl.classList.remove("chosen-answer");
  btn24BEl.classList.remove("chosen-answer");
  btn24CEl.classList.remove("chosen-answer");
  btn24DEl.classList.remove("chosen-answer");
}

function btn24APick() {
  q24A = true;
  q24B = false;
  q24C = false;
  q24D = false;
  removeBlue24();
  btn24AEl.classList.add("chosen-answer");
}

function btn24BPick() {
  q24A = false;
  q24B = true;
  q24C = false;
  q24D = false;
  removeBlue24();
  btn24B.classList.add("chosen-answer");
}

function btn24CPick() {
  q24A = false;
  q24B = false;
  q24C = true;
  q24D = false;
  removeBlue24();
  btn24C.classList.add("chosen-answer");
}

function btn24DPick() {
  q24A = false;
  q24B = false;
  q24C = false;
  q24D = true;
  removeBlue24();
  btn24D.classList.add("chosen-answer");
}

// question 25 functions 
function removeBlue25() {
  btn25AEl.classList.remove("chosen-answer");
  btn25BEl.classList.remove("chosen-answer");
  btn25CEl.classList.remove("chosen-answer");
  btn25DEl.classList.remove("chosen-answer");
}

function btn25APick() {
  q25A = true;
  q25B = false;
  q25C = false;
  q25D = false;
  removeBlue25();
  btn25AEl.classList.add("chosen-answer");
}

function btn25BPick() {
  q25A = false;
  q25B = true;
  q25C = false;
  q25D = false;
  removeBlue25();
  btn25B.classList.add("chosen-answer");
}

function btn25CPick() {
  q25A = false;
  q25B = false;
  q25C = true;
  q25D = false;
  removeBlue25();
  btn25C.classList.add("chosen-answer");
}

function btn25DPick() {
  q25A = false;
  q25B = false;
  q25C = false;
  q25D = true;
  removeBlue25();
  btn25D.classList.add("chosen-answer");
}

document.getElementById("submit-btn").addEventListener("click", getResult)

//Result won't work unless all questions answered

function getResult() {
  if ((q1A === true || q1B === true || q1C === true) && (in2El.value > 0) && (in3El.value > 0) && 
  (q6A === true || q6B === true || q6C === true || q6D === true) && 
  (q7A === true || q7B === true || q7C === true || q7D === true) && 
  (q8A === true || q8B === true || q8C === true || q8D === true) && 
  (q9A === true || q9B === true || q9C === true || q9D === true) &&
  (q10A === true || q10B === true || q10C === true || q10D === true) && 
  (q11A === true || q11B === true || q11C === true || q11D === true) && 
  (q12A === true || q12B === true || q12C === true || q12D === true) && 
  (q13A === true || q13B === true || q13C === true || q13D === true) &&
  (q14A === true || q14B === true || q14C === true || q14D === true) && 
  (q15A === true || q15B === true || q15C === true || q15D === true) && 
  (q16A === true || q16B === true || q16C === true || q16D === true) && 
  (q17A === true || q17B === true || q17C === true || q17D === true) &&
  (q18A === true || q18B === true || q18C === true || q18D === true) && 
  (q19A === true || q19B === true || q19C === true || q19D === true) && 
  (q20A === true || q20B === true || q20C === true || q20D === true) && 
  (q21A === true || q21B === true || q21C === true || q21D === true) &&
  (q22A === true || q22B === true || q22C === true || q22D === true) && 
  (q23A === true || q23B === true || q23C === true || q23D === true) && 
  (q24A === true || q24B === true || q24C === true || q24D === true) && 
  (q25A === true || q25B === true || q25C === true || q25D === true) 
  ) {
  
  let bmi = in3El.value / ((in2El.value / 100)) ** 2
  if (bmi < 18.5) {
    scorebmi = 0;
  } else if (bmi >= 18.5 && bmi <= 25) {
    scorebmi = 1;
  } else if (bmi > 25) {
    scorebmi = 3;
  }

  if (q4A === true) {
    score4 = 0;
  } else if (q4B === true) {
    score4 = 5;
  }

   if (q5A === true) {
    score5 = 2;
  } else if (q5B === true) {
    score5 = 0;
  }

  if (q6A === true) {
    score6 = 0;
  } else if (q6B === true) {
    score6 = 1;
  } else if (q6C === true) {
    score6 = 2;
  } else if (q6D === true) {
    score6 = 3;
  }

  if (q7A === true) {
    score7 = 0;
  } else if (q7B === true) {
    score7 = 1;
  } else if (q7C === true) {
    score7 = 2;
  } else if (q7D === true) {
    score7 = 3;
  }

  if (q8A === true) {
    score8 = 0;
  } else if (q8B === true) {
    score8 = 1;
  } else if (q8C === true) {
    score8 = 2;
  } else if (q8D === true) {
    score8 = 3;
  }

  if (q9A === true) {
    score9 = 3;
  } else if (q9B === true) {
    score9 = 2;
  } else if (q9C === true) {
    score9 = 1;
  } else if (q9D === true) {
    score9 = 0;
  }

  if (q10A === true) {
    score10 = 0;
  } else if (q10B === true) {
    score10 = 1;
  } else if (q10C === true) {
    score10 = 2;
  } else if (q10D === true) {
    score10 = 3;
  }

  if (q11A === true) {
    score11 = 0;
  } else if (q11B === true) {
    score11 = 1;
  } else if (q11C === true) {
    score11 = 2;
  } else if (q11D === true) {
    score11 = 3;
  }

  if (q12A === true) {
    score12 = 0;
  } else if (q12B === true) {
    score12 = 1;
  } else if (q12C === true) {
    score12 = 2;
  } else if (q12D === true) {
    score12 = 3;
  }

  if (q13A === true) {
    score13 = 3;
  } else if (q13B === true) {
    score13 = 2;
  } else if (q13C === true) {
    score13 = 1;
  } else if (q13D === true) {
    score13 = 0;
  }

  if (q14A === true) {
    score14 = 0;
  } else if (q14B === true) {
    score14 = 1;
  } else if (q14C === true) {
    score14 = 2;
  } else if (q14D === true) {
    score14 = 3;
  }

  if (q15A === true) {
    score15 = 0;
  } else if (q15B === true) {
    score15 = 1;
  } else if (q15C === true) {
    score15 = 2;
  } else if (q15D === true) {
    score15 = 3;
  }

  if (q16A === true) {
    score16 = 0;
  } else if (q16B === true) {
    score16 = 1;
  } else if (q16C === true) {
    score16 = 2;
  } else if (q16D === true) {
    score16 = 3;
  }

  if (q17A === true) {
    score17 = 3;
  } else if (q17B === true) {
    score17 = 2;
  } else if (q17C === true) {
    score17 = 1;
  } else if (q17D === true) {
    score17 = 0;
  }

  if (q18A === true) {
    score18 = 0;
  } else if (q18B === true) {
    score18 = 1;
  } else if (q18C === true) {
    score18 = 2;
  } else if (q18D === true) {
    score18 = 3;
  }

  if (q19A === true) {
    score19 = 0;
  } else if (q19B === true) {
    score19 = 1;
  } else if (q19C === true) {
    score19 = 2;
  } else if (q19D === true) {
    score19 = 3;
  }

  if (q20A === true) {
    score20 = 0;
  } else if (q20B === true) {
    score20 = 1;
  } else if (q20C === true) {
    score20 = 2;
  } else if (q20D === true) {
    score20 = 3;
  }

  if (q21A === true) {
    score21 = 3;
  } else if (q21B === true) {
    score21 = 2;
  } else if (q21C === true) {
    score21 = 1;
  } else if (q21D === true) {
    score21 = 0;
  }

  if (q22A === true) {
    score22 = 0;
  } else if (q22B === true) {
    score22 = 1;
  } else if (q22C === true) {
    score22 = 2;
  } else if (q22D === true) {
    score22 = 3;
  }

  if (q23A === true) {
    score23 = 0;
  } else if (q23B === true) {
    score23 = 1;
  } else if (q23C === true) {
    score23 = 2;
  } else if (q23D === true) {
    score23 = 3;
  }

  if (q24A === true) {
    score24 = 0;
  } else if (q24B === true) {
    score24 = 1;
  } else if (q24C === true) {
    score24 = 2;
  } else if (q24D === true) {
    score24 = 3;
  }

  if (q25A === true) {
    score25 = 0;
  } else if (q25B === true) {
    score25 = 1;
  } else if (q25C === true) {
    score25 = 2;
  } else if (q25D === true) {
    score25 = 3;
  }

  let cesdScore = score6 + score7 + score8 + score9 + score10 + score11 + score12 + score13 + score14 + score15 + score16 + score17+ score18 + score19 + score20 + score21 + score22 + score23 + score24 + score25;

  if (cesdScore < 10) {
    finalcesdScore = 0;
  } else if (cesdScore >= 10) {
    finalcesdScore = 2;
  }

  let finalscore = score1 + scorebmi + score4 + score5 + finalcesdScore;

  if (finalscore <= 5) {
    finalCSGrade = 0;
  } else if (finalscore <= 7) {
    finalCSGrade = 1;
  } else if (finalscore <= 9) {
    finalCSGrade = 2;
  } else if (finalscore >= 10) {
    finalCSGrade = 3
  }

  document.getElementById("finalGrade").innerHTML = "eCS prediction risk grade: " + finalCSGrade;
  }

  else {
    document.getElementById("finalGrade").innerHTML = "You did not answer all of the questions."
  }
}