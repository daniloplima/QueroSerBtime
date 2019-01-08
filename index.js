const arrayGenerator = require('./functions/arrayGenerator');

const arrayGeneration = new arrayGenerator();
const fizzbuzzResult = arrayGeneration.fizzbuzz();

let beginning = 1;
for (beginning; beginning <= 100; beginning++) {
  console.log(fizzbuzzResult[beginning]);
}
