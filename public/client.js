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
    firstColor = e.target.dataset.colors.split(',')
    firstColor.forEach(function(val, index) {
      firstColor[index] = parseInt(val)
    })
    console.log(firstColor)
  })
}


for (var i=0; i < colorTwo.length; i++) {
  colorTwo[i].addEventListener('click', function(e) {
    secondColor = e.target.dataset.colors.split(',')
    secondColor.forEach(function(val, index) {
      secondColor[index] = parseInt(val)
    })
    console.log(secondColor)
    console.log(firstColor[0] + secondColor[0])
    mixedColor = [Math.round((firstColor[0] + secondColor[0])/2), Math.round((firstColor[1] + secondColor[1])/2), Math.round((firstColor[2] + secondColor[2])/2), 1]
    finalColor = 'rgba(' + mixedColor.join(',') + ')'
    newColor.style.backgroundColor = finalColor
    colorVal.innerHTML = finalColor
    console.log(finalColor)
  })
}



console.log(mixedColor)
