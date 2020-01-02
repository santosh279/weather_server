const route = require("express").Router();
const controller = require("../controllers")

route.get("/pincode/:id", controller.getSingleLocationWeather)
route.get("/get_city_data/:id", controller.getCityData)
route.get("/multiple/pincode", controller.getMultipleLocationweather)
module.exports = route