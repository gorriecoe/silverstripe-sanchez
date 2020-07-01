module.exports = {
  "SegmentField": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "silverstripe/segment-field"
      ]
    },
    body: "SegmentField::create(\n\t'${1:name}',\n\t'${2:${1:title}}'\n)",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "4.0+",
            "silverstripe/segment-field": "2.0+"
          }
        },
        namespaces: [
          "SilverStripe\\Forms\\SegmentField"
        ]
      }
    ]
  }
}
