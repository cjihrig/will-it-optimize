module.exports = {
  description: '`for...in` loop without simple enumerable',
  exec: function exec() {
    var obj = {
      prop: 'val'
    };

    // Deleting a property puts object in hash table mode.
    // Can be verified if `%HasFastProperties(obj) === false`
    delete obj.prop;

    for (var key in obj) {}
  }
};
