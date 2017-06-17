(function () {
  const input = document.querySelector('input[type="file"]')

  input.addEventListener('change', function (e) {
    if (e.target.files) {
      const {files} = e.target

      for (let i = 0; i < files.length; i += 1) {
        const file = files[i]
        const url = window.URL.createObjectURL(file)
        document.body.appendChild(createImageEl(url))
      }
    }
  })

  function createImageEl (src) {
    const img = document.createElement('img')
    img.src = src
    return img
  }
})()