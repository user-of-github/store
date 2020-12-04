const Application = document.getElementById('app')
const CartArray = JSON.parse(localStorage.getItem('store-card')) || []

const updateCart = () => {
    
    if (CartArray.length === 0) {
        Application.querySelector('.cart__body').innerHTML = '<h2 class="empty">Cart is empty ...</h2>'
    }

    const cartItemsContainer = document.getElementById('cart__items')
    cartItemsContainer.textContent = ''
    const totalSumContainer = document.getElementById('cart__total-price')
    let cartTotalSum = 0
    CartArray.forEach(item => {
        const itemCard =
            `
            <div class="cart__item" data-id="${item.id}">
                <h3 class="cart__item-title">${item.name}</h3>
                <span class="cart__item-option">${item.option}</span>

                <span class="cart__price">(${item.price}$ / unit)</span>
                <div class="cart__count">
                    <button class="button changeCount Minus">-</button>
                    <span class="cart__counter">${item.counter}</span>
                    <button class="button changeCount Plus">+</button>
                </div>
            </div>
        `
        cartTotalSum += (Number.parseInt(item.price) * Number.parseInt(item.counter))
        cartItemsContainer.insertAdjacentHTML('beforeend', itemCard)
    })

    totalSumContainer.textContent = cartTotalSum + ' $'
}

const changeCounter = event => {
    if (event.target.classList.contains('changeCount')) {
        const chosenId = event.target.closest('.cart__item').getAttribute('data-id')
        const index = CartArray.findIndex(el => el.id === chosenId)
        
        const delta = (event.target.classList.contains('Plus') ? 1 : -1)
        //alert(delta)
        CartArray[index].counter += delta
        
        if (CartArray[index].counter === 0)
            CartArray.splice(index, 1)
        
        localStorage.setItem('store-card', JSON.stringify(CartArray))
        updateCart()
    }
}

const init = () => {
    updateCart()
    document.addEventListener('click', changeCounter)
}


init()
