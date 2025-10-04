import { Request, Response } from "express";
import Tour from "../../models/tour.model";

// [GET]/tours/
export const index = async (req: Request, res: Response) => {
  // Select * FROM tours WHERE deleted =false AND status =active
  const tours = await Tour.findAll({
    where: {
      deleted: false,
      status: "active",
    },
    raw: true, //Ve lai data theo dung 1 mang
  });

  res.render("client/pages/tours/index", {
    title: "Danh sách Tour",
    tours: tours,
  });
};
