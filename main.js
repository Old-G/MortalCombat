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

function changeHp(player) {
  const $playerLife = document.querySelector(
    '.player' + player.player + ' .life'
  )
  player.hp -= Math.ceil(Math.random() * 20)
  $playerLife.style.width = player.hp + '%'
  console.log('HP: ', player.hp)

  if (player.hp <= 0) {
    $playerLife.style.width = 0
    $arenas.appendChild(playerWin(player.name))
    $randomBtn.disabled = true
  }
}

// function playerLose(name) {
//   const $loseTitle = createElement('div', 'loseTitle')
//   $loseTitle.innerText = name + ' lose'

//   return $loseTitle
// }

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle')
  $winTitle.innerText = name + ' WIN!!!'

  return $winTitle
}

$randomBtn.addEventListener('click', () => {
  console.log('click')
  changeHp(player1)
  changeHp(player2)
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
