module.exports = {
  "EmbeddedObjectField - Linkable": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "sheadawson/silverstripe-linkable": "2.0+"
      }
    },
    body: "EmbeddedObjectField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t${3}\n)",
    useItems: [
      "Sheadawson\\Linkable\\Models\\EmbeddedObject",
      "Sheadawson\\Linkable\\Forms\\EmbeddedObjectField"
    ]
  },
  "LinkField - Linkable": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "sheadawson/silverstripe-linkable": "2.0+"
      }
    },
    body: "LinkField::create(\n\t'${1:name}ID',\n\t'${2:${1:title}}'\n)",
    useItems: [
      "Sheadawson\\Linkable\\Models",
      "Sheadawson\\Linkable\\Forms\\LinkField"
    ]
  },
  "EmbeddedObject - Linkable": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "sheadawson/silverstripe-linkable": "2.0+"
      }
    },
    body: "EmbeddedObject::class",
    useItems: [
      "Sheadawson\\Linkable\\Models\\EmbeddedObject"
    ]
  },
  "Link - Linkable": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "sheadawson/silverstripe-linkable": "2.0+"
      }
    },
    body: "Link::class",
    useItems: [
      "Sheadawson\\Linkable\\Models"
    ]
  }
}
