let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let menuTitle = document.querySelector('.menu__burger--link');

menuToggle.onclick = function(){
	menuToggle.classList.toggle('active');
	navigation.classList.toggle('active');
	menuTitle.classList.toggle('active');
}