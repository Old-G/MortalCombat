const $arenas = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')

const HIT = {
  head: 30,
  body: 20,
  foot: 15,
}

const logs = {
  start:
    'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
  end: [
    'Результат удара [playerWins]: [playerLose] - труп',
    '[playerLose] погиб от удара бойца [playerWins]',
    'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
  ],
  hit: [
    '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
    '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
    '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
    '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
    '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
    '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
    '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
    '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
    '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
    '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
    '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
    '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
    '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
    '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
    '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
    '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
    '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
    '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
  ],
  defence: [
    '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
    '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
    '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
    '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
    '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
    '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
    '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
  ],
  draw: 'Ничья - это тоже победа!',
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
  console.log(`${this.name}${' Fight!!!'}`)
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
  this.elHP().style.width = `${this.hp}${'%'}`
}

function createReloadButton() {
  const $reloadButtonDiv = document.createElement('div')
  $reloadButtonDiv.classList.add('reloadWrap')
  const $reloadButton = document.createElement('button')
  $reloadButton.classList.add('button')
  $reloadButton.innerText = 'Reload'

  $reloadButton.addEventListener('click', function () {
    window.location.reload()
    startLogs('start', gameDate, player1, player2)
  })

  $reloadButtonDiv.appendChild($reloadButton)
  $arenas.appendChild($reloadButtonDiv)
}

function playerWin(name) {
  const $winTitle = createElement('div', 'loseTitle')
  name
    ? ($winTitle.innerText = `${name}${' WIN!!!'}`)
    : ($winTitle.innerText = 'Draw!!!')

  return $winTitle
}

function getWinner() {
  if (player1.hp === 0 && player1.hp < player2.hp) {
    $arenas.appendChild(playerWin(player2.name))
    endLogs('end', player2, player1)
  } else if (player2.hp === 0 && player2.hp < player1.hp) {
    $arenas.appendChild(playerWin(player1.name))
    endLogs('end', player1, player2)
  } else if (player1.hp === 0 && player2.hp === 0) {
    $arenas.appendChild(playerWin())
    drawLogs('draw')
  }
}

function updateButton() {
  if (player1.hp === 0 || player2.hp === 0) {
    $randomBtn.disabled = true
    createReloadButton()
  }
}

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

function updateAttack() {
  player1.changeHp(getRandom(50))
  player2.changeHp(getRandom(50))

  player1.renderHP()
  player2.renderHP()
}

function generateLogs(type, player1, player2) {
  const text = logs[type][Math.floor(Math.random() * type.length)]
    .replace('[playerKick]', player1.name)
    .replace('[playerDefence]', player2.name)
  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
  console.log(text)
}

const date = new Date()
const gameDate = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

function startLogs(type, gameDate, player1, player2) {
  const text = logs[type]
    .replace('[time]', gameDate)
    .replace('[player1]', player1.name)
    .replace('[player2]', player2.name)
  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
  console.log(text)
}

function endLogs(type, player1, player2) {
  const text = logs[type][Math.floor(Math.random() * type.length)]
    .replace('[playerWins]', player1.name)
    .replace('[playerLose]', player2.name)
  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
  console.log(text)
}

function drawLogs(type) {
  const text = logs[type]
  const el = `<p>${text}</p>`
  $chat.insertAdjacentHTML('afterbegin', el)
  console.log(text)
}

$formFight.addEventListener('submit', (e) => {
  e.preventDefault()
  const enemy = enemyAttack()
  const player = callAttack()

  if (player.defence !== enemy.hit) {
    player1.changeHp(enemy.value)
    player1.renderHP()
    generateLogs('hit', player2, player1)
  }

  if (enemy.defence !== player.hit) {
    player2.changeHp(enemy.value)
    player2.renderHP()
    generateLogs('hit', player1, player2)
  }

  updateAttack()

  updateButton()
  getWinner()
})

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
startLogs('start', gameDate, player1, player2)
