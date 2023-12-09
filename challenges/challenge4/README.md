# Challenge #4: 😵‍💫 Turn the parentheses around

In Santa's workshop 🎅, some Christmas messages have been written in a peculiar way: **the letters inside the parentheses must be read in reverse**.

**Santa needs these messages to be correctly formatted**. Your task is to write a function that takes a string of text and reverses the characters within each pair of parentheses, removing the parentheses in the final message.

However, keep in mind that **nested parentheses may exist**, so you must reverse the characters in the correct order.

```ts
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus

// Step by step:
// 1. We reverse the nesting -> sa(ualcatn)s
// 2. We reverse what remains -> santaclaus
```

> [!WARNING]
> **_To take into account_**:
> - The input strings will always be well-formed with properly matching parentheses; you don't need to validate them.
>
> - There should be no parentheses left in the final message.
>
> - The maximum level of nesting is 2.

# Solution

> [!IMPORTANT]
> This regex is designed to find and capture text enclosed within parentheses. The captured content is everything between the opening "(" and closing ")" parentheses. The g flag ensures that all matches in the input string are found, not just the first one.
> ```js
> /\(  (  [^()]+  )  \)/g
>      ^          ^
>  ```
> - The first match captures the text within the outermost parentheses.
> - The second match captures the text within the innermost parentheses, taking into account nested structures.

## JavaScript

### 280 points

```js
function decode(message) {
  const regex = /\(([^()]+)\)/g;
  const replacer = (_, group) => [...group].reverse().join("");

  return message.replace(regex, replacer).replace(regex, replacer);
}
```

## TypeScript

### 280 points

```ts
function decode(message: string): string {
  const regex = /\(([^()]+)\)/g;
  const replacer = (_, group) => [...group].reverse().join("");

  return message.replace(regex, replacer).replace(regex, replacer);
}
```
