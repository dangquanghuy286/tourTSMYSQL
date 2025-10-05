import { Request, Response } from "express";
import Category from "../../models/category.model";

// [GET]/tours/
export const index = async (req: Request, res: Response) => {
  // Select * FROM tours WHERE deleted =false AND status =active
  const categories = await Category.findAll({
    where: {
      deleted: false,
      status: "active",
    },
    raw: true, //Ve lai data theo dung 1 mang
  });

  res.render("client/pages/category/index", {
    title: "Danh sách Category",
    categories: categories,
  });
};
