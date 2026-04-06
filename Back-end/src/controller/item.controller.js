import { itemTboi } from "../models/item.model.js";

export const created_item = async (req, res) => {
  const { Name, Description, Typeitem, Quote, Quality, Icon } = req.body;
  try {
    const newitem = await itemTboi.create({
      Name,
      Icon,
      Description,
      Typeitem,
      Quote,
      Quality,
    });
    res.status(201).json({
      msg: "objeto creado correctamente",
      newitem,
    });
  } catch (error) {
    return res.status(500).json("Error al crear un objeto " + error);
  }
};

export const Get_All_Item = async (req, res) => {
  try {
    const allitem = await itemTboi.findAll();
    res.status(200).json({
      msg: "Todos los item",
      allitem,
    });
  } catch (error) {
    return res.status(500).json("Erro al obtener los objetos" + error);
  }
};

export const Get_Item_ById = async (req, res) => {
  try {
    const getitem = await itemTboi.findByPk({
      where: { item_id: req.user.id },
    });
    res.status(200).json({
      getitem,
    });
  } catch (error) {
    return res.status(404).json("el item no fue encontrando" + error);
  }
};

export const update_item = async (req, res) => {
  try {
    const [update] = await itemTboi.update(req.body, {
      where: { id: req.params.id },
    });
    if (update) {
      const updateitem = await itemTboi.findByPk(req.params.id);
      res.json(updateitem);
    }
  } catch (error) {
    return res.status(404).json("no se encontro el item" + error);
  }
};

export const deleted_item = async (req, res) => {
  try {
    const deleted = await itemTboi.findOne({ where: { id: req.params.id } });
    if (deleted) {
      await deleted.destroy();
      res.json({ message: "se elimino el item correctamente" });
    } else return res.status(404).json({ message: "no se encontro el item" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
