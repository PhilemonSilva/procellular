import {t} from "../trpc";
import {z} from "zod";
import {ConfigSchema, Config} from "../../../types";
import {generateMap} from "../../mapGenerator";

export const mapRoute = t.router({
  generateMapGrid: t.procedure
    .input(ConfigSchema)
    .query(({input}) => generateMap(input)),
});
