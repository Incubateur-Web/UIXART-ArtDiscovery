// Variables
const cardsContainer = document.querySelector('.cards-container')
const cards = document.querySelectorAll('.card')

// Fonctions
function flip(obj) {
  obj.classList.contains('active')
    ? obj.classList.remove('active')
    : obj.classList.add('active')

  let cardsArray = document.querySelectorAll('.card.active')
  if (cardsArray.length === 8) {
    nextButton.classList.add('active')
  }
}

function release(obj) {
  delay = setTimeout(function () {
    let transX = Math.floor(
      Math.random() * Math.floor(8) - Math.random() * Math.floor(8)
    )
    let transY = Math.floor(
      Math.random() * Math.floor(8) - Math.random() * Math.floor(8)
    )
    let rotate = Math.floor(
      Math.random() * Math.floor(5) - Math.random() * Math.floor(5)
    )
    obj.style.transform = `translate(${transX}px, ${transY}px) rotate(${rotate}deg)`
  }, 10)
}

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', () => flip(cards[i]))
  cards[i].addEventListener('mouseleave', () => release(cards[i]))
}
