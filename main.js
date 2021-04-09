const subzero = {
  name: 'Subzero',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['snowball', 'axe', 'knife'],
  attack: function () {
    console.log(subzero.name + ' Fight!!!')
  },
}
subzero.attack()

const scorpion = {
  name: 'Scorpion',
  hp: 60,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['chain', 'axe', 'knife'],
  attack: function () {
    console.log(scorpion.name + ' Fight!!!')
  },
}
scorpion.attack()

// function createPlayer1(name, hp, img) {
//   const $player1 = document.createElement('div')
//   $player1.classList.add('player1')

//   const $progressbar = document.createElement('div')
//   $progressbar.classList.add('progressbar')

//   const $life = document.createElement('div')
//   $life.classList.add('life')
//   $life.style.width = hp + '%'

//   const $name = document.createElement('div')
//   $name.classList.add('name')
//   $name.innerText = name

//   const $character = document.createElement('div')
//   $character.classList.add('character')

//   const $img = document.createElement('img')
//   $img.src = img

//   $player1.appendChild($progressbar)
//   $player1.appendChild($character)
//   $progressbar.appendChild($life)
//   $progressbar.appendChild($name)
//   $character.appendChild($img)

//   const $arenas = document.querySelector('.arenas')
//   $arenas.appendChild($player1)
// }
// createPlayer1(subzero.name, subzero.hp, subzero.img)

// function createPlayer2(name, hp, img) {
//   const $player2 = document.createElement('div')
//   $player2.classList.add('player2')

//   const $progressbar = document.createElement('div')
//   $progressbar.classList.add('progressbar')

//   const $life = document.createElement('div')
//   $life.classList.add('life')
//   $life.style.width = hp + '%'

//   const $name = document.createElement('div')
//   $name.classList.add('name')
//   $name.innerText = name

//   const $character = document.createElement('div')
//   $character.classList.add('character')

//   const $img = document.createElement('img')
//   $img.src = img

//   $player2.appendChild($progressbar)
//   $player2.appendChild($character)
//   $progressbar.appendChild($life)
//   $progressbar.appendChild($name)
//   $character.appendChild($img)

//   const $arenas = document.querySelector('.arenas')
//   $arenas.appendChild($player2)
// }
// createPlayer2(scorpion.name, scorpion.hp, scorpion.img)

function createPlayer(name, hp, img) {
  const $player = document.createElement('div')
  $player.classList.add('player1')

  const $progressbar = document.createElement('div')
  $progressbar.classList.add('progressbar')

  const $life = document.createElement('div')
  $life.classList.add('life')
  $life.style.width = hp + '%'

  const $name = document.createElement('div')
  $name.classList.add('name')
  $name.innerText = name

  const $character = document.createElement('div')
  $character.classList.add('character')

  const $img = document.createElement('img')
  $img.src = img

  $player.appendChild($progressbar)
  $player.appendChild($character)
  $progressbar.appendChild($life)
  $progressbar.appendChild($name)
  $character.appendChild($img)

  const $arenas = document.querySelector('.arenas')
  $arenas.appendChild($player)
}
createPlayer(subzero.name, subzero.hp, subzero.img)
createPlayer(scorpion.name, scorpion.hp, scorpion.img)
