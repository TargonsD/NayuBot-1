const fs = require('fs')
const Loader = this

 /**
 * Reloads all Modules from the provided path, clears the existing cache.
 * @return {Array<Modules>} modules
 * @param {string} path - path to the directory modules are located in
 * @example
 *     Loader.loadModules('./modules')
 */
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
