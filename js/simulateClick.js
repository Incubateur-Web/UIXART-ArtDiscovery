function simulateClick(elem) {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  })
  var canceled = !elem.dispatchEvent(evt)
}
