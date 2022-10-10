// src/server/router/index.ts
import { t } from "../trpc";

import { map } from "./map";

export const appRouter = t.router({
  example: map,
});

// export type definition of API
export type AppRouter = typeof appRouter;
