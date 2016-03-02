var expect = require('chai').expect
var path = require('path')
var fs = require('fs')
var database = require(path.join(__dirname, '..', 'config', 'database.json'))
var main = require(path.join(__dirname, '..', 'main.js'))

describe('module main.js', function () {
  it('must export dev domain and port', function(done){
    var domainPort = database.dev.domain + ':' + database.dev.port
    expect(main).to.equal(domainPort)
    done()
  })
})

describe('module main.js', function () {
  it('must have __dirname and path', function(done){
    try {
      main = fs.readFileSync(path.join(__dirname, '..', 'main.js'), {encoding: 'utf8'})
    } catch(error) {
      expect(error).to.be.null
    }
    expect(main).to.be.ok
    expect(main).to.contain('__dirname')
    expect(main).to.contain('.join(')
    done()
  })
})
