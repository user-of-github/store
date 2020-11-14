console.info('02 November 2020 - 13 November 2020')

const initializeChooseOptionButtons = event => {
    const objectClicked = event.target;

    if (objectClicked.classList.contains('card__choose-option')) {
        const buttonsFromThisBlock = event.target.closest('.card__buying-options').querySelectorAll('.card__choose-option')
        buttonsFromThisBlock.forEach(element => element.classList.remove('chosen'))
        objectClicked.classList.add('chosen')
    }
}

const initializeBuyButtons = event => {
    const objectClicked = event.target

    if (objectClicked.classList.contains('card__purchase-btn')) {
        const parentElement = objectClicked.closest('.card')
        const chooseVariantsBtn = parentElement.querySelectorAll('.card__choose-option')

        const arrayOfChosen = (Array.from(chooseVariantsBtn)).filter(element => element.classList.contains('chosen'))

        if (arrayOfChosen.length == 0)
            alert(`You haven't chosen any variant`)
    }
}

const init = () => {
    document.title += ('. ' + productType.slice(0, 1).toUpperCase() + productType.slice(1))
    
    const Application = document.getElementById('app')

    getData()

    Application.addEventListener('click', initializeChooseOptionButtons)
    Application.addEventListener('click', initializeBuyButtons)

    let timer = window.setTimeout(check = () => {
        if (Array.from(Application.querySelectorAll('.containerCard')).length === 0)
            timer = setTimeout(check, 1)
        else {
            initAnimations()
            window.clearTimeout(timer)
        }
    }, 1)
}


init()
