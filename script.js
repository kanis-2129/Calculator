const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display-ans");

let currentInput = "";
buttons.forEach((button) => {
  button.addEventListener("click", (err) => {

    const value = button.innerText;

    display.value = currentInput;
    console.log(currentInput, err);

    if (value === "C") {
      currentInput = "";
    } else if (value === "del") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      let expression = currentInput.replace(/[Xx]/g, "*").replace(/÷/g, "/");
      currentInput = eval(expression);
      currentInput = currentInput.toString();
    } else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});

// const themeMoon = document.getElementById("moon");
// const themeSun = document.getElementById("sun");
// const themeChangeBtn = document.querySelectorAll(".themeBtn");

// themeChangeBtn.forEach((themeBtn) => {
//   themeBtn.addEventListener("click", () => {
//     document
//       .querySelector(".calculator-container")
//       .classList.toggle("dark-theme");
//     document.querySelector(".display-ans").classList.toggle("dark-theme");
//   });
// });
