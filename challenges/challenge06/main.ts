function maxDistance(movements: string): number {
  let distance = 0;

  let right = movements.match(/>/g)?.length ?? 0;
  let left = movements.match(/</g)?.length ?? 0;
  distance += right;
  distance -= left;

  return Math.abs(distance) + movements.length - (right + left);
}
