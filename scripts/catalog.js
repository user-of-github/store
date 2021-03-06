const CartArray = JSON.parse(localStorage.getItem('store-card')) || []

//console.log(CartArray)


const InitializeChooseOptionButtons = event => {
    const objectClicked = event.target;

    if (objectClicked.classList.contains('card__choose-option')) {
        const priceForDisplaying = objectClicked.getAttribute('data-price')

        objectClicked.closest('.card').querySelector('.card__price').textContent = priceForDisplaying + ' $'
        const buttonsFromThisBlock = event.target.closest('.card__buying-options').querySelectorAll('.card__choose-option')
        buttonsFromThisBlock.forEach(element => element.classList.remove('chosen'))
        objectClicked.classList.add('chosen')
    }
}

const InitializeBuyButtons = event => {
    const objectClicked = event.target

    if (objectClicked.classList.contains('card__purchase-btn')) {
        const parentElement = objectClicked.closest('.card')
        const chooseVariantsBtn = parentElement.querySelectorAll('.card__choose-option')

        const arrayOfChosen = (Array.from(chooseVariantsBtn)).filter(element => element.classList.contains('chosen'))

        if (arrayOfChosen.length == 0)
            alert(`You haven't chosen any variant`)
        else {
            const chosen = arrayOfChosen[0]
            const addedObject = {
                id: chosen.getAttribute('data-id'),
                name: chosen.closest('.card').querySelector('.card__title').textContent,
                option: chosen.textContent,
                price: Number.parseInt(chosen.getAttribute('data-price')),
                counter: 1
            }
            if (CartArray.findIndex(el => el.id === addedObject.id) !== -1)
                CartArray[CartArray.findIndex(el => el.id === addedObject.id)].counter++;
            else
                CartArray.push(addedObject)

            localStorage.setItem('store-card', JSON.stringify(CartArray))
        }
    }
}

const EqualHeights = () => {
    let maxHeight = 0

    Array.from(document.querySelectorAll('.card')).forEach(card => {
        if (maxHeight < card.offsetHeight)
            maxHeight = card.offsetHeight
    })

    Array.from(document.querySelectorAll('.card')).forEach(card => {
        card.style.height = maxHeight + 'px'
    })
}

const Init = () => {
    document.title += ('. ' + productType.slice(0, 1).toUpperCase() + productType.slice(1))

    const Application = document.getElementById('app')

    setData()

    Application.addEventListener('click', InitializeChooseOptionButtons)
    Application.addEventListener('click', InitializeBuyButtons)

    let timer = window.setTimeout(check = () => {
        if (Array.from(Application.querySelectorAll('.card')).length === 0)
            timer = setTimeout(check, 1)
        else {
            initAnimations()
            EqualHeights()
            window.clearTimeout(timer)
        }
    }, 1)

    document.querySelectorAll('.card').forEach(card => {
        console.log(card.offsetHeight)
    })
}


Init()
