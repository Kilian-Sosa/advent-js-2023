# Challenge 1

In the North Pole toy factory, each toy has a unique identification number.

However, due to an error in the toy machine, some numbers have been assigned to more than one toy.

Find the first identification number that has been repeated, where the second occurrence has the smallest index!

In other words, if there is more than one repeated number, you should return the number whose second occurrence appears first in the list. If there are no repeated numbers, return -1.

```ts
const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId); // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2); // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3); // 5
```

Note! The elves say this is a Google technical test.

# Solution

## JavaScript

### 160 points

```js
function findFirstRepeated(gifts) {
  const seenNumbers = new Set();

  for (const currentId of gifts) {
    if (seenNumbers.has(currentId)) return currentId;
    seenNumbers.add(currentId);
  }
  return -1;
}
```

## TypeScript

### 160 points

```ts
function findFirstRepeated(gifts) {
  const seenNumbers = new Set();

  for (const currentId of gifts) {
    if (seenNumbers.has(currentId)) return currentId;
    seenNumbers.add(currentId);
  }
  return -1;
}
```
