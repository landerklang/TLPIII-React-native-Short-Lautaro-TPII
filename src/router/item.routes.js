import {
  created_item,
  Get_All_Item,
  Get_Item_ById,
  update_item,
  deleted_item,
} from "../controller/item.controller.js";
import { createdItemValidation } from "../middleware/validation/item.validation.js";
import { validator } from "../middleware/validator.js";

import { Router } from "express";

export const item_router = Router();

item_router.post("/item", createdItemValidation, validator, created_item);

item_router.get("/item", Get_All_Item);

item_router.get("/item/id", Get_Item_ById);

item_router.put("/item/id", update_item);

item_router.delete("/item/id", deleted_item);
