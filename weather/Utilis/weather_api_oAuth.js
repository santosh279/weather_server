
var OAuth = require('oauth');
const config = require("config");

//yahoo-api-id
var header = {
  "X-Yahoo-App-Id": config.get("yahoo.api_id")
};

/**fetching keys from config */
const consumer_key = config.get("yahoo.consumer_key");
const consumer_secret = config.get("yahoo.consumer_secret")

var request = new OAuth.OAuth(
  null,
  null,
  consumer_key,
  consumer_secret,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  header
)

module.exports = request