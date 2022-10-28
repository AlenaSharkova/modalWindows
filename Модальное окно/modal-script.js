
let modalWindows = document.getElementById('modal__windows')
let blackout = document.getElementById('main__blackout')

document.getElementById('main__button').onclick = () => { 
    modalWindows.style.display = 'block'
    blackout.style.display = 'block'
}

document.getElementById('modal__close').onclick = () => {
    modalWindows.style.display = 'none'
    blackout.style.display = 'none'
}
