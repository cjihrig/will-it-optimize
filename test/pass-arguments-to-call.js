module.exports = {
  description: 'pass `arguments` to `call()`',
  exec: function exec() {
    Array.prototype.slice.call(arguments);
  }
};
