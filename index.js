const classification = require('./functions/classification');

const fizzbuzzClassification = new classification();

async function fizzBuzzListing() {
  let position = 0;
  fizzBuzzResult = [];
  for (position; position <= 100; position++) {
    fizzBuzzResult[position] = fizzbuzzClassification.fizzbuzz(position);
  }
  fizzBuzzResult.shift();
  return fizzBuzzResult;
}

module.exports = {
  fizzBuzzListing: fizzBuzzListing,
};
