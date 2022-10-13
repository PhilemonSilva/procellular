import {t} from "../trpc";
import {ConfigSchema, Config} from "../../../types";
import {generateMap} from "../../mapGenerator";

export const mapRoute = t.router({
  generateMapGrid: t.procedure
    .input(ConfigSchema)
    .query(({input}) => {
      return generateMap(input)
    }),
});
