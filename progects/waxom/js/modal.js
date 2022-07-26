const modalBtn = document.querySelector(".modal__button")

const modal = document.querySelector(".modal")
const modalInner = document.querySelector(".modal__inner")

function open() {
	modal.style.display = "flex"
};

function closed() {
	modal.style.display = "";
};

modalBtn.addEventListener("click", open);

modal.addEventListener("click", (addEventListener) => {
	const modalContent = event.target.closest(".modal__inner")
	if(!modalContent) {
		
		closed()
	}
})

const clsBtn = document.createElement('span');

clsBtn.innerText = 'x'

modalInner.style.position = 'relative'

clsBtn.style.cssText = `
	position:absolute;
	top: 3%;
	right: 3%;
	font-size: 30px;
	width: 30px;
	height: 30px;
	cursor:pointer;
	`;

modalInner.append(clsBtn);

clsBtn.addEventListener("click", closed);