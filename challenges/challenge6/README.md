# Challenge 6

The elves are cataloging Santa's reindeer 🦌 based on the distance they can travel.

For this, they have a text string <code>movements</code> where each character represents the direction of the reindeer's movement:

- **> = Moves to the right**
- **< = Moves to the left**
- **\* = Can move forward or backward**

For example, if the movement is <code>>>\*<</code>, it goes to the right twice, then it can go either left or right (whichever maximizes the final traveled distance) and then left.

The elves want to know what the maximum distance the reindeer travels is **after completing all movements.**

**In the previous example, the maximum distance the reindeer travels is <code>2</code>**. It goes to the right twice <code>+2</code>, then with the <code>\*</code> it can go to the right again to maximize the distance <code>+1</code> and then it goes to the left <code>-1</code>.

Create a <code>maxDistance</code> function that takes the text string <code>movements</code> and returns **the maximum distance** that the reindeer can travel **in any direction**:

```ts
const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
```

> [!IMPORTANT]
> Keep in mind that it doesn't matter whether it is to the left or right, the distance is **the absolute value of the maximum distance traveled at the end of the movements**.

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
