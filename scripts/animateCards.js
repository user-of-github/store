const initAnimations = () => {
    const cardContainers = document.querySelectorAll('.containerCard')
    const SCALE_CIRCLE = 5 // увеличение круга
    const SCALE_IMAGE = 1.1

    cardContainers.forEach(container => {
        const card = container.querySelector('.card')
        const titleCard = card.querySelector('.card__title'),
            subtitleCard = card.querySelector('.card__subtitle'),
            imgCard = card.querySelector('.card__picture img'),
            cardBuyBlock = card.querySelector('.card__buy'),
            cardCircle = card.querySelector('.circle')

        container.addEventListener('mouseenter', event => {
            card.style.transition = 'none'
        })
        container.addEventListener('mousemove', event => {
            cardCircle.style.transform = `scale(${SCALE_CIRCLE})`
            imgCard.style.transform = `rotateZ(15deg) scale(${SCALE_IMAGE})`
        })

        container.addEventListener('mouseleave', event => {
            cardCircle.style.transform = `scale(1)`
            imgCard.style.transform = 'rotateZ(0) scale(1)'
        })
    })
}
