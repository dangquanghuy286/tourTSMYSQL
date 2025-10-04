import { Express } from "express";
import { tourRoutes } from "./tour.route";

const clientRouter = (app: Express): void => {
  app.use("/tours", tourRoutes);
};

export default clientRouter;
