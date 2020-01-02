const app        = require("express")();
const config     = require("config");
const chalk      = require("chalk");
const bodyParser = require("body-parser");
var morgan       = require('morgan')
var cors         = require('cors')
var fs           = require('fs')
var path         = require('path')


// routes
var weatherRoutes = require('./weather/route/weatherRoute')


// configure varibales
var port = config.get('port')

// cors
app.use(cors())

// bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// configure morgan write stream
var accessLogStrem = fs.createWriteStream(path.join(__dirname, 'access.log'), {
  flags: 'a'
})
app.use(morgan('combined', { stream: accessLogStrem }))

// application routes
app.use('/weather', weatherRoutes)

app.get('/', function (req, res) {
  res.send('server is up')
})

app.listen(port, () => {
  console.log(chalk.green('[X]   SERVER RUNNING ON PORT ' + port))
})


