module.exports = {
  description: 'access valid index of `arguments`',
  args: ['arg0'],
  exec: function exec(/* arg0 */) {
    var arg0 = arguments[0];
  }
};
