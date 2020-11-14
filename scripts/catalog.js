console.info('A Tutorial from YouTube (Recommended) https://www.youtube.com/watch?v=XK7T3mY1V-w')
console.info('02 November 2020 - 13 November 2020')

const initializeChooseOptionButtons = event => {
    const object = event.target;

    if (object.classList.contains('card__choose-option')) {
        const buttonsFromThisBlock = event.target.closest('.card__buying-options').querySelectorAll('.card__choose-option')
        buttonsFromThisBlock.forEach(element => element.classList.remove('chosen'))
        event.target.classList.add('chosen')
    }


}

const initializeBuyButtons = event => {
    if (event.target.classList.contains('card__purchase-btn')) {
        const parentElement = event.target.closest('.card')
        const chooseVariants = parentElement.querySelectorAll('.card__choose-option')

        let newArr = (Array.from(chooseVariants)).filter(element => element.classList.contains('chosen'))
        if (newArr.length == 0)
            alert(`You haven't chosen any variant`)
    }

}

const init = () => {
    getData()

    document.getElementById('app').addEventListener('click', initializeChooseOptionButtons)
    document.getElementById('app').addEventListener('click', initializeBuyButtons)

    let timer = window.setTimeout(check = () => {
        if (Array.from(document.querySelectorAll('.containerCard')).length === 0) {
            timer = setTimeout(check, 1)
        } else {
            initAnimations()
            window.clearTimeout(timer)
        }
    }, 1)

}


init()
