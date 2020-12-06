const switchToggle = document.querySelector(".switch-input")
const input = document.querySelector(".linput")
const output = document.querySelector(".rinput")
const translateBtn = document.querySelector(".translateBtn")
const resetBtn = document.querySelector('.reset')
const baseUrl = 'https://api.funtranslations.com/translate/minion.json'



const reset = () => {
  input.value = ''
  output.value = ''
}

const translate = () => {
  let encoded = `${baseUrl}?text=${encodeURI(input.value)}`
  fetch(encoded)
    .then(response => response.json())
    .then(json => output.value = json.contents.translated)
    .catch(e => {
      alert('error: either you\'re offline or the api request limit has been reached. Kindly switch to Turbo Mode by clicking on the toggle to have uninterrupted translation.')
      console.log(e.message)
    })
}

const switchHandler = (e) => {
  reset()
  let bool = e.target.checked
  if (bool) {
    console.log('turbo mode on')
    translateBtn.style.display = 'none'
    mt_watch(mt_lib, bool)
  } else {
    console.log('static mode')
    translateBtn.style.display = ''
    unmount_watch(bool)
  }
}

switchToggle.addEventListener('change', switchHandler )

translateBtn.addEventListener('click', translate)

resetBtn.addEventListener('click', reset)