const Application = document.getElementById('app')
const CartArray = JSON.parse(localStorage.getItem('store-card')) || []

const updateCart = () => {
    if (CartArray.length === 0) {
        Application.querySelector('.cart__body').textContent = 'Cart is empty ...'
    }

    const cartItemsContainer = document.getElementById('cart__items')
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
                    <button class="button changeCount Plus">-</button>
                    <span class="cart__counter">${item.counter}</span>
                    <button class="button changeCount Minus">+</button>
                </div>
            </div>
        `
        cartTotalSum += (Number.parseInt(item.price) * Number.parseInt(item.counter))
        cartItemsContainer.insertAdjacentHTML('beforeend', itemCard)
    })

    totalSumContainer.textContent = cartTotalSum + ' $'
}

const init = () => {
    updateCart()
    document.addEventListener('click', event => {
        if (event.target.classList.contains('changeCount')) {
            
        }
    })
}


init()
