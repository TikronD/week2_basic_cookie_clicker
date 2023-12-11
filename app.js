// set variable that is set, not to be changed
const coin = document.querySelector(".coin");
const countUp = document.querySelector(".counter");
const multiplierDisplayLuigi = document.querySelector(".multi-luigi");
const multiplierDisplayToad = document.querySelector(".multi-toad");
const luigiBtn = document.querySelector(".luigi");
const toadBtn = document.querySelector(".toad");
const resetBtn = document.querySelector(".reset");
// variables that can be changed || = OR operator provides a default value if the first part is falsy
let counter = parseInt(localStorage.getItem("counter")) || 0;
let luigiCount = parseInt(localStorage.getItem("luigiCount")) || 0;
let toadCount = parseInt(localStorage.getItem("toadCount")) || 0;
let luigiUpgradeCost = parseInt(localStorage.getItem("luigiUpgradeCost")) || 10;
let toadUpgradeCost = parseInt(localStorage.getItem("toadUpgradeCost")) || 20;

let luigiDisplayCost = document.querySelector(".luigiDisplayCost");
let toadDisplayCost = document.querySelector(".toadDisplayCost");

// Update display with the retrieved values for local storage
countUp.textContent = counter;
multiplierDisplayLuigi.textContent = luigiCount;
multiplierDisplayToad.textContent = toadCount;
luigiDisplayCost.textContent = luigiUpgradeCost;
toadDisplayCost.textContent = toadUpgradeCost;

coin.addEventListener("click", function () {
  counter = counter + 1 + luigiCount;
  countUp.textContent = counter;
  updateLocalStorage();
});
// click hire luigi to show how many luigis we haven
luigiBtn.addEventListener("click", function () {
  if (counter >= luigiUpgradeCost) {
    luigiCount++;
    multiplierDisplayLuigi.textContent = luigiCount;
    counter = counter - luigiUpgradeCost;
    //update the counter on display
    countUp.textContent = counter;
    luigiUpgradeCost = Math.floor(luigiUpgradeCost * 1.5);
    luigiDisplayCost.textContent = luigiUpgradeCost;
    updateLocalStorage();
  }
});

toadBtn.addEventListener("click", function () {
  if (counter >= toadUpgradeCost) {
    toadCount++;
    multiplierDisplayToad.textContent = toadCount;
    counter = counter - toadUpgradeCost;
    countUp.textContent = counter;
    toadUpgradeCost = Math.floor(toadUpgradeCost * 1.5);
    toadDisplayCost.textContent = toadUpgradeCost;
    updateLocalStorage();
  }
});

setInterval(function () {
  counter = counter + toadCount;
  countUp.textContent = counter;
  updateLocalStorage();
}, 1000);

function updateLocalStorage() {
  localStorage.setItem("counter", counter);
  localStorage.setItem("luigiCount", luigiCount);
  localStorage.setItem("toadCount", toadCount);
  localStorage.setItem("luigiUpgradeCost", luigiUpgradeCost);
  localStorage.setItem("toadUpgradeCost", toadUpgradeCost);
}

resetBtn.addEventListener("click", function () {
  // localStorage.clear();

  // Reset both counter
  counter = 0;
  luigiCount = 0;
  toadCount = 0;
  luigiUpgradeCost = 10;
  toadUpgradeCost = 20;
  // and multiplier values
  multiplierDisplayLuigi.textContent = luigiCount;
  multiplierDisplayToad.textContent = toadCount;
  countUp.textContent = counter;
  luigiDisplayCost.textContent = luigiUpgradeCost;
  toadDisplayCost.textContent = toadUpgradeCost;
  // Update localStorage with the reset values
  updateLocalStorage();
});

//   // Reset both counter and multiplier values
//   counter = 0;
//   multiplier = 1;
//   multiplierDisplayLuigi.textContent = multiplier;
//   multiplierDisplayToad.textContent = multiplier;
//   countUp.textContent = counter;
//   clearInterval(intervalId); // Stop the interval (if it's running)
//   updateCounter(); // Start the counter update again
// });

// function updateMultiplier(multiplierDisplay) {
//   // multiplier++; // Increase the multiplier
//   multiplierDisplay.textContent = multiplier; // Update the display
// }
// loadFromLocalStorage();
// updateCounter(); // calls the updateCounter function

// // load .wav file
// // const clickSound = new Audio("./audio/audio_coin.wav");
// // Variable to store the interval ID
// let intervalId;
// // Initial multiplier value
// let multiplier = 1;
// // increment the counter by one each time it's called
// function addOne() {
//   counter += 1 * multiplier;
//   countUp.textContent = counter; // this line will update the html element class "counter" by +1
//   clickSound.play(); // each time a coin is added the .wav audio is played
//   localStorage.setItem("counter", counter); // Update localStorage when counter changes
// }
// // setting a click event, that will run the function addOne each time it's called
// coin.addEventListener("click", addOne);

// // UPGRADES
// // Function to increase Luigi multiplier by one
// function increaseLuigiMultiplier() {
//   multiplierDisplayLuigi.textContent = ++multiplier;
// }
// // Function to increase Toad multiplier by one
// function increaseToadMultiplier() {
//   multiplierDisplayToad.textContent = ++multiplier;
// }
// // Function for any character upgrades to update multiplier
// function hireCharacterClick(characterMultiplier, updateMultiplierFunction) {
//   counter += 10 * multiplier * characterMultiplier;
//   countUp.textContent = counter;
//   localStorage.setItem("counter", counter);
//   updateMultiplierFunction(); // Corrected function call
// }

// const luigiBtn = document.querySelector(".luigi");
// luigiBtn.addEventListener("click", function () {
//   hireCharacterClick(1, increaseLuigiMultiplier);
// });

// const toadBtn = document.querySelector(".toad");
// toadBtn.addEventListener("click", function () {
//   hireCharacterClick(2, increaseToadMultiplier);
// });

// function updateCounter() {
//   intervalId = setInterval(addOne, 1000 / multiplier);
// }

// // function to get the counter from storage
// function loadFromLocalStorage() {
//   const localCounter = localStorage.getItem("counter");
//   if (localCounter !== null) {
//     counter = parseInt(localCounter);
//     countUp.textContent = counter;
//     updateMultiplier(multiplierDisplayLuigi);
//     updateMultiplier(multiplierDisplayToad);
//   }
// }

// resetBtn.addEventListener("click", function () {
//   localStorage.clear(); // Clear localStorage

//   // Reset both counter and multiplier values
//   counter = 0;
//   multiplier = 1;
//   multiplierDisplayLuigi.textContent = multiplier;
//   multiplierDisplayToad.textContent = multiplier;
//   countUp.textContent = counter;
//   clearInterval(intervalId); // Stop the interval (if it's running)
//   updateCounter(); // Start the counter update again
// });

// function updateMultiplier(multiplierDisplay) {
//   // multiplier++; // Increase the multiplier
//   multiplierDisplay.textContent = multiplier; // Update the display
// }
// loadFromLocalStorage();
// updateCounter(); // calls the updateCounter function

// // The multiplier for Toad does not work, it continues the multiplier where luigi currently is set to. I would like to run the multiplier in the same function just wth a different parameters to reduce code - only if that is possible using a generatic function that takes a number parameter, and increase the multiplier

// // I haven't been able looking into reducing the coin value when purchasing the Toad multiplier (or Princess/Koopa which are not done yet - the code get's to messy without the above point of a generic function

// // localStorage.clear();
