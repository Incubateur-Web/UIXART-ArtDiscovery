// Variables
const nextButton = document.querySelector('.next')
const finalLayoutSwap = document.querySelector('.final-layout-swap')
const layout = document.querySelector('.layout-container')
const congrats = ['empathie', 'definition', 'ideation', 'modelisation', 'test']

// Functions
function getElementsOrder() {
  setTimeout(function () {
    var element = document.getElementsByClassName('element')
    let elementsTable = []
    for (var i = 0; i < element.length; i++) {
      elementsTable.push(element[i].id)
    }
    if (arrayEquals(elementsTable, congrats)) {
      nextButton.classList.add('active')
      var i = 0
      function myLoop() {
        setTimeout(function () {
          element[i].classList.add('done')
          i++
          if (i < element.length) {
            myLoop()
          }
        }, 100)
      }
      myLoop()
    }
  }, 10)
}

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  )
}

//Swap
const swappable = new Swappable.default(document.querySelectorAll('.swap'), {
  draggable: '.element',
})
swappable.on('swappable:stop', () => getElementsOrder())

// Events Listener
finalLayoutSwap.addEventListener(
  'click',
  () => (layout.style.transform = 'none')
)
