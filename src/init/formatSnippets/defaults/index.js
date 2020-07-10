module.exports = {
  // Core modules
  ...require('./convert'),
  ...require('./debug'),
  ...require('./events'),
  ...require('./fields'),
  ...require('./image'),
  ...require('./lumberjack'),
  ...require('./misc'),
  ...require('./permissions'),
  ...require('./requirements'),
  ...require('./scafold'),
  ...require('./segmentfield'),
  ...require('./session'),
  ...require('./tagfield'),
  ...require('./template'),

  // Third party modules
  ...require('./betterbuttons'),
  ...require('./display-logic'),
  ...require('./focuspoint'),
  ...require('./gridfieldextensions'),
  ...require('./linkable'),
  ...require('./silverstripe-embed'),
  ...require('./silverstripe-fluent'),
  ...require('./silverstripe-link'),
  ...require('./sortablefile'),
  ...require('./sortablegridfield')
}
