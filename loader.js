const fs = require('fs')

const load = module => {
  // loads a single module, from a folder path specified, clears the require cache of every file in the module's directory
  const moduleFolder = fs.readdirSync(module) // e.g ./core
  for (const file of moduleFolder) {
    delete require.cache[require.resolve(`${module}/${file}`)] // ./module/...js
  }
  return require(`${module}/index.js`) // returns loaded module {name: core, ...}
}
const loadCommands = (module, client) => {
  // loads a single module's commands into the client reference provided, clears the cache of every file in the module's directory
  const m = load(module) // e.g ./core
  let list = []
  for (const command of m) {
    list.push(command) // within one module ... [ping, clear, ...]
    client.commands.set(command.name, command)
  }
  return list // returns loaded commands
}
const loadModules = modules => {
  // performs loader.load on all modules within a directory, returns a list of all loaded modules
  const allModules = fs.readdirSync(modules) // [core, someothermodule, ...]
  let list = []
  for (const module of allModules) { // ./core ... 
    list.push(load(`${modules}/${module}`))  // within all modules... [ping: {}, clear: {}, ...]
  }
  return list
}
const loadAll = (modules, client) => {
  // performs loader.loadCommands on all modules within a directory, returns a list of loaded commands
  let list = []
  const allModules = loadModules(modules)
  for (const module of allModules) {
    for (const command of module) {
      list.push(command)
      client.commands.set(command.name, command)
    }
  }
  return list
}

module.exports = { load, loadCommands, loadModules, loadAll }
