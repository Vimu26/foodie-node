const { Schema, model } = require("mongoose");
const { DB_NAMES } = require("../constants");

const dishCategoryDetailsSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: DB_NAMES.RESTAURANTS,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = new model(DB_NAMES.DISH_CATEGORIES, dishCategoryDetailsSchema);
