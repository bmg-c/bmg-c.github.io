"use strict";
function copyTextEmail() {
    let aCont = document.querySelectorAll("#contact-cp-email");
    aCont.forEach(a => {
        a.addEventListener('click', event => {
            let popup = event.target.firstElementChild;
            navigator.clipboard.writeText("avonavon_kz@mail.ru").then(function() {
                popup.textContent = "Скопированно!";
            }, function() {
                popup.textContent = "Произошла ошибка. Возможно ваш браузер не поддерживает данную функцию.";
            });
            popup.classList.toggle("show");
            setTimeout(() => {
                popup.classList.toggle("show");
            }, 3500);
        });
    });
}
function copyTextPhone() {
    let aCont = document.querySelectorAll("#contact-cp-phone");
    aCont.forEach(a => {
        a.addEventListener('click', event => {
            let popup = event.target.firstElementChild;
            navigator.clipboard.writeText("+77003385929").then(function() {
                popup.textContent = "Скопированно!"
            }, function() {
                popup.textContent = "Произошла ошибка. Возможно ваш браузер не поддерживает данную функцию."
            });
            popup.classList.toggle("show");
            setTimeout(() => {
                popup.classList.toggle("show");
            }, 4000);
        });
    });
}
copyTextEmail();
copyTextPhone();