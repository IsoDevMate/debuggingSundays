function calculateFactorial(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * calculateFactorial(num - 1));
  }
}

function printFactorial() {
  let inputNum = prompt("Enter a positive integer:");
  let factorial = calculateFactorial(inputNum);
  console.log(`The factorial of ${inputNum} is ${factorial}.`);
}

printFactorial();
//above is the ai gnerated code still working on the soln