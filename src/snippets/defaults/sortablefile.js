module.exports = {
  "SortableUploadField - sortablefile": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "bummzack/sortablefile"
      ]
    },
    body: "SortableUploadField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    "variants": [
      {
        composer: {
          "bummzack/sortablefile": "2.0+"
        },
        namespaces: [
          "Bummzack\\SortableFile\\Forms\\SortableUploadField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
}
