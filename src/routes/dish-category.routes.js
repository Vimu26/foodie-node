const express = require("express");
const router = express.Router();

const dishCategoryController = require("../controllers/dish-category.controller");
const schemaValidationMiddleware = require("../middleware/ajv-format-validation-middleware");
const dishCategorySchemaFormat = require("../schema/dish-category.schema");
const tokenValidationMiddleware = require("../middleware/token.validation.middleware");

router.use(tokenValidationMiddleware.validateToken);

//get all dish categories
router.get("/", dishCategoryController.getAllDishCategories);

//create a new dish category
router.post(
  "/",
  schemaValidationMiddleware.createDishCategoryFormatValidation(
    dishCategorySchemaFormat.createDishCategory,
  ),
  dishCategoryController.createDishCategory,
);

//update a dish category partially
router.patch("/:id", dishCategoryController.updateDishCategory);

//update entire dish data
router.put("/:id", dishCategoryController.updateDishCategoryData);

//delete a dish category
router.delete("/:id", dishCategoryController.deleteDishCategory);

//get single dish category
router.get("/:id", dishCategoryController.getSingleDishCategory);

module.exports = router;
