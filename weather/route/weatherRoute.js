const route = require("express").Router();
const controller = require("../controllers")

route.get("/:pincode", controller.getSingleLocationWeather)
route.get("/getcitydata/:id", controller.getCityData)

module.exports = route