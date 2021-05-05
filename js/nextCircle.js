// Variables
const nextLink = document.querySelector('.next-link')
const nextButton = document.querySelector('.next')
const animationLayout = document.querySelector('.circle-animation')
const finalLayout = document.querySelector('.final-layout')

// Functions
function goToNext(delay) {
  animationLayout.classList.remove('active')
  var addActive = setTimeout(() => {
    animationLayout.classList.add('active')
  }, 10)
  setTimeout(() => {
    clearTimeout(addActive)
    simulateClick(nextLink)
  }, delay)
}

// Events Listener
nextButton.addEventListener('click', () => goToNext(1000))
finalLayout.addEventListener('click', () => nextButton.classList.add('active'))
