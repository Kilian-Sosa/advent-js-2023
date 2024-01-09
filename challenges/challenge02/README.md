# Challenge #2: 🏭 We start the factory

In Santa's workshop, the elves have a **list of gifts** they want to make and a limited set of materials.

The gifts are strings, and the materials are characters. Your task is to write a function that, given a list of gifts and the available materials, returns a **list of the gifts that can be manufactured**.

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

### 280 points

```js
function manufacture(gifts, materials) {
  const materialArray = materials.split("");

  return gifts.filter((gift) => {
    const uniqueCharacters = [...new Set([...gift, ...materialArray])];
    return uniqueCharacters.length === materialArray.length;
  });
}
```

## TypeScript

### 280 points

```ts
function manufacture(gifts: string[], materials: string): string[] {
  const materialArray = materials.split("");

  return gifts.filter((gift) => {
    const uniqueCharacters = [...new Set([...gift, ...materialArray])];
    return uniqueCharacters.length === materialArray.length;
  });
}
```
