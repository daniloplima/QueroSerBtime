const validator = require('./validation');

class Classification {
  fizzbuzz(position) {
    const validation = new validator();
    let divisibleByFive = validation.divisibleByFive(position);
    let dividibleByThree = validation.divisibleByThree(position);

    if (dividibleByThree && divisibleByFive) return 'FizzBuzz';

    if (dividibleByThree) return 'Fizz';

    if (divisibleByFive) return 'Buzz';

    return position;
  }
}

module.exports = Classification;
