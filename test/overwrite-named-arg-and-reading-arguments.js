module.exports = {
  description: 'overwrite named function argument and read `arguments`',
  args: ['arg0'],
  exec: function exec(arg0) {
    var foo = arguments[0];

    arg0 = 'foo';
  }
};
