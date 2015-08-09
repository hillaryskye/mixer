var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var clear = document.getElementById('clear')
var first = document.getElementById('first-color')
var second = document.getElementById('second-color')
var mix = document.getElementById('mix-color')
var colorOne = document.getElementsByName('color-one')
var colorTwo = document.getElementsByName('color-two')
var two = document.getElementsByClassName('color-two')
var newColor = document.getElementById('mixed')
var colorVal = document.getElementById('color-val')
var finalColor = ''
var firstColor = []
var secondColor = []
var mixedColor = []
// var counter = 0

for (var i=0; i < colorOne.length; i++) {
  colorOne[i].addEventListener('click', function(e) {
    if (e.hasOwnProperty) {
      // colorOne.innerHTML = 'first'
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

      // counter++
    })
    console.log('1st', firstColor)
  })
}
    // if (counter === 1) {
    //   colorTwo[i] = two[i]
    // }
for (var i=0; i < colorTwo.length; i++) {
  colorTwo[i].addEventListener('click', function(e) {
    // Puts second color in small circle
    secondColor = e.target.dataset.colors + ', 1'
    secondColor = 'rgba(' + secondColor + ')'
    second.style.backgroundColor = secondColor

    secondColor = e.target.dataset.colors.split(',')
    secondColor.forEach(function(val, index) {
      secondColor[index] = parseInt(val)

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
    console.log('finalcolor', finalColor)
  })
}
console.log('mixedcolor', mixedColor)
