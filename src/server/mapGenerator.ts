import {Cell, Config} from "../types";
import {setSeed} from "../utils/rng";


const generateMap = (config: Config): Cell[][] => {
  setSeed(config.seed);
  let sideOfRoomSize = config.mapDimension / config.roomsPerRow;

  return []
}

export {generateMap};