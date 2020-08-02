![SilverStripe Sanchez](resources/sanchez.png "SilverStripe Sanchez Logo")

# SilverStripe Sanchez

Powers [SilverStripe](http://www.silverstripe.org/) syntax highlighting, snippets, functions and various resources for editors.

- [Atom](https://atom.io/packages/atom-silverstripe)
- [VSCode](https://marketplace.visualstudio.com/items?itemName=adrianhumphreys.silverstripe)

## Features

- Over 300 built in snippets, HOlyy sh!t.
- Reads the project composer.lock file to determine the available snippets.
- Php snippets follow [psr-2 standards](http://www.php-fig.org/psr/psr-2/)
- Snippets inject use item if available and possible.
- Supports 4.\* and 3.\*.
- File icon for .ss.
- Uses full word prefixes so you don't have to remember abbreviations.
- Includes snippets for addon modules such as [tagfield](https://github.com/silverstripe/silverstripe-tagfield) and [linkable](https://github.com/sheadawson/silverstripe-linkable).
- .ss templates include scope and conditional indentation.

## Custom settings and snippets

"I'm A Coder, because I write..."

By default SilverStripe Sanchez will read `.silverstripe_sanchez` from your home directory to customise settings and snippets.

This file can be in any 1 of 3 formats, yml, cson or json.

Here is a basic yml example.

```yml
# Toggle if snippets should include comments.
# Default: true
comments: false

# Toggle if snippets should attempt to inject use item namespacing automatically.
# Default: true
useItems: true

# Define a list of your own snippets.
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.ss"
      # Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      # Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
```

and the same thing in cson (basically the same as yml).

```cson
# Toggle if snippets should include comments.
# Default: true
comments: false

# Toggle if snippets should attempt to inject use item namespacing automatically.
# Default: true
useItems: true

# Define a list of your own snippets.
snippets: {
  "Im a pickle":
    conditions:
      scope: ".text.html.ss"
      # Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      # Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
}
```

and finally the same in json.

```jsonc
{
  // Toggle if snippets should include comments.
  // Default: true
  comments: false,

  // Toggle if snippets should attempt to inject use item namespacing automatically.
  // Default: true
  useItems: true,

  // Define a list of your own snippets.
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

### Snippet body

The body of a snippet is the content being inserted to the editor on completion of the snippet and can use special constructs to control cursors.

```yml
snippets:
  "Im a pickle":
    body: "function(\n\treturn \"I'm a pickle\";\n)"
```

### Snippet tab stops

With tab stops, you can make the editor cursor move inside a snippet. Use `${1}`, `${2}` to specify cursor locations. The number is the order in which tab stops will be visited, whereas `${0}` denotes the final cursor position (if the this is not defined then the end of the body is the final position).  Multiple occurrences of the same tabstop are linked and updated in sync.


```yml
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.php",
      # ...
    body: "function(\n\treturn \"${1}\";\n)"
```

### Snippet placeholders

Placeholders are tab stops with values, like `${1:foo}`. The placeholder text will be inserted and selected such that it can be easily changed.

### Snippet comments

Snippets can have comments automatically inject on completion of a snippet.  Honoring the language syntax.

Check this out:
```yml
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.php",
      # ...
    comment: "I'm not arguing,\nI'm explaining why I'm right"
    body: "public function getSome()\n{\t\n}"
```

output:
```php
<?php

// ...
class
  /**
   * I'm not arguing,
   * I'm explaining why I'm right
   */
  public function getSome(){

  }
```
Note: Sanchez checks for `\n` within comment strings and formats it appropriately.

Soooo... singleline will look like this.

```php
// I'm not arguing, I'm explaining why I'm right
```

As mentioned above sanchez honors the language syntax as well, soooo... if the comment was injected into a ss template.
It will look like this.

```html
<%-- I'm not arguing, I'm explaining why I'm right --%>
```

### Snippet use items

Snippets can also have "use item" namespacing automatically inject on completion of a snippet.

Check this out

```yml
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.php",
      # ...
    body: "here::class"
    useItems:
          - "some\\namespace\\here"
          - "another\\namespace\\there"
```

output

```php
<?php

use some\namespace\here;
use another\namespace\there;

// ...
class
  // ...
  private static $db = [
    'Everywhere' => here::class,
  ];
```

### Snippet prefix

Most snippet libraries require that you define a prefix for the autocomplete to match against.

Sanchez just uses the name ie "Im a pickle" and formats it to "imapickle" prefix for convenience.

To apply a custom prefix just define in the snippet.

Here you go

```yml
snippets:
  "Im a pickle":
    prefix: "idontdomagic"
```

### Snippet variants

Snippets can have multiple variants based of various conditions.

```yml
snippets:
  "Im a pickle":
    conditions:
      scope: ".text.html.php"
      # Required define a list of composer package(s) required to autocomplete this snippet.
      composer:
        "silverstripe/framework": "3.5-4.0"
      # Optionally define a list of node package(s) required to autocomplete this snippet.
      node:
        - "somenodevendor/somenodepackage"
    body: "function(\n\treturn \"Im a pickle!\";\n)"
    variants:
      # Note: Now that variants are enabled for this snippet, the top level is ignored.
      # So a blank variant is required to output the top level snippet.
      # This is totally optional, as some cases you may not want to use the top level
      # for commonalities.
      - {}
      # The variant below changes the framework version condition, the body and injects useItems.
      - conditions:
          composer:
            "silverstripe/framework": "4.0+"
        useItems:
          - "some\\namespace\\here"
          - "another\\namespace\\there"
        body: "function(\n\treturn \"Boom!\";\n)"
      # The variant below changes the scope, framework version condition and the body.
      - conditions:
          scope: ".text.html.ss"
          composer:
            "silverstripe/framework": "4.0+"
        body: "Boom!"
      # Note: All variants will keep the "node" condition as we haven't changed that in any variant.
```

## Develop editor extensions or addons

Using SilverStripe Sanchez to develop an extension or addon for a editor.

### Installation

```
npm i silverstripe-sanchez
```

### Implementation

Below is a rough example of implementing sanchez.

```js
const Enginez = require('silverstripe-sanchez')

// ...

sanchez = null,

activate() {
  sanchez = new Enginez({
    // Define the root project path or paths.
    // Expects an array
    // Ordered desc priority
    rootPaths: workspace.project.getPaths(),

    // Optionally define config settings.
    // This is handy for settings from the editor itself and has the highest priority.
    config: {
      comments: true,
      useItems: true
    }
  })
}

// ...

getSuggestions(request) {
  return sanchez.snippets({
    // Define optional filters.

    // Scope e.g. .text.html.php
    scope: request.scope,

    // Prefix e.g getcmsfields
    prefix: request.prefix,

    // Language silverstripe, ss, php or yml
    language: request.language

  }).map(snippet => {
    // Re-map values here to match the editors required values for snippets.

    // Availables values:
    // snippet.suggestion.body: string
    // snippet.suggestion.name: string
    // snippet.suggestion.information: string
    // snippet.suggestion.description: string
    // snippet.suggestion.url: string
    // snippet.suggestion.type: string
    // snippet.suggestion.className: string
    // snippet.suggestion.useItems: array

    // e.g.
    // const suggestion = snippet.suggestion
    // suggestion.rightLabelHTML = suggestion.information
    // suggestion.displayText = suggestion.name
    // suggestion.iconHTML =  '<i class="icon-ss"></i>'
    // if (this.sanchez.comments) {
    //   suggestion.snippet = suggestion.comment + suggestion.body
    // } else {
    //   suggestion.snippet = suggestion.body
    // }

    return snippet.suggestion
  })
}

// ...

onDidInsertSuggestion ({editor, suggestion}) {
  // Get a list of locations to apply use items.
  sanchez.getUseItemLoc({
    // Pass through the current editor view contents.
    text: editor.getText(),

    // Pass the useItems set specified in the suggestion.
    useItems: suggestion.useItems

  }).forEach(useItem => {
    editor.setTextInBufferRange(
      [
        [useItem.line, 0],
        [useItem.line, 0],
      ],
      useItem.body
    )
  })
}

// ...

deactivate () {
  // Do something to dispose of it.
  sanchez.diposeMeOrSomething()
}
```

### Chuck a badge in there

[![Powered by Sanchez](https://raw.githubusercontent.com/gorriecoe/silverstripe-sanchez/master/resources/poweredby.png)](https://github.com/gorriecoe/silverstripe-sanchez)

```
[![Powered by Sanchez](https://raw.githubusercontent.com/gorriecoe/silverstripe-sanchez/master/resources/poweredby.png](https://github.com/gorriecoe/silverstripe-sanchez)
```

## Maintainer

"I programmed you to believe that."

-   [Gorrie Coe](https://github.com/gorriecoe)
