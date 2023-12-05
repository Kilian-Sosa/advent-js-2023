function cyberReindeer(road, time) {
  const roadChange = [];
  let oldChar = ".";

  for (let i = 0; i < time; i++) {
    roadChange.push(road);

    const sleighPos = road.indexOf("S");

    if (i === 4) road = road.replace(/\|/g, "*");

    if (road[sleighPos + 1] !== "|") {
      road = road.slice(0, sleighPos) + oldChar + road.slice(sleighPos + 1);
      oldChar = road[sleighPos + 1];
      road = road.slice(0, sleighPos + 1) + "S" + road.slice(sleighPos + 2);
    }
  }
  return roadChange;
}
