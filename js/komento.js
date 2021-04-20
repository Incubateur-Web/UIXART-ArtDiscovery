// Get form object
const form = document.querySelector('.komento-form')
var localStorageFormDone = localStorage.getItem('formDone')

if (parseInt(localStorageFormDone) === 2) {
  form.classList.add('alreadyDone')
} else {
  // XHR Build
  const xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://komento.fr/api/comment')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.setRequestHeader(
    'Authorization',
    'Bearer pub_8Pn8nJ477zkCnkLku0Ndr71aE7pCnuAfzc9Qp0lX'
  )

  // Get datas and send
  getFormDatas = (e, form) => {
    e.preventDefault()
    let formData = {
      author: form.elements['author'].value,
      comment: form.elements['comment'].value,
    }
    // Send datas
    xhr.send(JSON.stringify(formData))
  }

  xhr.onload = () => {
    let response = JSON.parse(xhr.response)
    if (response.result === 'success') {
      if (localStorageFormDone === null) {
        localStorage.setItem('formDone', 1)
        form.classList.add('done')
      } else {
        var newLocalStorage = parseInt(localStorageFormDone) + 1
        localStorage.setItem('formDone', `${newLocalStorage}`)
        form.classList.add('done')
      }
    } else {
      form.classList.add('error')
    }
  }

  form.addEventListener('submit', (e) => getFormDatas(e, form), false)
}
