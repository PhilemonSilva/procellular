import { z } from "zod";

declare global {
  interface Array<T> {
    iterate(fn: (a: T) => void): void;
  }
}

Array.prototype.iterate = function (fn: (a: any) => void) {
  for (let row = 0; row < (this).length; row++) {
    for(let cell = 0;  cell < (this[row]).length; cell++){
      fn(this[row][cell]);
    }
  }
}

export const CellSchema = z.object({
  id: z.number(),
  name: z.string().nullish(),
  solid: z.boolean(),
  color: z.string(),
  spawnChance: z.number().nullish()
});

export const ConfigSchema = z.object({
  mapDimension: z.number(),
  roomsPerRow: z.number(),
  fill: z.number(),
  seed: z.string().nullish(),
  roomWallMinimumWidth: z.number(),
  pathWidth: z.number(),
  organicPaths: z.boolean(),
  deadEndSpawnChance: z.number(),
  entryCell: CellSchema.default({
    "id": -1,
    "name": "entry",
    "solid": false,
    "color": "#0ea432"
  }),
  exitCell: CellSchema.default({
    "id": -2,
    "name": "exit",
    "solid": false,
    "color": "#0d71bb"
  }),
  cellTypes: z.array(CellSchema).default([
    {
      "id": 0,
      "name": "empty",
      "solid": false,
      "color": "#bfbfbf",
      "spawnChance": 90
    },
    {
      "id": 1,
      "name": "gold",
      "solid": false,
      "color": "#f1c40f",
      "spawnChance": 5
    },
    {
      "id": 2,
      "name": "enemy",
      "solid": false,
      "color": "#e74c3c",
      "spawnChance": 5
    },
    {
      "id": 3,
      "name": "block",
      "solid": true,
      "color": "#000000",
      "spawnChance": 100
    }
  ])
});

// extract the inferred type
export type Config = z.infer<typeof ConfigSchema>;
export type Cell = z.infer<typeof CellSchema>;