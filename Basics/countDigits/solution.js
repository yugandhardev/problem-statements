function countDigits(n) {
  n = Math.abs(n);
  if (n == 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
  //return Math.abs(n).toString().length;
}

function runTests() {
  let testcases = [
    { input: 0, expected: 1 },
    { input: 5000, expected: 4 },
    { input: -5, expected: 1 },
  ];
  testcases.forEach(({ input, expected }, index) => {
    let result = countDigits(input);
    console.log(
      `Test Case ${index + 1}: Input(${input}) => Expected(${expected}) | Got(${result}) | ${result === expected ? "PASS" : "FAIL"}`,
    );
  });
}
runTests();
