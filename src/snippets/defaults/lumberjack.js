module.exports = {
  "Show in sitetree": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "silverstripe/lumberjack"
      ]
    },
    comment: "Defines whether a page is displayed within the site tree\n@var boolean",
    body: "private static $show_in_sitetree = ${1:false};"
  },
  "getLumberjackTitle": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "silverstripe/lumberjack"
      ]
    },
    comment: "Define the title for the cms lumberjack gridfield.\n@return string",
    body: "/public function getLumberjackTitle()\n{\n\treturn '${1}';\n}"
  }
}
