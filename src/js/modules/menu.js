const menu = () =>{
	const menuBtn = document.querySelector('.toggler')
	const menuOpen = document.querySelector('.hamburger')
	const menuClose = document.querySelector('.hamburger-close')
	const menu = document.querySelector('.menu__pastBodu')
	const clientWidthScreen = screen.width

	const menuClosedBtnShow = () => {
		menuOpen.style.display = 'none'
		menuClose.style.display = 'flex'
	}

	const menuOpenBtnShow = () => {
		menuClose.style.display = 'none'
		menuOpen.style.display = 'flex'
	}

	const animaOpen = () =>{
		let count = -30
		let idInterval 

		const run = () => {
			count++
			idInterval = requestAnimationFrame(run)
				
			if(count < 0){
				menu.style.left = count * 5  + '%'
			}else{
				cancelAnimationFrame(idInterval)
			}
		}
		run()
	}
	
	const animaClose = () => {
		let count = 0
		let idInterval 

		const run = () => {
			count--
			idInterval = requestAnimationFrame(run)
			
			if(count > -30){
				menu.style.left = count * 5  + '%'
			}else{
				cancelAnimationFrame(idInterval)
			}
		}
		run()
	}

    const menuOpened = () => {
		animaOpen()
		menuClosedBtnShow()		
    }

	const menuOpenedSmall = () => {
		menu.classList.add('small')
		animaOpen()
		menuClosedBtnShow()
	}

	const menuClosed = () => {
		animaClose()
		menuOpenBtnShow()
	}

	const menuClosedSmall = () => {
		animaClose()
		menuOpenBtnShow()
		setTimeout(() => {
			menu.classList.remove('small')
		}, 2000)
		
	}


	if(clientWidthScreen >= 965){
		menuBtn.addEventListener('change', () => {

			if(menuBtn.checked){
				menuOpened()
			}else {
				menuClosed()
			}		
		})

	}else {
		menuBtn.addEventListener('change', () => {

			if(menuBtn.checked){
				menuOpenedSmall()
			}else {
				menuClosedSmall()
			}		
		})
	}
	
}

export default menu