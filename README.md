# will-it-optimize

I don't care [if something will blend](http://www.willitblend.com/) (well, I kind of do). I want to know if something can be optimized by v8. `will-it-optimize` reports whether or not a function can be optimized based on its contents. Hopefully, this will make it easier to track what can be optimized in various versions of node.js without paying extremely close attention to the v8 codebase.

## Running the Tests

`npm start`

## Test Structure

A test is defined by the `module.exports` object. The following properties are supported:

- `description` - A written description of the test. Markdown is allowed.
- `exec` - The test code to execute.

There are plans to support passing arguments to the tests (for `arguments` testing), and possibly setup code if it is deemed necessary.

An example test is shown below.

```javascript
module.exports = {
  description: '`with` statement',
  exec: function exec() {
    with ({}) {}
  }
};
```
