var exec = function() {};

module.exports = {
  description: 'function is bound using `Function.prototype.bind()`',
  exec: exec.bind(null)
};
