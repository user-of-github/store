console.info('02 November 2020 - 01 December 2020')

const URL = 'database/main.json'

const getJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
        console.log(new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status} !`))
    else
        return await response.json()
}

const renderCards = (data) => {
    const Application = document.getElementById('app')
    data.forEach(element => {
        const newCard = `
                        <a class="card" href="catalog.html?${element.type}">
                        <img src="${element.image}" class="card__img">
                        <h2 class="card__title">${element.title}</h2>
                        </a>
                        `
        Application.insertAdjacentHTML('beforeend', newCard)
    })
}
const init = () => {
    getJson(URL).then(data => {
        renderCards(data)
    })
}

init()
