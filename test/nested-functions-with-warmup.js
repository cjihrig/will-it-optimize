module.exports = {
  description: 'nested function with warmup',
  warmup: [
    { args: [] },
    { args: [] }
  ],
  exec: function exec() {
    var nested = function() {};

    nested();
  }
};
