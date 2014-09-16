module.exports = {
  description: 'calls `Function.prototype.bind()`',
  exec: function exec() {
    var fn = function() {};

    fn.bind(null, 1, 2, 3);
  }
};
