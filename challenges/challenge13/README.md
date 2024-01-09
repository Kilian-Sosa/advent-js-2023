# Challenge #13: ⌚️ Calculating the time

The elves are preparing for **Christmas Eve** and they need your help to determine if they have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the duration is <code>HH:mm:ss</code>, the deliveries start at <code>00:00:00</code> and the time limit is <code>07:00:00</code>.

**Your function must return the time they will lack or the time they will have left over** in order to finish the deliveries. The format of the returned duration should be <code>HH:mm:ss</code>.

If they finish before <code>07:00:00</code>, the remaining time until <code>07:00:00</code> should be displayed with a negative sign. For example, **if they have 1 hour and 30 minutes left over, return <code>-01:30:00</code>**.

```ts
calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
// '-02:20:00'

calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// '00:30:00'

calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]); // '-05:29:00'
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
