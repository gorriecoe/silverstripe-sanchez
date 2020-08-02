module.exports = {
  "getBetterButtonsActions": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "unclecheese/betterbuttons"
      ]
    },
    comment: "Create better button custom actions\n@return FieldList",
    body: "public function getBetterButtonsActions()\n{\n\t\\$fields = parent::getBetterButtonsActions();\n\t\\$fields->${0}\n\treturn \\$fields;\n}"
  },
  "BetterButtonCustomAction": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "unclecheese/betterbuttons"
      ]
    },
    body: "BetterButtonCustomAction::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)"
  },
  "BetterButtonNestedForm": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "unclecheese/betterbuttons"
      ]
    },
    body: "BetterButtonNestedForm::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\tFieldList::create(\n\t\t${3}\n\t)\n)"
  }
}
