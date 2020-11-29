const ping = require('./ping')
const clear = require('./clear')
const modules = require('./modules')
const core = [ping, clear, modules]
module.exports = core
