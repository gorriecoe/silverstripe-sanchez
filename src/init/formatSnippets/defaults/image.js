module.exports = {
  "Image": {
    conditions: {
      scope: ".text.html.php",
      composer: {
        "silverstripe/assets": "1.0+"
      }
    },
    body: "Image::class",
    useItems: [
      "SilverStripe\\Assets\\Image"
    ]
  },
  "Set Size Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "SetSize(${1:width},${2:${1:height}})"
  },
  "Set Ratio Size Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "SetRatioSize(${1:width},${2:${1:height}})"
  },
  "Scale Width Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "ScaleWidth(${1:width})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-3.2"
          },
        },
        body: "SetWidth(${1:width})"
      },
      {} // Output top level as variant.
    ]
  },
  "Scale Max Width Image": {
    conditions: {
      scope: ".text.html.ss",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "ScaleMaxWidth(${1:width})"
  },
  "Scale Height Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "ScaleHeight(${1:height})",
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-3.2"
          }
        },
        body: "SetHeight(${1:height})"
      },
      {} // Output top level as variant.
    ]
  },
  "Scale Max Height Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "ScaleMaxHeight(${1:height})"
  },
  "Fit image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "Fit(${1:width},${2:${1:height}})"
  },
  "Fit Max Image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "FitMax(${1:width},${2:${1:height}})"
  },
  "Fill image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "3.2+"
          }
        },
        body: "Fill(${1:width},${2:${1:height}})"
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-3.0"
          },
        },
        body: "CroppedImage(${1:width},${2:${1:height}})"
      }
    ]
  },
  "Fill max image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "FillMax(${1:width},${2:${1:height}})"
  },
  "Crop width image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "CropWidth(${1:width})"
  },
  "Crop height image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.2+"
      }
    },
    body: "CropHeight(${1:width})"
  },
  "Pad image": {
    conditions: {
      scope: ".text.html.ss, .text.html.php",
      composer: {
        "silverstripe/framework": "3.0+"
      }
    },
    variants: [
      {
        conditions: {
          composer: {
            "silverstripe/framework": "3.2+"
          }
        },
        body: "Pad(${1:width},${2:${1:height}},${3:hex})"
      },
      {
        conditions: {
          composer: {
            "silverstripe/framework": "-3.2"
          }
        },
        body: "PaddedImage(${1:width},${2:${1:height}},${3:hex})"
      }
    ]
  }
}
