const { arrays, version } = require('../utilities')

module.exports =  (
  requiredPackages,
  packages
) => {
  // Allow all autocompletes if composer packages aren't found.
  if (!packages || !Object.keys(packages).length) {
    return true
  }

  // Match every package given in the first parameter to the second.
  if (!arrays.matchEvery(
    Object.keys(requiredPackages),
    Object.keys(packages)
  )) {
    return false
  }

  // Finally loop packages and filter check version range.
  for (const package in requiredPackages) {
    if (requiredPackages.hasOwnProperty(package)) {
      let { min, max} = requiredPackages[package]
      let moduleVersion = version.format(packages[package])

      min = (min) ? moduleVersion >= min : true
      max = (max) ? moduleVersion < max : true
      if (!(min && max)) {
        return false
      }
    }
  }

  return true
}
