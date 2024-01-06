const { slowFunction } = require("./slowFunction");
const { performance, PerformanceObserver } = require("perf_hooks");

function main() {
  const arraySize = 100;

  // Create an observer for performance measures and log them
  const obs = new PerformanceObserver((items) => {
    items.getEntries().forEach((entry) => {
      console.log(`${entry.name}: ${entry.duration} milliseconds`);
    });
  });
  obs.observe({ entryTypes: ["measure"] });

  // Start measuring time
  performance.mark("startTask");

  // Call the slow function
  const result = slowFunction(arraySize);

  // End measuring time
  performance.mark("endTask");

  // Measure the duration between marks
  performance.measure("myTask", "startTask", "endTask");
}

main();
