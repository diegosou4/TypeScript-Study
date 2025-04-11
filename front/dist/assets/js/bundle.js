/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
function validUsername() {
    const username = document.getElementById('username');
    if (username === null)
        return false;
    if (username.value.length <= 4)
        return false;
    return true;
}
function validEmail() {
    const email = document.getElementById('email');
    if (email === null)
        return false;
    if (email.value.length > 10)
        return true;
    return false;
}
function validPass() {
    const password = document.getElementById('password');
    if (password === null)
        return false;
    if (password.value.length <= 6)
        return false;
    return true;
}
function comparePass() {
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    if (password === null || password2 === null)
        return false;
    if (password.value === password2.value && password.value.length > 6 && password2.value.length > 6)
        return true;
    return false;
}
function validForm() {
    const erroclass = Array.from(document.querySelectorAll('.error-message'));
    const arrayFuctions = [validUsername(), validEmail(), validPass(), comparePass()];
    if (erroclass === null)
        return;
    for (let i = 0; i < erroclass.length; i++) {
        if (arrayFuctions[i] === false)
            erroclass[i].style.display = 'block';
        else
            erroclass[i].style.display = 'none';
    }
}
function btnsummit() {
    const button = document.querySelector('button');
    if (button === null)
        return;
    button.addEventListener('click', (event) => {
        event.preventDefault();
        validForm();
    });
}
btnsummit();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map