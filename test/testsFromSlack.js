let calculateAge = require('../spaceAgeCalculator.js');

runTests(calculateAge, [
  [
    1000000000,
    {
      earth: 31.69,
      jupiter: 2.67,
      mars: 16.85,
      mercury: 131.57,
      neptune: 0.19,
      saturn: 1.08,
      uranus: 0.38,
      venus: 51.51
    }
  ],
  [
    1827392819,
    {
      earth: 57.91,
      jupiter: 4.88,
      mars: 30.79,
      mercury: 240.43,
      neptune: 0.35,
      saturn: 1.97,
      uranus: 0.69,
      venus: 94.13
    }
  ],
  [
    999999999.999,
    {
      earth: 31.69,
      jupiter: 2.67,
      mars: 16.85,
      mercury: 131.57,
      neptune: 0.19,
      saturn: 1.08,
      uranus: 0.38,
      venus: 51.51
    }
  ],
  [
    "Not a number",
    {
      earth: 0,
      jupiter: 0,
      mars: 0,
      mercury: 0,
      neptune: 0,
      saturn: 0,
      uranus: 0,
      venus: 0
    }
  ]
]);

function runTests(func, tests) {
  const failed = tests.filter((test, index) => {
    const expected = test[1];
    const actual = func(test[0]);
    let passed = true;

    for (let key in expected) {
      if (expected[key] !== actual[key]) {
        passed = false;
        console.log(`Failed #${index}: ${test[0]}`);
        console.log(`Expected: ${expected[key]} for ${key}`);
        console.log(`Actual: ${actual[key]}`);
      }
    }

    return !passed;
  });

  if (failed.length === 0) {
    console.log("Congratulations, you passed every test!");
  } else {
    console.log(`Failed ${failed.length} test(s), try again!`);
  }
}