const { slowFunction } = require("./slowFunction");
const { performance } = require("perf_hooks");

function main() {
  const arraySize = 100;

  // Start measuring time
  performance.mark("startTask");
  // ... task code ...

  // Call the slow function
  const result = slowFunction(arraySize);

  performance.mark("endTask");

  // Stop measuring time
  performance.measure("myTask", "startTask", "endTask");
}

main();
