const carousel = () => {
    let sliderToShow = 3
    const container = document.querySelector('.slider')
    const track = container.querySelector('.carousel')
    const elements = track.querySelectorAll('.slider_item')

    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')

    const clientWidthScreen = screen.width

    if(clientWidthScreen >= 1250){
        sliderToShow = 3
    } else if(clientWidthScreen < 1250 && clientWidthScreen >= 950){
        sliderToShow = 2
    } else if(clientWidthScreen < 950 ){
        sliderToShow = 1
    }

    const elemWidth = Math.floor(container.clientWidth / sliderToShow)

    let position = -elemWidth
     
    elements.forEach(elem => { 
        elem.style.minWidth = `calc(${elemWidth}px - 0px)`
    })

    const setPosition = () => {
   
        let scroll = - (elements.length - sliderToShow) * elemWidth

        if(position > 0){
            position = scroll
        }

        if(position < scroll){
            position = 0
        }

        track.style.transform = `translateX(${position}px)`      
    }

    
    arrowLeft.addEventListener('click', () => {
        position += Math.floor(elemWidth)
        setPosition()

    })

    arrowRight.addEventListener('click', () => {
        position -= Math.floor(elemWidth)
        setPosition()

    })
}

export default carousel



