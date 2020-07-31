module.exports = {
  "Class Page": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/cms": "3.0-4.0"
      }
    },
    comment: "${3:Description}\n\n@package silverstripe\n@subpackage ${4:mysite}",
    body: "class $1 extends ${2:Page}\n{\n\t${0}\n}",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/cms": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\CMS\\Model\\SiteTree"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Class Page Controller": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/cms": "3.0-4.0"
      }
    },
    comment: "${3:Description}\n\n@package silverstripe\n@subpackage ${4:mysite}",
    body: "class ${1}Controller extends ${2:Page}Controller\n{\n\tpublic function doInit()\n\t{\n\t\tparent::doInit();\n\t}\n}",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/cms": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\CMS\\Controllers\\ContentController"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Class DataObject": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    comment: "${3:Description}\n\n@package silverstripe\n@subpackage ${4:mysite}",
    body: "class ${1} extends ${2:DataObject}\n{\n\t${0}\n}",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\ORM\\DataObject"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Class Model Admin": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    comment: "${5:Description}\n\n@package silverstripe\n@subpackage ${6:mysite}",
    body: "class ${1}Admin extends ModelAdmin\n{\n\t/**\n\t * Managed data objects for CMS\n\t * @var array\n\t */\n\tprivate static \\$managed_models = [\n\t\t'${2}'\n\t];\n\n\t/**\n\t * URL Path for CMS\n\t * @var string\n\t */\n\tprivate static \\$url_segment = '${3}';\n\n\t/**\n\t * Menu title for Left and Main CMS\n\t * @var string\n\t */\n\tprivate static \\$menu_title = '${4}';\n\n\t${0}\n}",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Admin\\ModelAdmin"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Class BuildTask": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    comment: "${3:Description}\n\n@package silverstripe\n@subpackage ${4:mysite}",
    body: "class \${1} extends BuildTask\n{\n\t/**\n\t * @var bool $enabled If set to FALSE, keep it from showing in the list\n\t * and from being executable through URL or CLI.\n\t */\n\tprotected \$enabled = true;\n\t\n\t/**\n\t * @var string $title Shown in the overview on the TaskRunner\n\t * HTML or CLI interface. Should be short and concise, no HTML allowed.\n\t */\n\tprotected \$title = '${2:${1}}';\n\t\n\t/**\n\t * @var string \$description Describe the implications the task has,\n\t * and the changes it makes. Accepts HTML formatting.\n\t */\n\tprotected \$description = '${3}';\n\n\t/**\n\t * This method called via the TaskRunner\n\t *\n\t * @param SS_HTTPRequest \$request\n\t */\n\tpublic function run(\$request)\n\t{\n\t\t${0}\n\t}\n}",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Dev\\BuildTask"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Menu title": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Menu title for Left and Main CMS\n @var string",
    body: "private static \\$menu_title = '${1}';"
  },
  "Menu icon": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Menu icon for Left and Main CMS\n @var string",
    body: "private static \\$menu_icon = '${1}';"
  },
  "Extensions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines extension names and parameters to be applied\n to this object upon construction.\n @var array",
    body: "private static \\$extensions = [\n\t'${1}',\n];"
  },
  "Singular name": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Singular name for CMS\n @var string",
    body: "private static \\$singular_name = '${1}';"
  },
  "Plural name": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Plural name for CMS\n @var string",
    body: "private static \\$plural_name = '${1}';"
  },
  "Table name": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "4.0+"
      }
    },
    comment: "Defines the database table name\n @var string",
    body: "private static \\$table_name = '${1}';"
  },
  "DB fields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Database fields\n@var array",
    body: "private static \\$db = [\n\t'${1}' => '${2}',\n];"
  },
  "DB indexes": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Database indexes\n@var array",
    body: "private static \\$indexes = [\n\t'${1}' => '${2}',\n];"
  },
  "Has one relationships": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Has_one relationship\n@var array",
    body: "private static \\$has_one = [\n\t'${1}' => '${2}',\n];"
  },
  "Has many relationships": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Has_many relationship\n@var array",
    body: "private static \\$has_many = [\n\t'${1}' => '${2}',\n];"
  },
  "Many many relationships": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Many_many relationship\n@var array",
    body: "private static \\$many_many = [\n\t'${1}' => '${2}',\n];"
  },
  "Many many extraFields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines Database fields for the Many_many bridging table\n @var array",
    body: "private static \\$many_many_extraFields = [\n\t'${1}' => [\n\t\t'${2:Sort}' => '${3:Int}'\n\t]\n];"
  },
  "Belongs to relationships": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Belongs_to relationship\n@var array",
    body: "private static \\$belongs_to = [\n\t'${1}' => '${2}',\n];\n"
  },
  "Belongs many many relationships": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Belongs_many_many relationship\n@var array",
    body: "private static \\$belongs_many_many = [\n\t'${1}' => '${2}',\n];"
  },
  "Relationship ownership": {
    "prefix": "owns",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "4.0+"
      }
    },
    comment: "Relationship version ownership\n@var array",
    body: "/**\n \n/\nprivate static \\$owns = [\n\t'${1}'\n];"
  },
  "Casting": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Ensures that the methods are wrapped in the correct type and\nvalues are safely escaped while rendering in the template.\n@var array",
    body: "private static \\$casting = [\n\t'${1}' => '${2}'\n];"
  },
  "Default DB values": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Add default values to database\n @var array",
    body: "private static \\$defaults = [\n\t'${1}' => '${2}'\n];"
  },
  "Default sort": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    scope: ".text.html.php",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        comment: "Default sort ordering\n@var array",
        body: "private static \\$default_sort = ['${1}' => '${2:ASC}'];"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        comment: "Default sort ordering\n@var string",
        body: "private static \\$default_sort = '${1} ${2:ASC}';"
      }
    ]
  },
  "Allowed children": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/cms": "3.0+"
      }
    },
    comment: "Defines the allowed child page types\n@var array",
    body: "private static \\$allowed_children = [\n\t'${1}'\n];"
  },
  "Can be root": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/cms": "3.0+"
      }
    },
    comment: "Defines whether a page can be in the root of the site tree\n@var boolean",
    body: "private static $can_be_root = ${1:false};"
  },
  "Allowed actions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines methods that can be called directly\n@var array",
    body: "private static \\$allowed_actions = [\n\t'${1}' => ${2:true}\n];"
  },
  "URL handlers": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines URL patterns.\n@var array",
    body: "private static \\$url_handlers = [\n\t'${1}' => '${2}'\n];"
  },
  "Hide ancestor": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "If you extend a class, and don't want to be able to select\nthe old class in the cms, set this to the old class name.\n@var string",
    body: "private static \\$hide_ancestor = '${1:PageType}';"
  },
  "Summary fields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines summary fields commonly used in table columns\nas a quick overview of the data for this dataobject\n@var array",
    body: "private static \\$summary_fields = [\n\t'${1}' => '${2}'\n];"
  },
  "Searchable fields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Defines a default list of filters for the search context\n@var array",
    body: "private static \\$searchable_fields = [\n\t'${1}' => '${2}'\n];"
  },
  "addFieldToTab": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "addFieldToTab(\n\t'${1:Root.Main}',\n\t${0},\n\t'${3:insertBefore}'\n);"
  },
  "addFieldsToTab": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "addFieldsToTab(\n\t'${1:Root.Main}',\n\t[\n\t\t${0}\n\t]\n);"
  },
  "removeByName": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "removeByName([\n\t'${0}'\n]);"
  },
  "getCMSFields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "CMS Fields\n@return FieldList",
    body: "public function getCMSFields()\n{\n\t\\$fields = parent::getCMSFields();\n\t\\$fields->${0}\n\treturn \\$fields;\n}"
  },
  "getCMSFields scafoldless": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "CMS Fields\n@return FieldList",
    body: "public function getCMSFields()\n{\n\t\\$fields = FieldList::create();\n\t\\$fields->push(\n\t\tTabSet::create(\n\t\t\t'Root',\n\t\t\tTab::create('Main')\n\t\t)\n\t);\n\t\\$fields->${0}\n\t\\$this->extend('updateCMSFields', \\$fields);\n\treturn \\$fields;\n}",
    variants: [
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\FieldList",
          "SilverStripe\\Forms\\Tab",
          "SilverStripe\\Forms\\TabSet"
        ]
      }
    ]
  },
  "getSettingsFields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/cms": "3.0+"
      }
    },
    comment: "Settings Tab Fields\n@return FieldList",
    body: "public function getSettingsFields()\n{\n\t\\$fields = parent::getSettingsFields();\n\t\\$fields->${0}\n\t\\$this->extend('updateSettingsFields', \\$fields);\n\treturn \\$fields;\n}"
  },
  "updateCMSFields": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "Update Fields\n@return FieldList",
    body: "public function updateCMSFields(FieldList \\$fields)\n{\n\t\\$owner = $this->owner;\n\t\\$fields->${0}\n\treturn \\$fields;\n}",
    variants: [
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\FieldList"
        ]
      }
    ]
  },
  "getEditForm": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    comment: "@param Int \\$id\n@param FieldList \\$fields\n@return Form",
    body: "public function getEditForm(\\$id = null, \\$fields = null)\n{\n\t\\$form = parent::getEditForm(\\$id, \\$fields);\n\t${0}\n\treturn \\$form;\n}"
  }
}
