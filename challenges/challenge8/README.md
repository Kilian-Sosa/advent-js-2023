# Challenge #8: 🏬 Sorting the warehouse

The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from <code>a</code> to <code>z</code>. For example, <code>'66a11b'</code> means 66 <code>a</code> gifts and 11 <code>b</code> gifts.

The elves have a **special system** for organizing the gifts:

- **Every 10 gifts of the same type are packed in a box, represented by <code>{x}</code>. For example, 20 type a gifts are packed in two boxes like this: <code>{a}{a}</code>.**
- **Every 5 boxes are stacked on a pallet, represented by <code>[x]</code>. For example, 10 <code>a</code> boxes are stacked on 2 pallets in this way: <code>[a][a]</code>**
- **Any additional gift is placed in a bag, represented by <code>()</code> and all of them are placed inside. For example, 4 <code>b</code> gifts are placed in a bag like this <code>(bbbb)</code>**

**The gifts are then placed in the following order**: _pallets, boxes and bags_. And the gifts appear in the same order as the input string.

Your task is to write a function <code>organizeGifts</code> that takes a string of gifts as an argument and returns a string representing the warehouse.

```ts
const result1 = organizeGifts("76a11b");
console.log(result1);
// `[a]{a}{a}(aaaaaa){b}(b)`

/* Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left,
    resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left,
    resulting in 1 loose box {b} and a bag with 1 gift (b)
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
