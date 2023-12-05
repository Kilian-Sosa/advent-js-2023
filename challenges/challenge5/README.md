# Challenge 5

Santa 🎅 is testing his new electric sleigh, the _CyberReindeer_, on a North Pole road. The road is represented by a string of characters, where:

- <code>.</code> = Road
- <code>S</code> = Santa's Sleigh

- <code>\*</code> = Open barrier
- <code>|</code> = Closed barrier

Example road: <code>S...|....|.....</code>

Each unit of time, **the sleigh moves one position to the right**. If it encounters a closed barrier, it stops until the barrier opens. If it's open, it passes through directly.

**All barriers start closed**, but after 5 units of time, they open forever.

**Create a function that simulates the sleigh's movement** for a given time and **returns an array** of strings representing the state of the road at each unit of time:

```ts
const road = "S..|...|..";
const time = 10; // Time units
const result = cyberReindeer(road, time);

/* -> result:
[
  'S..|...|..', // Initial state
  '.S.|...|..', // Sled advances along the road
  '..S|...|..', // Sled advances along the road
  '..S|...|..', // Sled stops at the barrier
  '..S|...|..', // Sled stops at the barrier
  '...S...*..', // Barrier opens, sled advances
  '...*S..*..', // Sled advances along the road
  '...*.S.*..', // Sled advances along the road
  '...*..S*..', // Sled advances along the road
  '...*...S..', // Advances through the open barrier
]
*/
```

The result is an **array where each element shows the road at each unit of time**.

Note that **if the sleigh is in the same position as a barrier**, it takes its place in the array.

The elves were **inspired by this [Code Wars challenge](https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript)**.

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
