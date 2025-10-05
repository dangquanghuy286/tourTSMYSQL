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
// [GET]/tours/:id
export const getDataBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const tour = await Tour.findOne({
      where: {
        slug: slug,
        deleted: false,
        status: "active",
      },
      raw: true,
    });

    try {
      tour["images"] = JSON.parse(tour["images"]);
    } catch (e) {
      tour["images"] = tour["images"];
    }

    tour["price_special"] = tour["price"] * (1 - tour["discount"] / 100);

    if (!tour) {
      return res.status(404).render("client/pages/errors/404", {
        title: "Không tìm thấy tour",
      });
    }

    res.render("client/pages/tours/detail", {
      title: "Chi Tiết ",
      tour: tour,
    });
    console.log(tour);
  } catch (error) {
    console.error(error);
    res.status(500).send("Lỗi server");
  }
};
