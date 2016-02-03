var test = require('tape'),
  cp = require('child_process')

var fs = require('fs')
var path = require('path')
var database = require(path.join(__dirname, '..', 'config', 'database.json'))

test('node main to print domain and port', function (t) {
  t.plan(2)
  child = cp.exec('node main',
  function (error, stdout, stderr) {
    // console.log('stdout: ' + stdout)
    // console.log('stderr: ' + stderr)
    t.equal(stderr, '', 'No errors running main.js')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    var domainPort = database.dev.domain + ':' + database.dev.port
    t.equal(stdout, domainPort, 'Domain and port must be from config/database.json')
  })
})


test('main.js to have __dirname and path', function (t) {
  t.plan(3)
  try {
    main = fs.readFileSync(path.join(__dirname, '..', 'main.js'), {encoding: 'utf8'})
  } catch(e) {
    t.equal(e, null)
  }
  t.ok(main, 'Read the file main.js')
  t.equal(main.indexOf('__dirname')>-1, true, 'Must use __dirname')
  t.equal(main.indexOf('.join(')>-1, true, 'Must use path.join()')

})
