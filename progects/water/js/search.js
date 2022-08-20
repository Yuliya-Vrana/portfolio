const icon = document.querySelector(".search__icon");
const search = document.querySelector(".search");

icon.addEventListener("click", function(){
	search.classList.toggle("searchActive")
})