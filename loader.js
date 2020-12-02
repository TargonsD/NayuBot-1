const fs = require('fs')
const Loader = this

Loader.loadModules = path => {
  const modulesFolder = fs.readdirSync(path)
  let modules = []
  for (const _module of modulesFolder) {
    delete require.cache[require.resolve(`${path}/${_module}`)]
    modules.push(require(`${path}/${_module}`))
  }
  return modules
}
module.exports = Loader
