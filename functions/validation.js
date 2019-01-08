class Validator {
  constructor() {}
  divisibleByThree(position) {
    if (position % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  divisibleByFive(position) {
    if (position % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Validator;
