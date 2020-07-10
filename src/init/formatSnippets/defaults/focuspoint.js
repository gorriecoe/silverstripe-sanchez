module.exports = {
  "Focus Fill Image": {
    conditions: {
      composer: [
        "jonom/focuspoint"
      ]
    },
    variants: [
      {
        scope: ".text.html.ss, .text.html.php",
        composer: {
          "jonom/focuspoint": "2.0+"
        },
        body: "FocusFill(${1:width},${2:${1:height}})"
      },
      {
        scope: ".text.html.ss, .text.html.php",
        composer: {
          "jonom/focuspoint": "-2.0"
        },
        body: "CroppedFocusedImage(${1:width},${2:${1:height}})"
      }
    ]
  },
  "Focus Fill Max Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "jonom/focuspoint": "2.0+"
      }
    },
    body: "FocusFillMax(${1:width},${2:${1:height}})"
  },
  "Focus Crop Width Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "jonom/focuspoint": "2.0+"
      }
    },

    "minVersion": "2.0",
    body: "FocusCropWidth(${1:width})"
  },
  "Focus Crop Height Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "jonom/focuspoint": "2.0+"
      }
    },
    body: "FocusCropHeight(${1:width})"
  }
}
