module.exports = {
  "Embeddable": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "gorriecoe/silverstripe-embed"
      ]
    },
    body: "Embeddable::class",
    useItems: [
      "gorriecoe\\Embed\\Extensions\\Embeddable"
    ]
  }
}
