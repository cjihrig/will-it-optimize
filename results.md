Node v0.11.13

```sh
access non-existent index of `arguments`: not optimized
access valid index of `arguments`: optimized
assign to `arguments`: not optimized
function is bound using `Function.prototype.bind()`: not optimized
calls `Function.prototype.bind()`: optimized
closure function: optimized
`debugger` statement: not optimized
calls `eval()`: not optimized
`for...in` loop using an array: not optimized
`for...in` loop whose key exists in outer scope: not optimized
`for...in` loop without simple enumerable: not optimized
`for...in` loop: optimized
leaks `arguments` via a closure: not optimized
manually copy `arguments`: optimized
nested function with inadequate warmup: not optimized
nested function with warmup: optimized
empty function: optimized
object literal containing a getter: not optimized
object literal containing a setter: not optimized
overwrite named function argument and read `arguments` while in strict mode: optimized
overwrite named function argument and read `arguments`: not optimized
overwrite named function argument: optimized
pass `arguments` to `call()`: not optimized
return `arguments`: not optimized
`switch` statement with 128 cases: optimized
`switch` statement with over 128 cases: not optimized
`try...catch...finally` statement: not optimized
`try...catch` statement: not optimized
`try...finally` statement: not optimized
`with` statement: not optimized
```
