var createClosure = function() {
  var nonLocal = 1;
  var exec = function() {};

  return exec;
};

module.exports = {
  description: 'closure function',
  exec: createClosure()
};
