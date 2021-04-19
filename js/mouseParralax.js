let dde = document.documentElement
dde.addEventListener('mousemove', (e) => {
  let ow = dde.offsetWidth
  let oh = dde.offsetHeight

  let newClientX = e.clientX - ow / 2
  let newClientY = e.clientY - oh / 2

  let percW = newClientX / ow
  let percH = newClientY / oh

  dde.style.setProperty('--mouseX', -percW + '%')
  dde.style.setProperty('--mouseY', -percH + '%')
})
