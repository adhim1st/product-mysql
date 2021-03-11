const { Product } = require("../models");

class ProductController {
  static createProduct(req, res, next) {
    Product.create({
      title: req.body.title,
      img_url: req.body.img_url,
      quantity: req.body.quantity,
      UserId: req.userData.id,
    })
      .then((data) => {
        if (!data) {
          throw {
            status: 400,
            message: "Validation error",
          };
        } else {
          res.status(201).json(data);
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static getProduct(req, res, next) {
    Product.findAll({ where: { UserId: req.userData.id } })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static getOneProduct(req, res, next) {
    Product.findOne({ where: { id: req.params.id } })
      .then((data) => {
        if (!data) {
          throw {
            status: 404,
            message: "Error not found",
          };
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static updateProduct(req, res, next) {
    Product.update(
      {
        title: req.body.title,
        img_url: req.body.img_url,
        quantity: req.body.quantity,
      },
      { where: { id: req.params.id } }
    )
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          throw {
            status: 404,
            message: "Error not found",
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = ProductController;
