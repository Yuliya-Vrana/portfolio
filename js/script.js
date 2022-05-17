function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }

}

ibg();

function check(){
	let oncheck = document.getElementById("check");
	let bgcolor = document.getElementById("bgcolor");

	if (oncheck.checked) {	
		bgcolor.classList.remove("bg-dark")
		bgcolor.classList.add("bg-light");
		}
		else {
			bgcolor.classList.remove("bg-light");
			bgcolor.classList.add("bg-dark")
		}
}




