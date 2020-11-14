const productType = window.location.search.toString().slice(1)
const url = './database/' + productType + '.json'


const getJson = async (url) => {
    const response = await fetch(url);
    if (!response.ok)
        console.log(new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status} !`))
    else
        return await response.json()
}


const getData = () => {
    getJson(url).then(data => {
        renderCards(data)
    })
}
