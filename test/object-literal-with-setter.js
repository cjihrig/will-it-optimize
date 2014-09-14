module.exports = {
  description: 'object literal containing a setter',
  exec: function exec() {
    var obj = {
      set prop(value) {
      }
    };
  }
};
