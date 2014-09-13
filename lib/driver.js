process.on('message', function(msg) {
  var script = msg.test;
  var test = require(script);
  var exec = test.exec;
  var args = test.args || [];
  var optimizationStatus = -1;
  var error = null;

  try {
    // Fill type info
    exec.apply(null, args);

    // Attempt to optimize on next call
    %OptimizeFunctionOnNextCall(exec);

    // Make next call
    exec.apply(null, args);

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
