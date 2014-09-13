module.exports = {
  description: 'leaks `arguments` via a closure',
  exec: function exec() {
    var args = arguments;

    return function() {
      return args;
    }
  }
};
