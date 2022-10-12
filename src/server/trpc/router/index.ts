// src/server/router/index.ts
import { t } from "../trpc";

import { mapRoute } from "./mapRoute";

export const appRouter = t.router({
  mapGenerator: mapRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
