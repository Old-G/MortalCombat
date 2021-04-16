const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')
const $formFight = document.querySelector('.control')

const HIT = {
  head: 530,
  body: 520,
  foot: 515,
}

const ATTACK = ['head', 'body', 'foot']

const player1 = {
  player: 1,
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['snowball', 'axe', 'knife'],
  attack,
  changeHp,
  elHP,
  renderHP,
}

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['chain', 'axe', 'knife'],
  attack,
  changeHp,
  elHP,
  renderHP,
}

function attack() {
  console.log(this.name + ' Fight!!!')
}

function createElement(tag, className) {
  const $tag = document.createElement(tag)
  if (className) {
    $tag.classList.add(className)
  }

  return $tag
}

function createPlayer(playerData) {
  const $player = createElement('div', 'player' + playerData.player)

  const $progressbar = createElement('div', 'progressbar')

  const $life = createElement('div', 'life')
  $life.style.width = playerData.hp + '%'

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

function getRandom(num) {
  return Math.ceil(Math.random() * num)
}

function elHP() {
  return document.querySelector(`.player${this.player} .life`)
}

function changeHp(changeHP) {
  this.hp -= getRandom(changeHP)
  if (this.hp <= 0) {
    this.hp = 0
  }
}

function renderHP() {
  this.elHP().style.width = this.hp + '%'
}

function createReloadButton() {
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

function playerWin(name) {
  const $winTitle = createElement('div', 'loseTitle')
  if (name) {
    $winTitle.innerText = name + ' WIN!!!'
  } else {
    $winTitle.innerText = 'Draw!!!'
  }

  return $winTitle
}

function getWinner() {
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }
}

function updateButton() {
  if (player1.hp === 0 || player2.hp === 0) {
    $randomBtn.disabled = true
    createReloadButton()
  }
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

function enemyAttack() {
  const hit = ATTACK[getRandom(3) - 1]
  const defence = ATTACK[getRandom(3) - 1]

  return {
    value: getRandom(HIT[hit]),
    hit,
    defence,
  }
}

function callAttack() {
  const enemy = enemyAttack()
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

  console.log('attack ', attack)
  console.log('enemy ', enemy)
}

function updateAttack() {
  player1.changeHp(getRandom(300))
  player2.changeHp(getRandom(300))

  player1.renderHP()
  player2.renderHP()
}

$formFight.addEventListener('submit', (e) => {
  e.preventDefault()

  callAttack()

  updateAttack()

  updateButton()
  getWinner()
})
