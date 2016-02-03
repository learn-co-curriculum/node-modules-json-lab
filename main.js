var path = require('path')
var database = require(path.join(__dirname, 'config', 'database.json'))
console.log(database.dev.domain + ':' + database.dev.port)
