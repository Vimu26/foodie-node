const restaurantDetailsModel = require("../models/restaurant.model");

const getAllRestaurants = async () => {
  return await restaurantDetailsModel.find();
};

const getSingleRestaurant = async (id) => {
  return await restaurantDetailsModel.findById(id);
};

const createRestaurant = async (restaurantDetails) => {
  const restaurantModelData = new restaurantDetailsModel({
    name: restaurantDetails.name,
    contact_number: restaurantDetails.contact_number,
    email: restaurantDetails.email,
    location: restaurantDetails.location,
    opens_at: restaurantDetails.opens_at,
    closes_at: restaurantDetails.closes_at,
    distance: restaurantDetails.distance,
    minimumPrice: restaurantDetails.minimumPrice,
    deliveryFee: restaurantDetails.deliveryFee,
    delivery_time: {
      from: restaurantDetails.tags.delivery_time.from,
      to: restaurantDetails.tags.delivery_time.to
    },
    tags: restaurantDetails.tags
  });
  await restaurantModelData.save();
  return restaurantModelData;
};

const updateRestaurant = async (id, restaurantDetails) => {
  return await restaurantDetailsModel.findByIdAndUpdate(id, restaurantDetails, {
    new: true
  });
};

const updateRestaurantData = async (id, restaurantDetails) => {
  return await restaurantDetailsModel.findByIdAndUpdate(id, restaurantDetails, {
    new: true
  });
};

const deleteRestaurant = async (id) => {
  return await restaurantDetailsModel.findByIdAndDelete(id);
};

module.exports = {
  getAllRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  getSingleRestaurant,
  updateRestaurantData
};
