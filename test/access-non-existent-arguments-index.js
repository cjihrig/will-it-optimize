module.exports = {
  description: 'access non-existent index of `arguments`',
  exec: function exec(/* no arguments */) {
    var arg = arguments[1];
  }
};
