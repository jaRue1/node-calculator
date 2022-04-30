const prompt = require("prompt-sync")()

for (let exit = 1; exit > 0; ) {
  console.log("Restarting App ")
  console.log("")
  // Intro
  console.log("Starting NODE Calculator APP !")
  console.log("-------------------------------")

  // // Ask for user name
  const userName = prompt("What is your name ? ")
  console.log("")
  console.log("Hello " + userName)
  console.log("-------------------------------")
  // // Ask what a operation they want to complete
  console.log("Enter 1 for addition")
  console.log("Enter 2 for subtraction")
  console.log("Enter 3 for multiplication")
  console.log("Enter 4 for division")
  console.log("-------------------------------")
  const operation = prompt(
    "Hey " + userName + " what operation would you like to complete ? "
  )
  console.log("-------------------------------")
  // Ask user for first number
  const firstNumber = prompt("Enter first number ")
  // adding space
  console.log("")
  // // Ask user for second number
  const secondNumber = prompt("Enter second number ")

  if (Number(operation) === 1) {
    const result = add(Number(firstNumber), Number(secondNumber))
    function add(num1, num2) {
      return num1 + num2
    }
    // complete operation / display output
    console.log("")
    console.log(`------------- ${userName}'s Result ! ------------------`)
    console.log("")
    console.log(
      "                " + firstNumber + " + " + secondNumber + " = " + result
    )
    // adding space
    console.log("")
    console.log("------------- Addition Complete ! --------------")
  }
  if (Number(operation) === 2) {
    const result = subtract(firstNumber, secondNumber)
    function subtract(num1, num2) {
      return num1 - num2
    }
    // complete operation / display output
    console.log("")
    console.log(`------------- ${userName}'s Result ! ------------------`)
    console.log("")
    console.log(
      "                " + firstNumber + " - " + secondNumber + " = " + result
    )
    // adding space
    console.log("")
    console.log("------------- Subtraction Complete ! --------------")
  }

  if (Number(operation) === 3) {
    const result = multiply(firstNumber, secondNumber)
    function multiply(num1, num2) {
      return num1 * num2
    }
    // complete operation / display output
    console.log("")
    console.log(`------------- ${userName}'s Result ! ------------------`)
    console.log("")
    console.log(
      "                " + firstNumber + " * " + secondNumber + " = " + result
    )
    // adding space
    console.log("")
    console.log("------------- Multiplication Complete ! --------------")
  }

  if (Number(operation) === 4) {
    const result = divide(firstNumber, secondNumber)
    function divide(num1, num2) {
      return num1 / num2
    }
    // complete operation / display output
    console.log("")
    console.log(`------------- ${userName}'s Result ! ------------------`)
    console.log("")
    console.log(
      "                " + firstNumber + " / " + secondNumber + " = " + result
    )
    // adding space
    console.log("")
    console.log("------------- Division Complete ! --------------")
  }

  // ask user if they want to run again or exit
  console.log("")
  console.log("Press 0 to exit or 1 to restart")
  console.log("")
  let val = prompt("Do you want to complete another operation ? ")

  exit = Number(val)
}
console.log("")
console.log("Exited NODE Calculator App")
