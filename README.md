![SilverStripe Sanchez](resources/sanchez.png "SilverStripe Sanchez Logo")

# SilverStripe Sanchez

Powers [SilverStripe](http://www.silverstripe.org/) syntax highlighting, snippets, functions and various resources for editors such as [Atom](https://atom.io/packages/atom-silverstripe) and [VSCode](https://marketplace.visualstudio.com/items?itemName=gorriecoe.silverstripe).

## Features

- Over 300 built in snippets HOlyy shit.
- Reads the project composer.lock file to determine the available snippets.
- Php snippets follow [psr-2 standards](http://www.php-fig.org/psr/psr-2/)
- Snippets inject use namespace if available
- Supports 4.\* and 3.\*
- File icon for .ss
- Uses full word prefixes so you don't have to remember abbreviations
- Includes snippets for addons modules such as [tagfield](https://github.com/silverstripe-labs/silverstripe-tagfield) and [linkable](https://github.com/sheadawson/silverstripe-linkable)
- .ss templates include scope and conditional indentation.

## Installation

```
npm i silverstripe-sanchez --save
```

## Custom settings and snippets "I'm A Coder, because I write..."

By default SilverStripe Sanchez will read `.silverstripe_sanchez` from your home directory to customise settings and snippets.

This file can be in the any 3 formats, yml, cson or json.

Here is a basic yml example.

```yml
# Toggle if snippets should include comments.
# Default: true
comments: false

# Toggle if snippets should attempt to inject namespaces automatically.
# Default: true
namespacing: true

# Define a list of your own snippets.
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.ss"
      // Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      // Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
```

and the same thing in cson (basically the same a yml).

```cson
# Toggle if snippets should include comments.
# Default: true
comments: false

# Toggle if snippets should attempt to inject namespaces automatically.
# Default: true
namespacing: true

# Define a list of your own snippets.
snippets: {
  "Im a pickle":
    conditions:
      scope: ".text.html.ss"
      // Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      // Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
}
```

and finally the same in json.

```
{
  # Toggle if snippets should include comments.
  # Default: true
  comments: false,

  # Toggle if snippets should attempt to inject namespaces automatically.
  # Default: true
  namespacing: true,

  # Define a list of your own snippets.
  snippets: {
    "Im a pickle": {
      conditions: {
        scope: ".text.html.ss",
        // Required define a list of composer package(s) required to autocomplete this snippet.
        composer: {
          "silverstripe/framework": "3.5-4.0"
        },
        // Optionally define a list of node package(s) required to autocomplete this snippet.
        node: [
          "somenodevendor/somenodepackage"
        ]
      },
      body: "function(\n\treturn \"Im a pickle!\";\n)"
    }
  }
}
```

### Snippet variants

Snippets can have multiple variants based of various conditions.

```yml
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.ss"
      // Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      // Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
    variants:
      # A blank variant is required to output the top level snippet.
      -
      # The variant below changes the framework version condition, the body and injects namespaces.
      -
        conditions:
          composer:
            "silverstripe/framework": "4.0+"
        namespaces:
          - "some\\namespace\\here"
          - "another\\namespace\\here"
        body: "function(\n\treturn \"Boom!\";\n)"

```

## Develop editor extensions or addons

Using SilverStripe Sanchez to develop an extension or addon for an editor.

Below is a rough example of implementing sanchez.

```js
const sanchez = require('silverstripe-sanchez')

// ...

someKindOfSubscription: null,

activate() {
  this.someKindOfSubscription = sanchez.init({
    // Define paths to folders containing '.silverstripe_sanchez' file for
    // custom config and creating, editing snippets.
    // This automatically looks in your home directory.
    // Expects an array
    // Ordered desc priority
    configPaths: [
      'My/Silverstripe/Projects/Folder'
    ],

    // Optionally define config settings.
    // This is handy for settings from the editor itself and has the highest priority.
    config: {
      comments: true,
      namespacing: true
    },

    // Define paths to folders containing 'composer.lock' file to help filter snippets.
    // Expects an array
    // Ordered desc priority
    composerPaths: workspace.project.getPaths(),

    // Define paths to folders containing 'package-lock.json' file to help filter snippets.
    // Expects an array
    // Ordered desc priority
    nodePaths: workspace.project.getPaths(),
  })
}

// ...

getSuggestions(request) {
  return sanchez.conditions(
    // Full list of available snippets built during activate.
    this.someKindOfSubscription.snippets,
    // Scope e.g. .text.html.php
    request.scope,
    // Prefix e.g getcmsfields
    request.prefix,
    // Full list of available composer packages found during activate.
    this.someKindOfSubscription.composerPackages,
    // Full list of available node packages found during activate.
    this.someKindOfSubscription.nodePackages,
  ).map(snippet => {
    // Re-map values here to match the editors required values for snippets.
    // Availables values:
    // snippet.suggestion.body: string
    // snippet.suggestion.name: string
    // snippet.suggestion.information: string
    // snippet.suggestion.description: string
    // snippet.suggestion.url: string
    // snippet.suggestion.type: string
    // snippet.suggestion.className: string
    // snippet.suggestion.namespaces: array
    // e.g.
    // const suggestion = snippet.suggestion
    // suggestion.rightLabelHTML = suggestion.information
    // suggestion.displayText = suggestion.name
    // suggestion.iconHTML =  '<i class="icon-ss"></i>'
    return snippet.suggestion
  })
}

// ...

onDidInsertSuggestion ({editor, suggestion}) {
  if (suggestion.namespaces && this.someKindOfSubscription.namespacing) {
    // Get a list of locations to apply namespacing
    sanchez.namespace(
      // Pass through the current editor view contents.
      editor.getText(),
      // Pass the namespaces set specified in the suggestion.
      suggestion.namespaces
    ).forEach(namespace => {
      editor.setTextInBufferRange(
        [
          [namespace.line, 0],
          [namespace.line, 0],
        ],
        namespace.body
      )
    })
  }
}

// ...

deactivate () {
  // Do something to dispose of it.
  this.someKindOfSubscription.diposeMeOrSomething()
}
```

## Maintainer "I programmed you to believe that."

-   [Gorrie Coe](https://github.com/gorriecoe)
