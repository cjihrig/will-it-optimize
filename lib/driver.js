process.on('message', function(msg) {
  var script = msg.test;
  var test = require(script);
  var exec = test.exec;
  var optimizationStatus = -1;
  var error = null;

  try {
    // Fill type info
    exec();

    // Attempt to optimize on next call
    %OptimizeFunctionOnNextCall(exec);

    // Make next call
    exec();

    // Determine optimization status
    optimizationStatus = %GetOptimizationStatus(exec);
  } catch (err) {
    error = err;
  }

  process.send({
    error: error,
    description: test.description,
    script: script,
    optimizationStatus: optimizationStatus
  });
});
