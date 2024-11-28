//select login form and usericon
let loginform = document.querySelector(".loginform");
let usericon = document.querySelector("#loginbtn");
function login() {
  loginform.classList.toggle("active");
  navbar.classList.remove("active");
  
}

//select navbar and menubaricon
let navbar = document.querySelector(".navbar");
document.querySelector("#menubtn").onclick = () => {
  navbar.classList.toggle("active");
  loginform.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  loginform.classList.remove("active");
};

