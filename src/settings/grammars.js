module.exports = {
  "scopeName": "text.html.ss",
  "name": "HTML (Silverstripe)",
  "fileTypes": [
    "ss"
  ],
  "foldingStartMarker": "<%\\s[^end].*\\s%>",
  "foldingStopMarker": "<%\\send.*\\s%>",
  "patterns": [
    {
      "include": "text.html.basic"
    },
    {
      "begin": "<% (include|require)",
      "end": "-? %>",
      "name": "keyword.control.import.include.ss"
    },
    {
      "begin": "<% +(?!>)[-=]?",
      "captures": {
        "0": {
          "name": "punctuation.section.embedded.ruby"
        }
      },
      "end": "-? %>",
      "name": "keyword.control.ss",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.comment.ruby"
            }
          },
          "match": "(#).*?(?=-? %>)",
          "name": "comment.line.number-sign.ruby"
        }
      ]
    },
    {
      "begin": "<%--+(?!>)[-=]?",
      "captures": {
        "0": {
          "name": "punctuation.definition.comment.html"
        }
      },
      "end": "-?--%>",
      "name": "comment.block.ss",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.comment.html"
            }
          },
          "match": "(#).*?(?=-?--%>)",
          "name": "invalid.illegal.bad-comments-or-CDATA.html"
        }
      ]
    },
    {
      "begin": "<%t",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.begin.html.ss"
        }
      },
      "end": "-? %>",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.tag.end.html.ss"
        }
      },
      "name": "keyword.control.import.include.ss"
    },
    {
      "begin": "(<(?!/|%)([a-zA-Z]*))",
      "beginCaptures": {
        "1": {
          "name": "punctuation.definition.tag.begin.html.ss"
        }
      },
      "end": "(?!%>)(>)",
      "endCaptures": {
        "1": {
          "name": "punctuation.definition.tag.end.html.ss"
        }
      },
      "name": "meta.tag.block.any.html.ss",
      "patterns": [
        {
          "include": "#ss-variable-open"
        },
        {
          "include": "#ss-variable-closed"
        }
      ]
    },
    {
      "include": "#ss-variable-open"
    },
    {
      "include": "#ss-variable-closed"
    }
  ],
  "repository": {
    "ss-variable-open": {
      "match": "\\$(\\.?[\\w]+(\\([\\,\\.'\"\\s\\w]*\\))*)*",
      "name": "variable.ss"
    },
    "ss-variable-closed": {
      "begin": "{\\$",
      "end": "}",
      "name": "variable.ss"
    }
  }
}
