import { player1, player2 } from './players.js'
import { $arenas, $randomBtn } from './main.js'

export const createReloadButton = () => {
  const $reloadButtonDiv = document.createElement('div')
  $reloadButtonDiv.classList.add('reloadWrap')
  const $reloadButton = document.createElement('button')
  $reloadButton.classList.add('button')
  $reloadButton.innerText = 'Reload'

  $reloadButton.addEventListener('click', function () {
    window.location.reload()
  })

  $reloadButtonDiv.appendChild($reloadButton)
  $arenas.appendChild($reloadButtonDiv)
}

export const updateButton = () => {
  if (player1.hp === 0 || player2.hp === 0) {
    $randomBtn.disabled = true
    createReloadButton()
  }
}
