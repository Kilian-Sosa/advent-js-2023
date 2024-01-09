# Challenge #22: 🚂 Programming language

In Santa's toy factory, **the elves are developing a programming language called Santa.js** 👨‍💻👩‍💻 based on symbols to control their toy machines 🚂.

They have created a simple instruction system and need your help to build a **compiler that interprets these symbols**.

The compiler works with a counter that initially has a value of <code>0</code>. **The instructions will modify the value of this counter**.

Elves' language instructions based on symbols:

- **<code>+</code>: Increments the counter value by <code>1</code>.**
- **<code>\*</code>: Multiplies the counter value by <code>2</code>.**
- **<code>-</code>: Subtracts <code>1</code> from the counter value.**
- **<code>%</code>: Mark a return point. Does not modify the counter.**
- **<code>\<</code>: Go back once to the last instruction with the <code>%</code> symbol it has seen. If there is no previous <code>%</code>, it does nothing.**
- **<code>¿</code>: Starts a conditional block that executes if the counter is greater than <code>0</code>.**
- **<code>?</code>: Ends a conditional block.**

Create a <code>compile</code> function that receives a string with the language instructions and returns the result of executing them. Here are some examples:

```ts
compile("++_-"); // 3
// (1 + 1) _ 2 - 1 = 3

compile("++%++<"); // 6
// 1 + 1 + 1 + 1 + 1 + 1 = 6

compile("++<--"); // 0
// 1 + 1 - 1 - 1 = 0

compile("++¿+?"); // 3
// 1 + 1 + 1 = 3

compile("--¿+++?"); // -2
// - 1 - 1 = -2
```

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
