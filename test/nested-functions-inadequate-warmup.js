module.exports = {
  description: 'nested function with inadequate warmup',
  exec: function exec() {
    var nested = function() {};

    nested();
  }
};
