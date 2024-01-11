"use strict";

const counter_txt = document.getElementById("counter_txt");
const counter_button_minus = document.getElementById("counter_button_minus");
const counter_button_plus = document.getElementById("counter_button_plus");
const counter = 0;

counter_button_plus.addEventListener("click", function () {
  counter++;
  counter_txt.innerText = counter;
});

counter_button_minus.addEventListener("click", function () {
  counter--;
  counter_txt.innerText = counter;
});

const txtArray = ["hallo", "Ich", "bin", "da"];

const addTxtButton = document.getElementById("button");
addTxtButton.addEventListener("click", addingFunction);

function addingFunction() {
  const txtField = document.getElementById("txtField");
  txtField.innerText = txtArray[Math.floor(Math.random() * txtArray.length)];
}
