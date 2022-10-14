
// Took this function from "bob" at: https://stackoverflow.com/questions/26965171/fast-nearest-power-of-2-in-javascript
// Honestly I have no idea how this works. There is some bit shifting in here, but not sure why:
export const nextPowerOf2 = (number:number) => {
  let powerOf = 2;
  while (number >>= 1) {
    powerOf <<= 1;
  }
  return powerOf;
}
