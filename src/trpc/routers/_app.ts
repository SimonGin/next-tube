import { z } from "zod";
import { protectedProcedure, createTRPCRouter } from "../init";
import { categories } from "@/db/schema";
import { categoriesRouter } from "@/modules/categories/server/procedures";
export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
