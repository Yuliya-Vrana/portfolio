const ibg = () =>{
    let ibg=document.querySelectorAll(".ibg")

    ibg.forEach((item, i) => {
        if(item.querySelector('img'))
            { item.style.backgroundImage = 'url(' + item.querySelector('img').getAttribute('src') + ')'}
    })
}

export default ibg