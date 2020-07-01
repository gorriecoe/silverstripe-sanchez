module.exports = {
  "Get the root URL": {
    prefix: "baseurl",
    variants: [
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "BaseURL"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Director::baseURL()",
        namespaces: [
          "SilverStripe\\Control\\Director"
        ]
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "3.0-4.0"
          }
        },
        body: "Director::baseURL()"
      }
    ]
  },
  "Get the absolute root URL": {
    prefix: "absolutebaseurl",
    variants: [
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "AbsoluteBaseURL"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "Director::absoluteBaseURL()",
        namespaces: [
          "SilverStripe\\Control\\Director"
        ]
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "3.0-4.0"
          }
        },
        body: "Director::absoluteBaseURL()"
      }
    ]
  },
  "Get base folder": {
    prefix: "basefolder",
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Director::baseFolder()",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        namespaces: [
          "SilverStripe\\Control\\Director"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Redirect": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/framework": "3.0-4.0"
      }
    },
    body: "Director::redirect(${1})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        namespaces: [
          "SilverStripe\\Control\\Director"
        ]
      },
      {} // Output top level as variant.
    ]
  },
  "Current Member": {
    prefix: "member",
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        scope: ".text.html.ss",
        body: "CurrentMember"
      },
      {
        scope: ".text.html.php",
        body: "Member::currentUser()"
      }
    ]
  },
  "Current Member ID": {
    prefix: "memberid",
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        scope: ".text.html.ss",
        body: "CurrentMember.ID"
      },
      {
        scope: ".text.html.php",
        body: "Member::currentUserID()"
      }
    ]
  },
  "Current SiteConfig": {
    prefix: "siteconfig",
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "SiteConfig"
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "4.0+"
          }
        },
        body: "SiteConfig::current_site_config()",
        namespaces: [
          "SilverStripe\\SiteConfig\\SiteConfig"
        ]
      },
      {
        conditions: {
          scope: ".text.html.php",
          composer: {
            "silverstripe/framework": "3.0-4.0"
          }
        },
        body: "SiteConfig::current_site_config()"
      }
    ]
  },
  "Title": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Title"
  },
  "Menu Title": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "MenuTitle"
  },
  "Content": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Content"
  },
  "MetaTags": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "MetaTags"
  },
  "Relative Link": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Link"
  },
  "Absolute Link": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "AbsoluteLink"
  },
  "isSection Linking Mode": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "isSection"
  },
  "isCurrent Linking Mode": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "isCurrent"
  },
  "inSection Linking Mode": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "inSection(${1:page-url})"
  },
  "URLSegment": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "URLSegment"
  },
  "ClassName": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "ClassName"
  },
  "Children": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Children"
  },
  "ChildrenOf": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "ChildrenOf(${1:page-url})"
  },
  "AllChildren": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "AllChildren"
  },
  "Menu": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Menu(${1:page-url})"
  },
  "Page": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Page(${1:page-url})"
  },
  "Level": {
    prefix: "level",
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Level(${1:1})"
  },
  "Count": {
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        scope: ".text.html.ss",
        body: "Count"
      },
      {
        scope: ".text.html.php",
        body: "Count()"
      }
    ]
  },
  "Traverse Up Scope": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Up"
  },
  "Current Object Scope": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Me"
  },
  "Top Level Scope": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Top"
  },
  "Breadcrumbs": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "Breadcrumbs"
  },
  "Form": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        scope: ".text.html.ss",
        body: "Form"
      },
      {
        scope: ".text.html.php",
        body: "Form::create(\n\t${0}\n)"
      }
    ]
  },
  "Limit Word Count": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "LimitWordCount(${1:26},${2:'...'})"
  },
  "Limit Characters": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "LimitCharacters(${1:20},${2:'...'})"
  },
  "Escape XML": {
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        scope: ".text.html.ss",
        body: "EscapeXML"
      },
      {
        scope: ".text.html.php",
        body: "EscapeXML()"
      }
    ]
  },
  "First Paragraph": {
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.ss",
        },
        body: "FirstParagraph"
      },
      {
        conditions: {
          scope: ".text.html.php",
        },
        body: "FirstParagraph()"
      }
    ]
  },
  "No HTML": {
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.ss",
        },
        body: "NoHTML"
      },
      {
        conditions: {
          scope: ".text.html.php",
        },
        body: "NoHTML()"
      }
    ]
  },
  "Theme directory": {
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "ThemeDir"
      },
      {
        conditions: {
          scope: ".text.html.php"
        },
        body: "$this->ThemeDir()"
      }
    ]
  },
  "Main translator function": {
    prefix: "_t",
    conditions: {
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          scope: ".text.html.php"
        },
        body: "_t(\n\t__CLASS__ . '.${1/([a-zA-Z]*)([^a-zA-Z]*)/\\U$1/}',\n\t'${2:${1}}'\n)"
      },
      {
        conditions: {
          scope: ".text.html.ss"
        },
        body: "<%t ${1/([a-zA-Z.]*)([^a-zA-Z.]*)/\\U$1/} '${2:${1}}' %>"
      }
    ]
  },
}
