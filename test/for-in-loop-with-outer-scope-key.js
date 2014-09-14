var key;

module.exports = {
  description: '`for...in` loop whose key exists in outer scope',
  exec: function exec() {
    var obj = {};

    for (key in obj) {}
  }
};
