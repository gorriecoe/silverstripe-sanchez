module.exports = {
  "Can view permissions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "DataObject view permissions\n@param Member \\$member\n@return boolean",
    body: "public function canView(\\$member = null)\n{\n\treturn ${1};\n}"
  },
  "Can edit permissions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "DataObject edit permissions\n@param Member \\$member\n@return boolean",
    body: "public function canEdit(\\$member = null)\n{\n\treturn ${1};\n}"
  },
  "Can delete permissions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "DataObject delete permissions\n@param Member \\$member\n@return boolean",
    body: "public function canDelete(\\$member = null)\n{\n\treturn ${1};\n}"
  },
  "Can create permissions": {
    conditions: {
      scope: ".text.html.php"
    },
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        comment: "DataObject create permissions\n@param Member \\$member\n@param array \\$context Additional context-specific data which might\naffect whether (or where) this object could be created.\n@return boolean",
        body: "public function canCreate(\\$member = null, \\$context = [])\n{\n\treturn ${1};\n}"
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        comment: "DataObject create permissions\n@param Member \\$member\n@return boolean",
        body: "public function canCreate(\\$member = null)\n{\n\treturn ${1};\n}"
      }
    ]
  },
  "Permission check": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Permission::check(${1:string|array}, ${2:'any'}, ${3:$member})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        namespaces: [
          "SilverStripe\\Security\\Permission"
        ]
      }
    ]
  },
  "providePermissions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Return a map of permission codes to add to the dropdown shown in the Security section of the CMS\n@return array",
    body: "public function providePermissions()\n{\n\treturn [\n\t\t'${1:PERMISSION}' => '${2:Title}'\n\t];\n}"
  }
}
