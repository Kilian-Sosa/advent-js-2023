# Challenge 3

In Santa's workshop, **a mischievous elf** has been playing in the gift manufacturing line, adding or removing an unplanned step.

You have the _original_ sequence of steps in the manufacturing process and the _modified_ sequence that may include an extra step or be missing a step.

Your task is **to write a function that identifies and returns the first extra step that has been added or removed in the manufacturing line**. If there is no difference between the sequences, return an empty string.

```ts
const original = "abcd";
const modified = "abcde";

findNaughtyStep(original, modified); // 'e'

const original = "stepfor";
const modified = "stepor";

findNaughtyStep(original, modified); // 'f'

const original = "abcde";
const modified = "abcde";

findNaughtyStep(original, modified); // ''
```

> [!WARNING]
> **_To take into account_**:
>
> - There will always be one step of difference or none.
>
> - The modification can occur anywhere in the sequence.
>
> - The _original_ sequence can be empty.

# Solution

## JavaScript

### 370 points

```js
function findNaughtyStep(original, modified) {
  const [shorterText, longerText] = [original, modified].sort(
    (a, b) => a.length - b.length
  );
  return [...longerText].find((x, i) => shorterText[i] != x) ?? "";
}
```

## TypeScript

### 370 points

```ts
function findNaughtyStep(original: string, modified: string): string {
  const [shorterText, longerText] = [original, modified].sort(
    (a, b) => a.length - b.length
  );
  return [...longerText].find((x, i) => shorterText[i] != x) ?? "";
}
```
