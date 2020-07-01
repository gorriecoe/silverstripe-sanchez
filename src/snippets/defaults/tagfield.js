module.exports = {
  "TagField": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "silverstripe/tagfield"
      ]
    },
    body: "TagField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t${3:null},\n\t${4}\n)"
  },
  "StringTagField": {
    conditions: {
      scope: ".text.html.php",
      composer: [
        "silverstripe/tagfield"
      ]
    },
    body: "StringTagField::create(\n\t'${1:name}',\n\t'${2:${1:title}}',\n\t${3:[]},\n\texplode(',', $this->${1:name})\n)"
  }
}
