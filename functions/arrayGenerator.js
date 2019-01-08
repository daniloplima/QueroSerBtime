const validator = require('./validation');

class ArrayGenerator {
  constructor() {}
  fizzbuzz(numbers) {
    let position;
    for (position = 0; position <= 100; position++) {
      const validation = new validator();
      let divisibleByFive = validation.divisibleByFive(position);
      let dividibleByThree = validation.divisibleByThree(position);
      if (dividibleByThree && divisibleByFive) {
        numbers[position] = 'FizzBuzz';
      } else if (dividibleByThree) {
        numbers[position] = 'Fizz';
      } else if (divisibleByFive) {
        numbers[position] = 'Buzz';
      } else {
        numbers[position] = position;
      }
    }
    return numbers;
  }
}

module.exports = ArrayGenerator;
