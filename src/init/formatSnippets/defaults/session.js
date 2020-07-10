module.exports = {
  "Set session value": {
    prefix: "sessionset",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Session::set('${1}', ${2})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Control\\Session"
        ]
      },
      {}
    ]
  },
  "Get session value": {
    prefix: "sessionget",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Session::get('${1}')",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Control\\Session"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Get all sessions": {
    prefix: "sessiongetall",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Session::get_all('${1}')",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Control\\Session"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Clear session value": {
    prefix: "sessionclear",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Session::clear('${1}')",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Control\\Session"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Clear all sessions": {
    prefix: "sessionclearall",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Session::clear_all('${1}')",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        useItems: [
          "SilverStripe\\Control\\Session"
        ]
      },
      {}
    ]
  }
}
