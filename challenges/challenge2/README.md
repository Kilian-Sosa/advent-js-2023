# Challenge 2

In Santa's workshop, the elves have a list of gifts they want to make and a limited set of materials.

The gifts are strings, and the materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a list of the gifts that can be manufactured.

A gift can be made if we have all the necessary materials to manufacture it.

```ts
const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

manufacture(gifts, materials); // ["tren", "oso"]

const gifts = ["juego", "puzzle"];
const materials = "jlepuz";

manufacture(gifts, materials); // ["puzzle"]

const gifts = ["libro", "ps5"];
const materials = "psli";

manufacture(gifts, materials); // []
```

# Solution

## JavaScript

### 270 points

```js
function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    return gift.split("").every((char) => materials.includes(char));
  });
}
```

## TypeScript

### 270 points

```ts
function manufacture(gifts: string[], materials: string): string[] {
  return gifts.filter((gift) =>
    [...gift].every((char) => materials.includes(char))
  );
}
```
