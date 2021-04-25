import { player1, player2 } from './classGame.js'
import { $arenas } from './classGame.js'
import { createElement } from './createElem.js'

export const playerWin = (name) => {
  const $winTitle = createElement('div', 'loseTitle')
  name
    ? ($winTitle.innerText = `${name}${' WIN!!!'}`)
    : ($winTitle.innerText = 'Draw!!!')

  return $winTitle
}

export const getWinner = () => {
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
    generateLogs('end', player2, player1)
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
    generateLogs('end', player1, player2)
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
    generateLogs('draw')
  }
}
