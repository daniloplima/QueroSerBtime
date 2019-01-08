const arrayGenerator = require('./functions/arrayGenerator');

const numbers = [];

const arrayGeneration = new arrayGenerator();
const fizzbuzzResult = arrayGeneration.fizzbuzz(numbers);

console.log(fizzbuzzResult);
