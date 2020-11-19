const initAnimations = () => {
    const cards = document.querySelectorAll('.card')
    const SCALE_CIRCLE = 2 // увеличение круга
    const SCALE_IMAGE = 1.2

    cards.forEach(card => {
        const titleCard = card.querySelector('.card__title'),
            subtitleCard = card.querySelector('.card__subtitle'),
            imgCard = card.querySelector('.card__picture img'),
            cardBuyBlock = card.querySelector('.card__buy'),
            cardCircle = card.querySelector('.circle')
        
        card.addEventListener('mousemove', event => {
            cardCircle.style.transform = `scale(${SCALE_CIRCLE})`
            imgCard.style.transform = `rotateZ(7deg) scale(${SCALE_IMAGE})`
        })

        card.addEventListener('mouseleave', event => {
            cardCircle.style.transform = `scale(1)`
            imgCard.style.transform = 'rotateZ(0) scale(1)'
        })
    })
}
