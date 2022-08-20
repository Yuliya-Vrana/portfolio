const loginBtn = document.querySelector(".loginBtn");
const closeBtn = document.querySelector(".formBox__close--btn");
const signinBtn = document.querySelector(".signin");
const signupBtn = document.querySelector(".signup");
const formBox = document.querySelector(".formBox");
const signinForm =document.querySelector(".signinForm")
const login = document.querySelector(".login");

loginBtn.addEventListener("click", function (){
    login.style.display = "flex"
})

closeBtn.addEventListener("click", function (){
    login.style.display = "none"
})

signupBtn.onclick = function(){
    formBox.classList.add("active")
    login.classList.add("active")
}

signinBtn.onclick = function(){
    formBox.classList.remove("active")
    login.classList.remove("active")
}

