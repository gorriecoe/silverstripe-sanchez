module.exports = {
  "onBeforeWrite event handler": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Event handler called before writing to the database.\n\n@uses DataExtension->onAfterWrite()",
    body: "public function onBeforeWrite()\n{\n\tparent::onBeforeWrite();\n\t${0}\n}"
  },
  "onAfterWrite event handler": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Event handler called after writing to the database.\n\n@uses DataExtension->onAfterWrite()",
    body: "public function onAfterWrite()\n{\n\tparent::onAfterWrite();\n\t${0}\n}"
  },
  "onBeforeDelete event handler": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Event handler called before deleting from the database.\n\n@uses DataExtension->onBeforeDelete()",
    body: "public function onBeforeDelete()\n{\n\tparent::onBeforeDelete();\n\t${0}\n}"
  },
  "onAfterDelete event handler": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Event handler called after deleting from the database.\n\n@uses DataExtension->onAfterDelete()",
    body: "public function onAfterDelete()\n{\n\tparent::onAfterDelete();\n\t${0}\n}"
  }
}
