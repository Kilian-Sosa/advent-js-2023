# Challenge #24: 🏃‍♂️ Jump on the stairs

In the village of Santa, there is a magic staircase that leads to the toy factory 🧸. The elves, always looking to get exercise and have fun 🏃‍♂️, decide to jump the steps of the staircase.

They give us <code>steps</code> as the number of steps on the staircase and the maximum number of steps <code>maxJump</code> that an elf can jump in a single jump.

Your task is to help the elves find **all the possible sequences of jumps they can make to go up the staircase, sorted from least to most**. Considering that the elves can jump at most <code>maxJump</code> steps in a single jump (but they can jump fewer steps if they wish).

For example, if there is a staircase of <code>steps = 4</code> and <code>maxJump = 2</code> is the maximum number of steps that an elf can jump in a single jump, then there are five possible jumping sequences:

- <code>[1, 1, 1, 1]</code> (jumps 1 step 4 times)
- <code>[1, 1, 2]</code> (jumps 1 step 2 times and then 2 steps)
- <code>[1, 2, 1]</code> (jumps 1 step, then 2 steps and then 1 step)
- <code>[2, 1, 1]</code> (jumps 2 steps, then 1 step and then 1 step)
- <code>[2, 2]</code> (jumps 2 steps 2 times)

More examples:

```ts
getStaircasePaths(2, 1); // [[1, 1]]
getStaircasePaths(3, 3); // [[1, 1, 1], [1, 2], [2, 1], [3]]
getStaircasePaths(5, 1); // [[1, 1, 1, 1, 1]]
getStaircasePaths(5, 2);
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
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
