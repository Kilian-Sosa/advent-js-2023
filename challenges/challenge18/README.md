# Challenge #18: 🔢 The digital clock

In the toy factory, **the elves are programming a digital clock** to keep them on schedule with gift production. However, they have encountered an interesting programming challenge. They need a function that, given a time in 'HH:MM' format, creates a visual representation of this time on a digital clock by returning **an array of arrays of characters**.

**The clock screen has 7 rows and 17 columns**, and each digit of the time takes up 7 rows and 3 columns. The digits are composed of asterisks (<code>\*</code>) and blank spaces (<code></code>). There is an empty column between each digit.

**The colon separating hours and minutes** is drawn using two asterisks (<code>\*</code>) and is always placed in the same position, in rows 2 and 4, in column 9, respectively (note: row and column indexing starts at 0).

For example, if the function receives <code>01:30</code>, it should return:

```ts
drawClock('01:30') // ⬇️

[
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
```

To know how to draw each digit, we have been given the following image. As you can see, **each digit is composed of 7 rows and 3 columns**. We will represent the pixels in red with an asterisk (<code>\*</code>), and the white pixels with a space (<code></code>):

<img src="https://adventjs.dev/digits.png" alt="Representation of the digits for the digital clock">

# Solution

## JavaScript

### ~ points

```js

```

## TypeScript

### ~ points

```ts

```
