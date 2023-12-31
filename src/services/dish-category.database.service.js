const dishCategoryDetailsModel = require("../models/dish-category.model");

const getAllDishCategories = async (query) => {
  return await dishCategoryDetailsModel.find(query);
};

const createDishCategory = async (dishCategory) => {
  const category = new dishCategoryDetailsModel({
    restaurant: dishCategory.restaurant,
    name: dishCategory.name,
  });
  await category.save();
  return category;
};

const updateDishCategory = async (id, category) => {
  return await dishCategoryDetailsModel.findByIdAndUpdate(id, category, {
    new: true,
  });
};

const updateDishCategoryData = async (id, categoryData) => {
  return await dishCategoryDetailsModel.findByIdAndUpdate(id, categoryData, {
    new: true,
  });
};

const deleteDishCategory = async (id) => {
  return await dishCategoryDetailsModel.findByIdAndDelete(id);
};

const getSingleDishCategory = async (id) => {
  return await dishCategoryDetailsModel.findById(id);
};

module.exports = {
  getAllDishCategories,
  createDishCategory,
  updateDishCategory,
  deleteDishCategory,
  getSingleDishCategory,
  updateDishCategoryData,
};
