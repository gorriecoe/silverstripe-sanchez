module.exports = {
  "Link - silverstripe-link": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "gorriecoe/silverstripe-link"
      ]
    },
    body: "Link::class",
    namespaces: [
      "gorriecoe\\Link\\Models\\Link"
    ]
  },
  "LinkField - silverstripe-link": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "gorriecoe/silverstripe-linkfield"
      ]
    },
    body: "LinkField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t${3:$this}\n)",
    namespaces: [
      "gorriecoe\\Link\\Models\\Link",
      "gorriecoe\\LinkField\\LinkField"
    ]
  }
}
