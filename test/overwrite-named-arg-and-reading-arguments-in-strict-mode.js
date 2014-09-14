module.exports = {
  description: 'overwrite named function argument and read `arguments` while in strict mode',
  args: ['arg0'],
  exec: function exec(arg0) {
    // See https://github.com/joyent/node/pull/8302#issuecomment-54331801
    'use strict';
    var foo = arguments[0];

    arg0 = 'foo';
  }
};
