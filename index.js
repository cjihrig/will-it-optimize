var cp = require('child_process');
var path = require('path');
var driver = path.join(__dirname, 'lib', 'driver.js');
var testsStarted = 0;
var testsFinished = 0;
var child = child = cp.fork(driver, {
  execArgv: ['--allow-natives-syntax']
});

child.on('message', function(msg) {
  testsFinished++;
  console.log(msg);

  if (testsStarted === testsFinished) {
    child.disconnect();
  }
});

// TODO: this should be read from the tests directory
var TESTS = ['noop',
              'access-non-existent-arguments-index',
              'access-valid-arguments-index',
              'assign-to-arguments',
              'debugger',
              'eval',
              'leaks-arguments-via-closure',
              'manually-copy-arguments',
              'pass-arguments-to-call',
              'return-arguments',
              'switch-with-128-cases',
              'switch-with-over-128-cases',
              'try-catch-finally',
              'try-catch',
              'try-finally',
              'with'];

if (TESTS.length === 0) {
  // TODO: handle case where no tests are run
}

for (var i = 0, il = TESTS.length; i < il; ++i) {
  testsStarted++;
  child.send({
    test: path.join(__dirname, 'test', TESTS[i])
  });
}
