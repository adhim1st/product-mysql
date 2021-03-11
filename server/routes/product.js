const router = require("express").Router();
const ProductController = require("../controllers/product-controller");
const authentication = require("../middlewares/authentication");

router.post("/", authentication, ProductController.createProduct);
router.get("/", authentication, ProductController.getProduct);
router.get("/:id", authentication, ProductController.getOneProduct);
router.put("/:id", authentication, ProductController.updateProduct);
module.exports = router;
