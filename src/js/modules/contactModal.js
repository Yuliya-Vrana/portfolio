const contactModal = () => {
    const modalBtn = document.querySelector('.modal-btn')
    const formBody = document.querySelector('#form')
    const modalClose = document.querySelector('.modal-close')

    modalBtn.addEventListener('click', () => { 
        formBody.style.display = 'flex'
        formBody.classList.add("modal")
    })

    modalClose.addEventListener('click', () => {
        formBody.style.display = 'none'
        formBody.classList.remove("modal")
    })
}

export default contactModal



