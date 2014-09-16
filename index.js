var cp = require('child_process');
var fs = require('fs');
var path = require('path');
var runner = {
  loaded: false,
  started: 0,
  finished: 0,
  tests: [],
  testDir: path.join(__dirname, 'test'),
  driverPath: path.join(__dirname, 'lib', 'driver.js'),
  driver: null,
  startDriver: function(callback) {
    var self = this;

    this.driver = cp.fork(this.driverPath, {
      execArgv: ['--allow-natives-syntax', '--harmony']
    });

    this.driver.on('message', function(msg) {
      self.tests[self.finished] = msg;
      self.finished++;

      if (self.done()) {
        self.driver.disconnect();
        self.output();
      }
    });

    if (callback) {
      process.nextTick(callback);
    }
  },
  loadTests: function(callback) {
    var self = this;

    fs.readdir(this.testDir, function(error, files) {
      if (error) {
        return callback(error);
      }

      for (var i = 0, il = files.length; i < il; ++i) {
        var test = path.join(self.testDir, files[i]);

        // TODO: verify that test is a file
        // currently, nested directories are not supported

        self.started++;
        self.driver.send({
          test: test
        });
      }

      self.loaded = true;

      if (callback) {
        callback();
      }
    });
  },
  done: function() {
    return this.loaded && this.started === this.finished;
  },
  output: function() {
    var getOptimizationStatus = function(statusCode, useColors) {
      var colorMap = {
        black: 0,
        gray: 90,
        red: 31,
        green: 32,
        yellow: 33
      };
      var status = 'unknown';
      var color = 'gray';

      switch (statusCode) {
        case 1:
          status = 'optimized';
          color = 'green';
          break;
        case 2:
          status = 'not optimized';
          color = 'red';
          break;
        case 3:
          status = 'always optimized';
          color = 'green';
          break;
        case 4:
          status = 'never optimized';
          color = 'red';
          break;
        case 5:
          status = 'maybe deoptimized';
          color = 'yellow';
          break;
      }

      if (useColors) {
        return '\u001b[' + colorMap[color] + 'm' + status + '\u001b[0m';
      } else {
        return status;
      }
    };

    for (var i = 0, il = this.tests.length; i < il; ++i) {
      var result = this.tests[i];

      if (result.error) {
        console.error(result.description + ': ' + result.error.message);
      } else {
        console.log(result.description + ': ' + getOptimizationStatus(result.optimizationStatus, true));
      }
    }
  }
};

runner.startDriver(function() {
  runner.loadTests();
});
