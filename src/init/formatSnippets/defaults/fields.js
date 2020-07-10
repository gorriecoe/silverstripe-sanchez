module.exports = {
  "setAttribute": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setAttribute('${1}', '${2}')"
  },
  "setValue": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setValue(${1})"
  },
  "setName": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setName('${1}')"
  },
  "setTitle": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setTitle('${1}')"
  },
  "setRightTitle": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setRightTitle('${1}')"
  },
  "setLeftTitle": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setLeftTitle('${1}')"
  },
  "Set description": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setDescription('${1}')"
  },
  "Add extra class": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "addExtraClass('${1}')"
  },
  "Remove extra class": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "removeExtraClass('${1}')"
  },
  "Required": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Required()"
  },
  "HTMLEditorField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "HtmlEditorField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\HTMLEditor\\HtmlEditorField"
        ]
      }
    ]
  },
  "UploadField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "UploadField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\AssetAdmin\\Forms\\UploadField"
        ]
      }
    ]
  },
  "Set folder name": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setFolderName('${1}')"
  },
  "Set allowed extensions": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "4.0+"
      }
    },
    body: "setAllowedExtensions(array(${1}))"
  },
  "Set allowed file categories": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setAllowedFileCategories(array(${1}))"
  },
  "Set allowed max file number": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setAllowedMaxFileNumber(${1:null})"
  },
  "Set can upload": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setCanUpload(${1:true})"
  },
  "Set can attach existing": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setCanAttachExisting(${1:true})"
  },
  "TextField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "TextField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\TextField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "EmailField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "EmailField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\EmailField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "ReadonlyField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "ReadonlyField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\ReadonlyField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "NumericField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "NumericField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\NumericField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "CurrencyField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "CurrencyField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\CurrencyField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "NumericField readonly": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "NumericField_Readonly::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\NumericField_Readonly"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "CheckboxField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "CheckboxField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\CheckboxField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "CheckboxField readonly": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "CheckboxField_Readonly::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\CheckboxField_Readonly"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "NullableField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "NullableField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\NullableField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "TextareaField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "TextareaField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\TextareaField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "setRows": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setRows(${1})"
  },
  "setColumns": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setColumns(${1})"
  },
  "TreeDropdownField": {
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
        body: "TreeDropdownField::create(\n\t'${1:name}ID',\n\t'${2:${1:title}}',\n\t${3:SiteTree::class}\n)",
        useItems: [
          "SilverStripe\\Forms\\TreeDropdownField",
          "SilverStripe\\CMS\\Model\\SiteTree"
        ]
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "TreeDropdownField::create(\n\t'${1:name}ID',\n\t'${2:${1:title}}',\n\t'${3:SiteTree}'\n)"
      }
    ]
  },
  "TreeDropdownField readonly": {
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
        body: "TreeDropdownField_Readonly::create(\n\t'${1:name}ID',\n\t'${2:${1:title}}',\n\t${3:SiteTree::class}\n)",
        useItems: [
          "SilverStripe\\Forms\\TreeDropdownField_Readonly",
          "SilverStripe\\CMS\\Model\\SiteTree"
        ]
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "TreeDropdownField_Readonly::create(\n\t'${1:name}ID',\n\t'${2:${1:title}}',\n\t'${3:SiteTree}'\n)"
      }
    ]
  },
  "DropdownField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "DropdownField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t${3:datalist}\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\DropdownField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "setEmptyString": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "setEmptyString('${1}')"
  },
  "LookupField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "LookupField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t'${3:datalist}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\LookupField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "ListboxField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "ListboxField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t'${3:datalist}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\ListboxField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GroupedDropdownField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GroupedDropdownField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t'${3:datalist}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GroupedDropdownField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "OptionsetField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "OptionsetField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t'${3:datalist}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\OptionsetField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "CheckboxSetField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "CheckboxSetField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t'${3:datalist}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\CheckboxSetField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "HeaderField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "HeaderField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\HeaderField"
        ]
      }
    ]
  },
  "HiddenField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "HiddenField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\HiddenField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "LabelField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "LabelField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\LabelField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridField": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GridField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t\\$this->${1}(),\n\t${4}\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridField"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridFieldConfig_Base": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GridFieldConfig_Base::create(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldConfig_Base"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridFieldConfig_RecordEditor": {
    "prefix": "gridfieldconfig_recordeditor",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GridFieldConfig_RecordEditor::create(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldConfig_RecordEditor"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridFieldConfig_RelationEditor": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GridFieldConfig_RelationEditor::create(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldConfig_RelationEditor"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridFieldConfig_RecordViewer": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "GridFieldConfig_RecordViewer::create(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldConfig_RecordViewer"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "addComponent": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "addComponent(${1})"
  },
  "removeComponentsByType": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "removeComponentsByType(${1})"
  },
  "GridFieldButtonRow": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "new GridFieldButtonRow('before')",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "3.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldButtonRow"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "GridFieldToolbarHeader": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "new GridFieldToolbarHeader()",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "3.0+"
          }
        },
        useItems: [
          "SilverStripe\\Forms\\GridField\\GridFieldToolbarHeader"
        ]
      }
    ]
  }
}
