const router = require("express").Router();
const routeProduct = require("./product");
const routeUser = require("./user");

router.use("/products", routeProduct);
router.use("/users", routeUser);

module.exports = router;
