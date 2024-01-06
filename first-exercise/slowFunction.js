function slowFunction(arraySize) {
  let sum = 0;
  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize; j++) {
      sum += i + j;
    }
  }
  return sum;
}

module.exports = { slowFunction };
