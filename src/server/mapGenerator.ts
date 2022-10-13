import {Cell, Config} from "../types";
import {forEach} from "superjson/dist/util";


const generateMap = (config:Config): Cell[][] => {
  const myArray: Cell[][] = [];
  for (let i = 0; i < config.mapDimension; i++) {
    let column:Cell[] =[];
    for (let j = 0; j < config.mapDimension; j++) {
      if(j%2===0)
        column.push({color: 'bg-red-400'})
      else
        column.push({color: 'bg-yellow-400'})
    }
    myArray.push(column);
  }

  return myArray
}

export {generateMap};