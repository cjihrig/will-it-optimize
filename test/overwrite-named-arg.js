module.exports = {
  description: 'overwrite named function argument',
  args: ['arg0'],
  exec: function exec(arg0) {
    arg0 = 'foo';
  }
};
