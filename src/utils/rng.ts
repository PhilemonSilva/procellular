const sr = require('seedrandom');
let rng = sr();
let previouslyUsedSeed = '';

export const setSeed = (seed:string):void => {
  if(seed) rng = sr(seed);
  else{
    previouslyUsedSeed = makeRandomSeed(15);
    rng = sr(previouslyUsedSeed);
  }
}

const makeRandomSeed = (length:number) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const randomFromInterval = (min:number, max:number):number => rng() * (max - min + 1) + min;
export const randomIntFromInterval = (min:number, max:number) => Math.round(randomFromInterval(min, max - 1));