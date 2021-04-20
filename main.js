import { player1, player2 } from './players.js'
import { logs } from './logs.js'
import { enemyAttack, callAttack, updateAttack } from './attack.js'
import { getWinner } from './win.js'
import { updateButton } from './btns.js'
import { createElement } from './createElem.js'

export const $arenas = document.querySelector('.arenas')
export const $randomBtn = document.querySelector('.button')
export const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

const createPlayer = (playerData) => {
  const $player = createElement('div', 'player' + playerData.player)

  const $progressbar = createElement('div', 'progressbar')

  const $life = createElement('div', 'life')
  $life.style.width = `${playerData.hp}${'%'}`

  const $name = createElement('div', 'name')
  $name.innerText = playerData.name

  const $character = createElement('div', 'character')

  const $img = createElement('img')
  $img.src = playerData.img

  $player.appendChild($progressbar)
  $player.appendChild($character)
  $progressbar.appendChild($life)
  $progressbar.appendChild($name)
  $character.appendChild($img)

  return $player
}

export const generateLogs = (type, player1, player2, value) => {
  let text = ''

  const date = new Date()
  const gameDate = `${date.getHours()}:${date.getMinutes()}`

  switch (type) {
    case 'start':
      text = logs[type]
        .replace('[time]', gameDate)
        .replace('[player1]', player1.name)
        .replace('[player2]', player2.name)
      break
    case 'hit':
      text = logs[type][Math.floor(Math.random() * type.length)]
        .replace('[playerKick]', player1.name)
        .replace('[playerDefence]', player2.name)
      text = `<p>${gameDate} - ${text} ${-value} ${'HP'} [${
        player2.hp
      } /100]</p>`
      break
    case 'defence':
      text = logs[type][Math.floor(Math.random() * type.length)]
        .replace('[playerKick]', player2.name)
        .replace('[playerDefence]', player1.name)
      break
    case 'end':
      text = logs[type][Math.floor(Math.random() * type.length)]
        .replace('[playerWins]', player1.name)
        .replace('[playerLose]', player2.name)
      break
    case 'draw':
      text = logs[type]
      break
  }
  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
}

$formFight.addEventListener('submit', (e) => {
  e.preventDefault()
  const enemy = enemyAttack()
  const player = callAttack()

  if (player.defence !== enemy.hit) {
    player1.changeHp(enemy.value)
    player1.renderHP()
    generateLogs('hit', player2, player1, player.value)
  } else {
    generateLogs('defence', player1, player2)
  }

  if (enemy.defence !== player.hit) {
    player2.changeHp(enemy.value)
    player2.renderHP()
    generateLogs('hit', player1, player2, enemy.value)
  } else {
    generateLogs('defence', player2, player1)
  }

  updateAttack()

  updateButton()
  getWinner()
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
generateLogs('start', player1, player2)
