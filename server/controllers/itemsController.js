module.exports = {
  getAllItems: (req, res, next) => {
    req.app
      .get("db")
      .get_all_items()
      .then(items => {
        res.status(200).json(items);
      })
      .catch(err => console.log("Could not get all items", err));
  },

  addProduct: (req, res, next) => {
    const { image, name, description, price } = req.body;

    const db = req.app.get("db");
    db.add_item([image, name, description, price])
      .then(items_el_capitan => {
        res.status(200).json(items_el_capitan);
      })
      .catch(err => console.log("Unable to add to db", err));
  },

  getOne: (req, res) => {
    const { id } = req.params;

    req.app
      .get("db")
      .get_product([id])
      .then(products => {
        res.status(200).json(products[0]);
      })
      .catch(err => console.log("(Get One) Cannot get: ", err));
  },

  deleteProduct: (req, res) => {
    const { id } = req.params;
    // console.log("ID", id);
    req.app
      .get("db")
      .delete_product([id])
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => console.log("(DeleteProduct) Cannot delete: ", err));
    // console.log("ReqParams", req.params);
    // console.log("ReqBody", req.body);
    // console.log("ID", id);
    // console.log("RES", res);
  },

  editProduct: (req, res) => {
    const { id } = req.query;
    const { image, name, description, price } = req.body;
    if (!id) {
      res.status(301).json({ message: "Add a query string" });
      return;
    }
    if (!image || !name || !description || !price) {
      res.status(301).json({ message: "Add a query string" });
      return;
    }
    req.app
      .get("db")
      .edit_product([image, name, description, price, id])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log("(editProduct) Cannot edit: ", err));
  }
};
