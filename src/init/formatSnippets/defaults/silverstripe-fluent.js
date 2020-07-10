module.exports = {
  "Translatable db fields": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "tractorcow/silverstripe-fluent"
      ]
    },
    comment: "Defines db fields that are translatable.\n@var array",
    body: "private static $translate = [\n\t'${1}',\n];"
  }
}
