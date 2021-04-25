import { getRandom } from './utils.js'
import { createElement } from './createElem.js'

export default class Player {
  constructor(props) {
    this.player = props.player
    this.name = props.name
    this.hp = props.hp
    this.img = props.img
    this.selector = `player${this.player}`
    this.rootSelector = props.rootSelector
  }
  attack = () => {
    console.log(`${this.name}${' Fight!!!'}`)
  }

  elHP = () => {
    return document.querySelector(`.${this.selector} .life`)
  }

  changeHp = (changeHP) => {
    this.hp -= getRandom(changeHP)
    if (this.hp <= 0) {
      this.hp = 0
    }
  }

  renderHP = () => {
    this.elHP().style.width = `${this.hp}${'%'}`
  }

  createPlayer = () => {
    const $player = createElement('div', this.selector)

    const $progressbar = createElement('div', 'progressbar')

    const $life = createElement('div', 'life')
    $life.style.width = `${this.hp}${'%'}`

    const $name = createElement('div', 'name')
    $name.innerText = this.name

    const $character = createElement('div', 'character')

    const $img = createElement('img')
    $img.src = this.img

    $player.appendChild($progressbar)
    $player.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)

    const $root = document.querySelector(`.${this.rootSelector}`)
    $root.appendChild($player)

    return $player
  }
}


