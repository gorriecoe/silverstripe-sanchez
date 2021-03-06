const { arrays, version } = require('../../utilities')

module.exports = (
  requiredPackages,
  packages,
  noPackagesBehavior
) => {
  if (!packages || !Object.keys(packages).length) {
    // By default allow all snippets if composer|node packages aren't found.
    return noPackagesBehavior
  }

  // Match every package given in the first parameter to the second.
  if (!arrays.matchEvery(
    Object.keys(requiredPackages),
    Object.keys(packages)
  )) {
    return false
  }

  // Finally loop packages and filter check version range.
  for (const requiredPackage in requiredPackages) {
    let { min, max } = requiredPackages[requiredPackage]
    const moduleVersion = version.format(packages[requiredPackage])

    min = (min) ? moduleVersion >= min : true
    max = (max) ? moduleVersion < max : true
    if (!(min && max)) {
      return false
    }
  }

  return true
}
