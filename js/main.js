let posX = 0
let posY = 0


let MoveDiv = document.querySelector(".game-zone")

let btnLeft = document.querySelector("#left")
let btnRight = document.querySelector("#right")
let btnUp = document.querySelector("#up")
let btnDown = document.querySelector("#down")

btnLeft.addEventListener('click',DivMoveLeft)
btnRight.addEventListener('click',DivMoveRight)
btnUp.addEventListener('click',DivMoveUp)
btnDown.addEventListener('click',DivMoveDown)

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
    if(posX >= 460) {
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