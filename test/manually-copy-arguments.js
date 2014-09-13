module.exports = {
  description: 'manually copy `arguments`',
  args: ['arg0', true, {}, []],
  exec: function exec() {
    var length = arguments.length;
    var args = new Array(length);

    for (var i = 0; i < length; ++i) {
      args[i] = arguments[i];
    }

    return args;
  }
};
