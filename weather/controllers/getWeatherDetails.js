const request = require("../Utilis/weather_api_oAuth");
const config = require("config")

/** Below function helps to get the single location weather details */
const getSingleLocationWeather = (req, res) => {
  const { id: pincode } = req.params;
  if (!pincode) {
    res.status(400).json({
      success: false,
      message: "Pincode is required"
    })
  } else {
    const urlPath = `${config.get("yahoo.weather_url")}?woeid=${pincode}&format=json`
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

/** Below function helps to get the multiple location weather details */

const getMultipleLocationweather = (req, res) => {
  let { pincodes } = req.body;
  if (pincodes.length == 0) {
    res.status(400).json({
      success: false,
      message: "Pincodes not found, please try again"
    })
  } else {
    let data = []
    pincodes.forEach(element => {
      const urlPath = `${config.get("yahoo.weather_url")}?woeid=${element}&format=json`
      request.get(
        urlPath,
        null,
        null,
        function (err, value, result) {
          if (!err && value) {
            data.push(JSON.parse(value))
          }
        }
      );
    })
    console.log("data outside", data)
    if (data.length) {
      res.status(200).json({ data, success: true })
    }
  }
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