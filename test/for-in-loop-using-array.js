module.exports = {
  description: '`for...in` loop using an array',
  exec: function exec() {
    var arr = [1, 2];

    for (var key in arr) {}
  }
};
