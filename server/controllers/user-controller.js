const { User } = require("../models");
const { compare } = require("../helpers/bcrypt-helper");
const { encode } = require("../helpers/jwt-helper");

class UserController {
  static registerUser(req, res, next) {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })
      .then((data) => {
        res
          .status(201)
          .json({ id: data.id, username: data.username, email: data.email });
      })
      .catch((err) => {
        next(err);
      });
  }

  static loginUser(req, res, next) {
    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (!data) {
          throw {
            status: 401,
            message: "Invalid account",
          };
        } else if (compare(req.body.password, data.password)) {
          const access_token = encode(data);
          res.status(200).json({ access_token: access_token });
        } else {
          throw {
            status: 401,
            message: "Invalid email/password",
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = UserController;
