// Variables
const nextLink = document.querySelector('.next-link')
const layout = document.querySelector('.layout-container')
const nextButton = document.querySelector('.next')
const finalLayout = document.querySelector('.final-layout')

// Functions
function goToNext(delay) {
  layout.classList.remove('out-to-left')
  var addActive = setTimeout(() => {
    layout.classList.add('out-to-left')
  }, 10)
  setTimeout(() => {
    clearTimeout(addActive)
    simulateClick(nextLink)
  }, delay)
}

// Events Listener
nextButton.addEventListener('click', () => goToNext(1000))
finalLayout.addEventListener('click', () => nextButton.classList.add('active'))
