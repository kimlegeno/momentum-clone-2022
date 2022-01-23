const calculator = document.querySelector(".calculator"); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const buttons = calculator.querySelector(".calculator__buttons"); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const operator = document.querySelector(".calculator__operator"); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있음.
const display = document.querySelector(".calculator__output"); //

function calculate(n1, operator, n2) {
  let result = 0;
  if (operator === "+") {
    result = Number(n1) + Number(n2);
  } else if (operator === "-") {
    result = Number(n1) - Number(n2);
  } else if (operator === "*") {
    result = Number(n1) * Number(n2);
  }
  if (operator === "/") {
    result = Number(n1) / Number(n2);
  }
  return String(result);
}

let firstNum = "";
let operatorForAdvanced = "";
let previousKey = "";
let previousNum = "";

buttons.addEventListener("click", function (event) {
  const target = event.target;
  const action = target.classList[0];
  const buttonContent = target.textContent;
  if (target.matches("button")) {
    if (action === "number") {
      if (display.textContent === "0" && operatorForAdvanced === "") {
        display.textContent = buttonContent;
        firstNum = display.textContent;
      } else if (display.textContent !== "0" && operatorForAdvanced === "") {
        display.textContent = display.textContent + buttonContent;

        firstNum = display.textContent;
      } else if (display.textContent !== "0" && operatorForAdvanced !== "") {
        if (previousKey === operatorForAdvanced) {
          display.textContent = buttonContent;
          previousKey = display.textContent;
          previousNum = display.textContent;
        } else if (previousKey !== operatorForAdvanced) {
          display.textContent = display.textContent + buttonContent;
          previousNum = display.textContent;
        }
      }
    }

    if (action === "operator") {
      operatorForAdvanced = buttonContent;
      previousKey = operatorForAdvanced;
      display.textContent = buttonContent;
    }

    if (action === "clear") {
      display.textContent = "0";
      firstNum = "";
      previousNum = "";
      operatorForAdvanced = "";
      previousKey = "";
    }

    if (action === "calculate") {
      if (firstNum !== "" && operatorForAdvanced === "") {
        display.textContent = firstNum;
      } else if (firstNum !== "" && previousNum === "") {
        display.textContent = calculate(
          display.textContent,
          operatorForAdvanced,
          display.textContent
        );
      } else if (previousKey === display.textContent) {
        display.textContent = calculate(
          firstNum,
          operatorForAdvanced,
          previousNum
        );
      } else if (previousKey !== display.textContent && previousNum !== "") {
        display.textContent = calculate(
          display.textContent,
          operatorForAdvanced,
          previousNum
        );
      } else if (previousKey !== display.textContent && previousNum === "") {
        display.textContent = firstNum;
      }
      setTimeout(
        "alert('If you want to use the calculator again, please press the reset button.')",
        10
      );
    }
  }
});
