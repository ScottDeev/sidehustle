const nav = document.querySelector(".navbar");
const openBtn = document.querySelector(".open-menu img");
const closeBtn = document.querySelector(".close-menu img");
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#id_password");
const body = document.querySelector("body");

const close = function () {
  nav.classList.remove("show-menu");
  body.classList.remove("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};
const open = function () {
  nav.classList.add("show-menu");
  body.classList.add("overlay");
  nav.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};
const togglePasswordFunc = function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
};
openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
togglePassword.addEventListener("click", togglePasswordFunc);

////Validation
function formValidation() {
  const username = document.forms["RegForm"]["username"];
  const email = document.forms["RegForm"]["email"];
  const phone = document.forms["RegForm"]["number"];
  const password = document.forms["RegForm"]["Password"];
  const confirmPassword = document.forms["RegForm"]["fname"];

  if (username.value == "") {
    alert("Please enter your username");
    console.log("Sup");
    username.focus();
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email");
    email.focus();
    return false;
  }
  if (phone.value === "") {
    alert("Please enter your phone number");
    phone.focus();
    return false;
  }
  if (password.value === "") {
    alert("Please enter your password");
    password.focus();
    return false;
  }
  if (confirmPassword.value === "") {
    alert("Please confirm your password");
    confirmPassword.focus();
    return false;
  }
}
