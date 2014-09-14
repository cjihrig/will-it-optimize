module.exports = {
  description: '`for...in` loop',
  exec: function exec() {
    var obj = {};

    for (var key in obj) {}
  }
};
