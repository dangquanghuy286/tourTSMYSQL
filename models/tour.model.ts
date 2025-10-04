// models/Tour.js
import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const Tour = sequelize.define(
  "Tour",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    images: {
      type: DataTypes.TEXT("long"),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    information: {
      type: DataTypes.TEXT("long"),
    },
    schedule: {
      type: DataTypes.TEXT("long"),
    },
    timeStart: {
      type: DataTypes.DATE,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: "active",
    },
    position: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "tours",
    timestamps: true, // tự động dùng createdAt, updatedAt
  }
);

export default Tour;
