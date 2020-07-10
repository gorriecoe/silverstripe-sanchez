module.exports = {
  "Convert value to XML attribute": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2att(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to HTML attribute": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2htmlatt(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to HTML name": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2htmlname(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to HTML ID": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2htmlid(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to XML": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2xml(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to javascript": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2js(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to JSON": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2json(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert array to JSON": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::array2json(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to SQL": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2sql(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert symbolic identifier to SQL": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::symbol2sql(${1}, ${2:'.'})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert XML to raw text": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::xml2raw(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert JSON to an object": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::json2obj(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert JSON to an array": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::json2array(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert XML to an array": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::xml2array(${1}, {$2:false}, {$3:false})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert to link if valid": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::linkIfMatch(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert HTML to plain text": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::html2raw(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Convert value to url": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Convert::raw2url(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Core\\Convert"
        ]
      },
      {} // Output top level as variant.
    ]
  }
}
