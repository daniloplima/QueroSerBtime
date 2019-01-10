class Validator {
  divisibleByThree(position) {
    if (position % 3 === 0) return true;

    return false;
  }
  divisibleByFive(position) {
    if (position % 5 === 0) return true;

    return false;
  }
}

module.exports = Validator;
