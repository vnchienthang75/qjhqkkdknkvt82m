"use strict";

const letters = "abcdefghijklmnopqrstuvwxyz";
const upercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "~`!@#$%^&*()[]{}:;<>,.?/|+-_=";

function RandomString(stringSet, numbersStringSet) {
  let result = "";
  for (let i = 0; i < numbersStringSet; i++) {
    const rand = Math.random();
    const randomIndex = Math.floor(rand * stringSet.length);
    result += stringSet[randomIndex];
  }
  return result;
}

const userId =
  RandomString(letters, 1) + RandomString(letters + numbers, 14) + "@gmail.com";
const pasword = RandomString(
  letters + upercaseLetters + numbers + specialChars,
  99,
);

console.log("userId.length: ", userId.length);
console.log("password.length:", pasword.length);

const id = document.querySelector("#id");
const pass = document.querySelector("#pass");

id.innerHTML = userId;
pass.innerHTML = pasword;
