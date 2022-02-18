let posX = 0
let posY = 0
let size_clinet = document.documentElement.clientWidth
let size = document.querySelector(".game-zone")

// Коннект эллементов

let btnLeft = document.querySelector("#left")
let btnRight = document.querySelector("#right")
let btnUp = document.querySelector("#up")
let btnDown = document.querySelector("#down")
let head = document.querySelector(".gamer")
let crep = document.querySelector("#js-head_crep")
let db = document.querySelector("#js-head_db")
let dore = document.querySelector("#js-head_do")
let steve = document.querySelector("#js-head_steve")

head.style.background = "url('./img/Creeper.jpg')" // Картинка игрока

// Конект кнопок

btnLeft.addEventListener('click',DivMoveLeft) // Влево
btnRight.addEventListener('click',DivMoveRight) // Вправо
btnUp.addEventListener('click',DivMoveUp) // Вверх
btnDown.addEventListener('click',DivMoveDown) // Вниз
crep.addEventListener('click',head_crep)
db.addEventListener('click',head_db)
dore.addEventListener('click',head_do)
steve.addEventListener('click',head_steve)

// Изменение картинки

function head_crep(){
    head.style.background = "url('./img/Creeper.jpg')"
}
function head_db(){
    head.style.background = "url('./img/diamond_block.jpg')"
}
function head_do(){
    head.style.background = "url('./img/diamond_ore.jpg')"
}
function head_steve(){
    head.style.background = "url('./img/steve.jpg')"
}

// Адаптив (xD)

let size_zone = (size_clinet - 150) + "px"
let size_zone_npx = (size_clinet - 150)
size.style.width = size_zone

// Управление

function DivMoveLeft(){
    let MoveDiv = document.querySelector('.gamer')
    if(posX <= 0) {
        alert("ERROR")
    }
    else {
        if(MoveDiv) {
            posX = posX - 10
            MoveDiv.style.left = posX + 'px'
        }
    }
}

function DivMoveRight(){
    let MoveDiv = document.querySelector('.gamer')
    if(posX >= (size_zone_npx - 25)) {
        alert("ERROR")
    }
    else {
        if(MoveDiv) {
            posX = posX + 10
            MoveDiv.style.left = posX + 'px'
        }
    }
}

function DivMoveDown(){
    let MoveDiv = document.querySelector('.gamer')
    if(posY >= 460) {
        alert("ERROR")
    }
    else {
        if(MoveDiv) {
            posY = posY + 10
            MoveDiv.style.top = posY + 'px'
        }
    }
}

function DivMoveUp(){
    let MoveDiv = document.querySelector('.gamer') 
    if(posY < 10) {
        alert("ERROR")
    }
    else {
        if(MoveDiv) {
            posY = posY - 10
            MoveDiv.style.top = posY + 'px'
        }
    }
}