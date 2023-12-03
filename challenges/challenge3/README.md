# Challenge 3

In Santa's workshop, a mischievous elf has been playing in the gift manufacturing line, adding or removing an unplanned step.

You have the original sequence of steps in the manufacturing process and the modified sequence that may include an extra step or be missing a step.

Your task is to write a function that identifies and returns the first extra step that has been added or removed in the manufacturing line. If there is no difference between the sequences, return an empty string.

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

To take into account:

There will always be one step of difference or none.
The modification can occur anywhere in the sequence.
The original sequence can be empty.

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
