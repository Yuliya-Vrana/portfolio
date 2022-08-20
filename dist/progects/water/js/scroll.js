 const navbar = document.querySelector(".nav__menu");
 const links = navbar.querySelectorAll(".nav__menu--link");

 links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();                          //перехватить действие у браузера
        
        const section = document.querySelector(link.getAttribute("href"));

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    
    })
 })








 // const skewedOne = document.querySelector(".skewedOne");
 // const skewedTwo = document.querySelector(".skewedTwo");

 // window.addEventListener("scroll", function(){
 // 	const value1 = -15 + window.scrollY/45;
 // 	const value2 = 15 + window.scrollY/-45;

 // 	skewedOne.style.transform = "skewY(" + value1 + "deg)";
 // 	skewedTwo.style.transform = "skewY(" + value2 + "deg)";
 // })