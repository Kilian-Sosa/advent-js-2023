# Challenge #15: ↔️ Autonomous robot

We are programming some **robots** called giftbot 🤖🎁 that autonomously navigate gift warehouses.

We are creating a function to which we pass: the _warehouse_ 🏬 they must navigate and the **movements** ↔️ they can make.

The _warehouse_ is represented as an **array of text strings**, where:

- **<code>.</code> means there is a clear path.**
- **<code>\*</code> means there is an obstacle.**
- **<code>!</code> is the robot's initial position.**

The movements are an **array of text strings**, where:

- **<code>R</code> moves the robot one position to the right.**
- **<code>L</code> moves the robot one position to the left.**
- **<code>U</code> moves the robot one position upwards.**
- **<code>D</code> moves the robot one position downwards.**

It must be taken into account that **the robot cannot overcome obstacles or the warehouse boundaries.**

Given a warehouse and the movements, we need to return the array with the robot's final position.

```ts
const store = ["..!....", "...*.*."];

const movements = ["R", "R", "D", "L"];
const result = autonomousDrive(store, movements);
console.log(result);
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.
```

Keep in mind that the <code>store</code> is **an array that can have a number of rows ranging from 1 to 100**, as we have warehouses of all sizes.

Also note that the robot **might end up in its initial position** if it can't move or if it's going around in circles.

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```