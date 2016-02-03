var colorVal = document.getElementById('color-val'),
    color = document.getElementsByName('color'),
    finalColor = '', firstColor = [], secondColor = [], mixedColor = [], isFirst = false

// Added array & object with for loop  to get all getElementById's to refactor code and make it more efficient
var colorsArr = ["red", "green", "blue", "clear", "text", "mixed", "first", "second"]

for (var i=0; i < colorsArr.length; i++) {
  var colorsRGB = {
      type: colorsArr[i],
      event: function(type) {
        type = document.getElementById('colorsRGB.type')
      }
    }
    console.log('type', colorsRGB.type)
}

    for (var k=0; k < color.length; k++) {
      color[k].addEventListener('click', function(e) {
        if (isFirst === false) {
        console.log('isFirst', isFirst)
      if (e.hasOwnProperty) {
        colorVal.innerHTML = 'Click second color'
      }
      // Puts first color in small circle
      firstColor = e.target.dataset.colors + ', 1'
      firstColor = 'rgba(' + firstColor + ')'
      first.style.backgroundColor = firstColor

      // Splits red, green & blue values for first color
      firstColor = e.target.dataset.colors.split(',')
      firstColor.forEach(function(val, index) {
        firstColor[index] = parseInt(val)
      })
      console.log('1st', firstColor)
      isFirst = true
      } // End of firstColor click
      else if (isFirst === true) {
        secondColor = e.target.dataset.colors + ', 1'
        secondColor = 'rgba(' + secondColor + ')'
        second.style.backgroundColor = secondColor

        secondColor = e.target.dataset.colors.split(',')

        secondColor.forEach(function(val, index) {
        secondColor[index] = parseInt(val)

        // add "New color" text after 1st color is picked
        // text.classList.toggle('text')

        mixedColor = [Math.round((firstColor[0] + secondColor[0])/2), Math.round((firstColor[1] + secondColor[1])/2), Math.round((firstColor[2] + secondColor[2])/2), 1]
        finalColor = 'rgba(' + mixedColor.join(',') + ')'

        console.log('2nd', secondColor)
        red.value = mixedColor[0] // using colors array
        green.value = mixedColor[1] // using colors array
        blue.value = mixedColor[2] // using colors array
        })

          clear.addEventListener('click', function(e) {

          red.value = 0
          green.value = 0
          blue.value = 0
        })

        // Puts new color on the big circle
        mixed.style.backgroundColor = finalColor

        // Puts rgb values on the big circle
        colorVal.innerHTML = finalColor

        text.innerHTML = "New Color"
        console.log('finalcolor', finalColor)
        console.log('mixedcolor', mixedColor)
        }
      })
    }
