import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const itemTboi = sequelize.define(
  "itemtboi",
  {
    Name: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    Icon: {
      type: DataTypes.TEXT(),
    },
    Typeitem: {
      type: DataTypes.ENUM(["Active", "Passive"]),
    },
    Quote: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    Quality: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    Pool: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    Interactions: {
      type: DataTypes.TEXT(),
      allowNull: true,
    },
  },
  {
    timestamps: false,
  },
);
