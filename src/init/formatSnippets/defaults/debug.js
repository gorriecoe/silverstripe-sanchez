module.exports = {
  "Debug message": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Debug::message(${1});",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Dev\\Debug"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Debug show": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Debug::show(${1});",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Dev\\Debug"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Debug log": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "-4.0"
      }
    },
    body: "Debug::log(${1});"
  },
  "Debug dump": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Debug::dump(${1});",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Dev\\Debug"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "SS_Log": {
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
        body: "Injector::inst()->get(LoggerInterface::class)->${2:error}('${1}');",
        useItems: [
          "Psr\\Log\\LoggerInterface",
          "SilverStripe\\Core\\Injector\\Injector"
        ]
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-4.0"
          }
        },
        body: "SS_Log::log('${1}', ${2:SS_Log::ERR});"
      }
    ]
  }
}
