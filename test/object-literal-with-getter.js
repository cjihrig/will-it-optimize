module.exports = {
  description: 'object literal containing a getter',
  exec: function exec() {
    var obj = {
      get prop() {
        return 1;
      }
    };
  }
};
