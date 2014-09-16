process.on('message', function(msg) {
  var script = msg.test;
  var test = require(script);
  var exec = test.exec;
  var warmup = test.warmup;
  var args = test.args || [];
  var optimizationStatus = -1;
  var error = null;

  try {
    // Fill type info
    if (Array.isArray(warmup)) {
      for (var i = 0, il = warmup.length; i < il; ++i) {
        var warmupIter = warmup[i];

        // TODO: verify that warmupIter is an object
        exec.apply(null, warmupIter.args);
      }
    } else {
      exec.apply(null, args);
    }

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
