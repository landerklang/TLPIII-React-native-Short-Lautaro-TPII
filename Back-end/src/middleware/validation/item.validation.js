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
  body("Icon")
    .isString()
    .withMessage("la direcion del objeto debe de ser string")
    .optional(),
  body("Typeitem")
    .notEmpty()
    .withMessage(
      "es obligatorio la especificacion del tipo de objeto si es Passive o Active",
    )
    .isIn(["Passive", "Active"])
    .withMessage("solamente se permite objetos Active o Passive"),
  body("Quote")
    .notEmpty()
    .withMessage("es obligatorio el ingresar la cita textualmente"),
  body("Description")
    .notEmpty()
    .withMessage("es obligatorio el escribir la descripcion del objeto "),
  body("Quality")
    .notEmpty()
    .withMessage(
      "se debe ingresar el crado que debe ser este objeto siendo del 0 al 4, 4 es el mas raro",
    )
    .isInt()
    .withMessage(
      "solamente se permite numero en este apartado los numero son del 0 al 4 indicando la raresa del objetos desde la mas comun a la mas rarar",
    )
    .isIn([0, 1, 2, 3, 4])
    .withMessage("solamente se permiten los grados 0,1,2,3,4"),
];
