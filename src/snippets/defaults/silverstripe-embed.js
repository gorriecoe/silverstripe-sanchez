module.exports = {
  "Embeddable": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "gorriecoe/silverstripe-embed"
      ]
    },
    body: "Embeddable::class",
    namespaces: [
      "gorriecoe\\Embed\\Extensions\\Embeddable"
    ]
  }
}
