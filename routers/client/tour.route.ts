import { Request, Response, Router } from "express";
import Tour from "../../models/tour.model";
const router: Router = Router();

router.get("/", async (req: Request, res: Response) => {
  const tours = await Tour.findAll({
    raw: true, //Ve lai data theo dung 1 mang
  });

  res.render("client/pages/tours/index", {
    tours: tours,
  });
});
export const tourRoutes: Router = router;
