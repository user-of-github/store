const ACCORDANCES = {
    'smartphone': 'Smartphones',
    'laptop': 'Laptops',
    'headphone': 'Headphones',
    'watch': 'Smartwatches',
    'tv': 'Smart TVs'
}

const productType = window.location.search.toString().slice(1)
const url = './database/' + productType + '.json'


const getJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
        console.log(new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status} !`))
    else
        return await response.json()
}


const setData = () => {
    document.querySelector('.promo__title').textContent = ACCORDANCES[productType]
    getJson(url).then(data => {
        renderCards(data)
    })
}
