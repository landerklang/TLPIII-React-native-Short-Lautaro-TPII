import { body, param } from "express-validator";
import { itemTboi } from "../../models/item.model.js";

export const createdItemValidation = [
  body("Name")
    .notEmpty()
    .withMessage("el nombre del objeto es obligatorio")
    .isString()
    .withMessage("el nombre del item debe de estar escrito en string")
    .custom(async (value) => {
      const nombre = await itemTboi.findOne({
        where: {
          Name: value,
        },
      });
      if (nombre) {
        throw new Error("ya existe un objeto con ese nombre");
      }
    }),
];
