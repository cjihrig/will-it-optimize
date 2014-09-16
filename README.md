# will-it-optimize

[![Current Version](https://img.shields.io/npm/v/will-it-optimize.svg)](https://www.npmjs.org/package/will-it-optimize)

I don't care [if something will blend](http://www.willitblend.com/) (well, I kind of do). I want to know if something can be optimized by v8. `will-it-optimize` reports whether or not a function can be optimized based on its contents. Hopefully, this will make it easier to track what can be optimized in various versions of node.js without paying extremely close attention to the v8 codebase.

## Running the Tests

`npm start`

## Test Structure

A test is defined by the `module.exports` object. The following properties are supported:

- `description` - String. A written description of the test. Markdown is allowed.
- `exec` - Function. The test code to execute.
- `args` - Optional Array. Arguments passed to the test code.
- `warmup` - Optional Array. Array of objects used to warmup v8. If `warmup` is not specified, the test function will be invoked once using `args` as the arguments. Each object in the array results in an invocation of the test function. This is used to fill in v8's type info. Each object may contain the following fields:
  - `args` - Optional Array. Arguments passed to the test code on the given warmup iteration.

An example test is shown below. This will execute a function containing a `with` statement, which v8 cannot currently optimize.

```javascript
module.exports = {
  description: '`with` statement',
  exec: function exec() {
    with ({}) {}
  }
};
```

## Required Reading

- [Optimization killers](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers)
- [Benchmark: Array-ification of arguments](http://blog.izs.me/post/7746314700/benchmark-array-ification-of-arguments)
- [Arguments Object: Doctor Jekyll and Mister Hyde](https://plus.google.com/+VyacheslavEgorov/posts/ikjTyY6UKcE)
- [mraleph emit hack](https://github.com/joyent/node/commit/91f1b250ecb4fb8151cd17423dd4460652d0ce97)
