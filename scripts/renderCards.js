const renderCards = data => {
    const wrapper = document.getElementById('app')

    document.querySelector('.promo').style.backgroundImage = 'url(' + data[Math.floor(Math.random() * (data.length))].image + ')'

    data.forEach(good => {
        let optionsString = ''
        let counterOfDisabledOptions = 0

        let minPrice = good.options[0].price
        for (let counter = 0; counter < good.options.length; counter++) {
            if (Number.parseInt(good.options[counter].price) < minPrice) {
                minPrice = Number.parseInt(good.options[counter].price)
            }

            optionsString += `<button class="card__choose-option" ${good.options[counter].available === true ? '' : 'disabled'} data-id="${good.options[counter].id}" data-price="${good.options[counter].price}">${good.options[counter].value}</button>`

            counterOfDisabledOptions += (good.options[counter].available === false ? 1 : 0)
        }
        const disabledForBuyBtn = (counterOfDisabledOptions === good.options.length ? 'disabled' : '')

        const newHTMLcard =
            `
<div class="card">
    <div class="card__picture">
        <div class="circle"></div>     
        <img src="${good.image}" alt="">
    </div>
    <div class="card__info">
        <h2 class="card__title">${good.title}</h2>
        <h3 class="card__subtitle">«${good.subtitle}»</h3>
        <p class="card__characteristics">${good.description}</p>
    </div>
    <div class="card__buy">
        <div class="card__buying-options">${optionsString}</div>
        <div class="card__purchase">
            <button class="button card__purchase-btn"  ${disabledForBuyBtn}>Add to cart</button>
            <span class="card__price">From ${minPrice} $</span>
        </div>
    </div>
</div>
`

        wrapper.insertAdjacentHTML('beforeend', newHTMLcard)
    })
}
