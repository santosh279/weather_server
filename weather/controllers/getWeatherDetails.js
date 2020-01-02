const request = require("../Utilis/weather_api_oAuth");
const config = require("config")

/** Below function helps to get the single location weather details */
const getSingleLocationWeather = (req, res) => {
  
}

/** Below function helps to get the multiple location weather details */

const getMultipleLocationweather = (req, res) => {

}

/**Below function fetch the city data */
const getCityData = (req, res) => {
  const { id: city } = req.params;
  if (!city) {
    res.status(400).json({
      success: false,
      message: "City name not found, please try again"
    })
  } else {
    const urlPath = `${config.get("yahoo.weather_url")}?location=${city}&format=json`
    request.get(
      urlPath,
      null,
      null,
      function (err, data, result) {
        if (err) {
          res.status(400).json({ success: false, error: err })
        } else {
          res.status(200).json({ success: true, data })
        }
      }
    );
  }
}

module.exports = {
  getSingleLocationWeather,
  getMultipleLocationweather,
  getCityData
}