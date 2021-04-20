import { getRandom } from './playerHp.js'
import { HIT, ATTACK } from './hitAtt.js'
import { $formFight } from './main.js'
import { player1, player2 } from './players.js'

export const enemyAttack = () => {
  const hit = ATTACK[getRandom(3) - 1]
  const defence = ATTACK[getRandom(3) - 1]

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}

export const callAttack = () => {
  const attack = {}

  for (let item of $formFight) {
    if (item.checked && item.name === 'hit') {
      attack.value = getRandom(HIT[item.value])
      attack.hit = item.value
    }

    if (item.checked && item.name === 'defence') {
      attack.defence = item.value
    }

    item.checked = false
  }

  return attack
}

export const updateAttack = () => {
  player1.changeHp(getRandom(50))
  player2.changeHp(getRandom(50))

  player1.renderHP()
  player2.renderHP()
}
