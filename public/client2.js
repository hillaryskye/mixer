var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var clear = document.getElementById('clear')
var first = document.getElementById('first-color')
var second = document.getElementById('second-color')
var mix = document.getElementById('mix-color')
var color = document.getElementsByName('color')
var text = document.getElementById('text')
// var colorTwo = document.getElementsByName('color-two')
// var colorTwo = document.getElementsByClassName('color-two')
var newColor = document.getElementById('mixed')
var colorVal = document.getElementById('color-val')
var finalColor = ''
var firstColor = []
var secondColor = []
var mixedColor = []
var isFirst = false

    for (var i=0; i < color.length; i++) {
      // color.classList.add("color-two");
      // console.log('classList', classList)
        console.log('hello')
      color[i].addEventListener('click', function(e) {
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
          console.log('2nd', secondColor)
        secondColor = 'rgba(' + secondColor + ')'
        second.style.backgroundColor = secondColor

        secondColor = e.target.dataset.colors.split(',')
        secondColor.forEach(function(val, index) {
        secondColor[index] = parseInt(val)

        // add "New color" text after 1st color is picked
        // text.classList.toggle('text')

        mixedColor = [Math.round((firstColor[0] + secondColor[0])/2), Math.round((firstColor[1] + secondColor[1])/2), Math.round((firstColor[2] + secondColor[2])/2), 1]
        finalColor = 'rgba(' + mixedColor.join(',') + ')'
        // Need to figure out how to add to database
        red.value = mixedColor[0]
        green.value = mixedColor[1]
        blue.value = mixedColor[2]
        })
        clear.addEventListener('click', function(e) {
          red.value = 0
          green.value = 0
          blue.value = 0
        })
        // Puts new color on the big circle
        newColor.style.backgroundColor = finalColor
        // Puts rgb values on the big circle
        colorVal.innerHTML = finalColor
        text.innerHTML = "New Color"
        console.log('finalcolor', finalColor)
        }
      })
    }
    console.log('mixedcolor', mixedColor)

  
