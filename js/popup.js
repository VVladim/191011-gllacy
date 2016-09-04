var link = document.querySelector(".call");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");

var login = popup.querySelector("[name=your-name]");
var form = popup.querySelector("form");
var mail = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    login.value = storage;
    mail.focus();
  } else {
    login.focus();
  }
 });

 close.addEventListener("click", function(event) {
   event.preventDefault();
   popup.classList.remove("modal-content-show");
   popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !mail.value) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value)
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
