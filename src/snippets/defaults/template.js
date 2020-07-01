module.exports = {
  "Loop": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% loop ${1} %>\n\t${2}\n<% end_loop %>"
  },
  "With": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% with ${1} %>\n\t${2}\n<% end_with %>"
  },
  "If": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% if ${1} %>\n\t${2}\n<% end_if %>"
  },
  "If not": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% if not ${1} %>\n\t${2}\n<% end_if %>"
  },
  "If else": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% if ${1} %>\n\t${2}\n<% else %>\n\t${3}\n<% end_if %>"
  },
  "Else": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% else %>\n\t"
  },
  "If Loop": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% if ${1} %>\n\t<% loop ${1} %>\n\t\t${2}\n\t<% end_loop %>\n<% end_if %>"
  },
  "if With": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% if ${1} %>\n\t<% with ${1} %>\n\t\t${2}\n\t<% end_with %>\n<% end_if %>"
  },
  "Include": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% include ${1} %>"
  },
  "Base Tag": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    body: "<% base_tag %>"
  }
}
