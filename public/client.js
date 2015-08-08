var red = document.getElementById('red')
var green = document.getElementById('green')
var blue = document.getElementById('blue')
var mix = document.getElementById('mix-color')
var colorOne = document.getElementsByName('color-one')
var colorTwo = document.getElementsByName('color-two')
var newColor = document.getElementById('mixed')
var colorVal = document.getElementById('color-val')
var finalColor = ''
var firstColor = []
var secondColor = []
var mixedColor = []

for (var i=0; i < colorOne.length; i++) {
  colorOne[i].addEventListener('click', function(e) {
    if (e.hasOwnProperty) {
      // colorOne.innerHTML = 'first'
      colorVal.innerHTML = 'Click Another color'
    }
    firstColor = e.target.dataset.colors.split(',')
    firstColor.forEach(function(val, index) {
      firstColor[index] = parseInt(val)
    })
    console.log('1st', firstColor)
  })
}
for (var i=0; i < colorTwo.length; i++) {
  colorTwo[i].addEventListener('click', function(e) {
    secondColor = e.target.dataset.colors.split(',')
    secondColor.forEach(function(val, index) {
      secondColor[index] = parseInt(val)
    console.log('2nd', secondColor)
    console.log('first + second', firstColor[0] + secondColor[0])
    mixedColor = [Math.round((firstColor[0] + secondColor[0])/2), Math.round((firstColor[1] + secondColor[1])/2), Math.round((firstColor[2] + secondColor[2])/2), 1]
    finalColor = 'rgba(' + mixedColor.join(',') + ')'

    // Need to figure out how to add to database
    red.value = mixedColor[0]
    green.value = mixedColor[1]
    blue.value = mixedColor[2]
    })

    // Puts new color on the big circle
    newColor.style.backgroundColor = finalColor

    // Puts rgb values on the big circle
    colorVal.innerHTML = finalColor
    console.log('finalcolor', finalColor)
  })
}
console.log('mixedcolor', mixedColor)
