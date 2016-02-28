var path = require('path')
var database = require(path.join(__dirname, 'config', 'database.json'))
module.exports = database.dev.domain + ':' + database.dev.port
