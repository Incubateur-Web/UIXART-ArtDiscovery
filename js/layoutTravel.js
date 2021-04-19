function pageScroll(event, layout) {
  event.stopPropagation()
  layout.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
}
let layouts = document.getElementsByClassName('layout')
for (let i = 0; i < layouts.length; i++) {
  layouts[i].addEventListener('click', (e) => pageScroll(e, layouts[i]))
}
