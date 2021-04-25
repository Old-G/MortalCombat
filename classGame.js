import Player from './classPlayer.js'
import { LOGS } from './logs.js'
import { enemyAttack, callAttack, updateAttack } from './attack.js'
import { getWinner } from './playerWin.js'
import { updateButton } from './btns.js'

export const $arenas = document.querySelector('.arenas')
export const $randomBtn = document.querySelector('.button')
export const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

export default class Game {
  player1 = new Player({
    player: 1,
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    rootSelector: 'arenas',
  })

  player2 = new Player({
    player: 2,
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    rootSelector: 'arenas',
  })

  generateLogs = (type, player1, player2, value) => {
    let text = ''

    const date = new Date()
    const gameDate = `${date.getHours()}:${date.getMinutes()}`

    switch (type) {
      case 'start':
        text = LOGS[type]
          .replace('[time]', gameDate)
          .replace('[player1]', player1.name)
          .replace('[player2]', player2.name)
        break
      case 'hit':
        text = LOGS[type][Math.floor(Math.random() * type.length)]
          .replace('[playerKick]', player1.name)
          .replace('[playerDefence]', player2.name)
        text = `<p>${gameDate} - ${text} ${-value} ${'HP'} [${
          player2.hp
        } /100]</p>`
        break
      case 'defence':
        text = LOGS[type][Math.floor(Math.random() * type.length)]
          .replace('[playerKick]', player2.name)
          .replace('[playerDefence]', player1.name)
        break
      case 'end':
        text = LOGS[type][Math.floor(Math.random() * type.length)]
          .replace('[playerWins]', player1.name)
          .replace('[playerLose]', player2.name)
        break
      case 'draw':
        text = LOGS[type]
        break
    }
    const el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', el)
  }

  start = () => {
    $formFight.addEventListener('submit', (e) => {
      e.preventDefault()
      const {
        hit: hitEnemy,
        defence: defenceEnemy,
        value: valueEnemy,
      } = enemyAttack()
      const { hit, defence, value } = callAttack()

      if (defence !== hitEnemy) {
        player1.changeHp(valueEnemy)
        player1.renderHP()
        generateLogs('hit', player2, player1, value)
      } else {
        generateLogs('defence', player1, player2)
      }

      if (defenceEnemy !== hit) {
        player2.changeHp(valueEnemy)
        player2.renderHP()
        generateLogs('hit', player1, player2, valueEnemy)
      } else {
        generateLogs('defence', player2, player1)
      }

      updateAttack()

      updateButton()
      getWinner()
    })
    return
  }

  init = () => {
    player1.createPlayer()
    player2.createPlayer()
    generateLogs('start', player1, player2)
    return
  }
}
