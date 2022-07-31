const light = () =>{
	const oncheck = document.getElementById("check")
	const bgcolor = document.getElementById("bgcolor")

    oncheck.addEventListener('click', () => {
        if (oncheck.checked) {	
		    bgcolor.classList.remove("bg-dark")
		    bgcolor.classList.add("bg-light")
		}
		else {
			bgcolor.classList.remove("bg-light")
			bgcolor.classList.add("bg-dark")
		}
    })
}

export default light