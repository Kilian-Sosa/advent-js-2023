# Challenge #17: 🛷 Optimizing the rental

In _Rovaniemi, Finland_ 🇫🇮, sleds 🛷 are rented by time intervals. **Each interval is represented as an array of two elements**, where the first element is the start of the rental and the second one is the end.

For example, the array <code>[2, 7]</code> represents a rental that begins at hour <code>2</code> and ends at hour <code>7</code>. The problem is that sometimes the intervals overlap with each other, making it confusing to figure out from what time to what time the sled was rented.

We're asked to, in order to simplify the task of calculating the total rental time, **write a function that merges all overlapping intervals** and **returns an array of sorted intervals**:

```ts
optimizeIntervals([
  [5, 8],
  [2, 7],
  [3, 4],
]); // [[2, 8]]

optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6],
]); // [[1, 6], [8, 10]]

optimizeIntervals([
  [3, 4],
  [1, 2],
  [5, 6],
]); // [[1, 2], [3, 4], [5, 6]]
```

You can assume that **the first element of each interval is always less than or equal to the second element**. But **the intervals are not necessarily sorted**.

The hour numbers can go up to the figure <code>9999</code>.

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
