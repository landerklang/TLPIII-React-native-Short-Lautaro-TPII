import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const itemTboi = sequelize.define(
  "itemtboi",
  {
    Name: {
      type: DataTypes.STRING(),
      required: true,
      unique: true,
    },
    Icon: {
      type: DataTypes.STRING(),
    },
    Typeitem: {
      type: DataTypes.ENUM(["Active", "Passive"]),
    },
    Quote: {
      type: DataTypes.STRING(),
      required: true,
    },
    Description: {
      type: DataTypes.STRING(),
      required: true,
    },
    Quality: {
      type: DataTypes.INTEGER(),
      required: true,
    },
  },
  {
    timestamps: false,
  },
);
