module.exports = {
  "Require themed javascript": {
    variants: [
      {
        conditions: {
          scope: ".text.html.ss",
          composer: {
            "silverstripe/framework": "3.5+"
          }
        },
        body: "<% require themedJavascript('${1}') %>"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "3.5-4.0"
          }
        },
        body: "Requirements::themedJavascript('${1}');"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Requirements::themedJavascript('${1}');",
        namespaces: [
          "SilverStripe\\View\\Requirements"
        ]
      }
    ]
  },
  "Require themed CSS": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "<% require themedCSS('${1}') %>"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "Requirements::themedCSS('${1}');"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Requirements::themedCSS('${1}');",
        namespaces: [
          "SilverStripe\\View\\Requirements"
        ]
      }
    ]
  },
  "Require Javascript": {
    variants: [
      {
        conditions: {
          scope: ".text.html.ss",
          composer: {
            "silverstripe/framework": "3.0+"
          }
        },
        body: "<% require javascript('${1}') %>"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "Requirements::javascript('${1}');"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Requirements::javascript('${1}');",
        namespaces: [
          "SilverStripe\\View\\Requirements"
        ]
      }
    ]
  },
  "Require CSS": {
    variants: [
      {
        conditions: {
          scope: ".text.html.ss",
          composer: {
            "silverstripe/framework": "3.0+"
          }
        },
        body: "<% require css('${1}') %>"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "Requirements::css('${1}');"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Requirements::css('${1}');",
        namespaces: [
          "SilverStripe\\View\\Requirements"
        ]
      }
    ]
  },
  "Requirement block": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Requirements::block('${1}');",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        namespaces: [
          "SilverStripe\\View\\Requirements"
        ]
      }
    ]
  }
}
