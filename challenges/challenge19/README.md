# Challenge #19: 💣 Face the sabotage

Alert at Santa's toy factory! The **Grinch** 😈 has infiltrated the warehouse and sabotaged some of the toys 💣.

**The elves need help to find the sabotaged toys** and remove them before Christmas comes. For this, we have the warehouse map 🗺️, which is a matrix.

The <code>\*</code> represent the _sabotaged toys_, and empty cells with a blank space are _safe_ places.

Your task is to write **a function that returns the same matrix but, at each position, shows us the number of sabotaged toys in the adjacent cells**.

If a cell contains a sabotaged toy, it should remain the same. If a cell does not touch any sabotaged toy, it should contain a blank space <code></code>.

```ts
const store = [
  ["*", " ", " ", " "],
  [" ", " ", "*", " "],
  [" ", " ", " ", " "],
  ["*", " ", " ", " "],
];

console.log(revealSabotage(board));
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/
```

> [!IMPORTANT]
> Keep in mind that…
>
> - **Diagonal cells are also considered adjacent.**
> - **The board will always have at least one empty cell <code> </code> and a sabotaged toy <code>\*</code>.**
> - **The board can be of any size.**
> - **The numbers are strings.**

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```

---
