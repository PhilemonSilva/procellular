import {t} from "../trpc";
import {z} from "zod";

export const map = t.router({
  generateMapGrid: t.procedure
    .input(
      z.object({
        mapDimension: z.number(),
        roomsPerRow: z.number(),
        fill: z.number(),
        seed: z.string().nullish(),
        roomWallMinimumWidth: z.number(),
        pathWidth: z.number(),
        organicPaths: z.boolean(),
        deadEndSpawnChance: z.number(),
        entryCell: z.object({
          id: z.number(),
          name: z.string().nullish(),
          solid: z.boolean(),
          color: z.string()
        }),
        exitCell: z.object({
          id: z.number().default(-2),
          name: z.string().nullish(),
          solid: z.boolean(),
          color: z.string()
        }),
        cellTypes: z.array(z.object({
          id: z.number(),
          name: z.string().nullish(),
          solid: z.boolean(),
          color: z.string(),
          spawnChance: z.number()
        }))
      }))
    .query(({input}) => {
      return [
        [{color: 'bg-white'}, {color: 'bg-yellow-400'}, {color: 'bg-white'}],
        [{color: 'bg-yellow-400'}, {color: 'bg-white'}, {color: 'bg-yellow-400'}],
        [{color: 'bg-white'}, {color: 'bg-yellow-400'}, {color: 'bg-white'}],
      ]
    }),
});
