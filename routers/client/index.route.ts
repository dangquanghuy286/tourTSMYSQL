import { Express } from "express";
import { tourRoutes } from "./tour.route";
import { categoryRoutes } from "./category.route";

const clientRouter = (app: Express): void => {
  app.use("/tours", tourRoutes);
  app.use("/categories", categoryRoutes);
};

export default clientRouter;
