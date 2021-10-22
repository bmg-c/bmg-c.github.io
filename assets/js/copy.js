"use strict";
function copyTextEmail() {
    navigator.clipboard.writeText("avonavon_kz@mail.ru").then(function() {
    alert("Текст скопирован: avonavon_kz@mail.ru");  
    }, function() {
        alert("Произошла ошибка, ваш браузер не поддерживает данную функцию. Вместо нажатия просто выделите(если на телефоне, то зажмите) и скопируйте.");
    });
}
function copyTextPhone() {
    navigator.clipboard.writeText("87001385929").then(function() {
        alert("Текст скопирован: 87001385929");
    }, function() {
        alert("Произошла ошибка, ваш браузер не поддерживает данную функцию. Вместо нажатия просто выделите(если на телефоне, то зажмите) и скопируйте.");
    });
}