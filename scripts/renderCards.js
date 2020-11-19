const renderCards = (data) => {
    const wrapper = document.getElementById('app')
    document.querySelector('.promo').style.backgroundImage = 'url(' + data[Math.floor(Math.random() * (data.length))].image + ')';
    data.forEach(good => {
        let optionsString = ''
        for (let counter = 0; counter < good.options.length; counter++)
            optionsString += `<button class="card__choose-option" ${good.options[counter].available === true ? '' : 'disabled'} data-id="${good.options[counter].id}">${good.options[counter].value}</button>`

        const newHTMLcard = `
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
                                            <button class="card__purchase-btn">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            `

        wrapper.insertAdjacentHTML('beforeend', newHTMLcard)
    })
}
