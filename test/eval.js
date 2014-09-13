module.exports = {
  description: 'calls `eval()`',
  exec: function exec() {
    eval('var foo = 5;');
  }
};
