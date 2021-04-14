const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Subzero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['snowball', 'axe', 'knife'],
  attack: function () {
    console.log(player1.name + ' Fight!!!')
  },
  changeHp: changeHp,
  elHP: elHP,
  renderHP: renderHP,
}
player1.attack()

const player2 = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['chain', 'axe', 'knife'],
  attack: function () {
    console.log(player2.name + ' Fight!!!')
  },
  changeHp: changeHp,
  elHP: elHP,
  renderHP: renderHP,
}
player2.attack()

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

function changeHp(changeHP) {
  this.hp -= getRandom(changeHP)
  if (this.hp <= 0) {
    this.hp = 0
  }
  return this.hp
}

function elHP() {
  const $playerLife = document.querySelector(`.player${this.player} .life`)
  return $playerLife
}

function renderHP() {
  return (this.elHP().style.width = `${this.hp}%`)
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle')
  if (name) {
    $winTitle.innerText = name + ' WIN!!!'
  } else {
    $winTitle.innerText = 'Draw!!!'
  }

  return $winTitle
}

$randomBtn.addEventListener('click', () => {
  player1.changeHp(getRandom(20))
  player2.changeHp(getRandom(20))

  player1.renderHP()
  player2.renderHP()

  if (player1.hp === 0 || player2.hp === 0) {
    $randomBtn.disabled = true
  }

  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
  }
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
