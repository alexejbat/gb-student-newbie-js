"use strict"

class Validator{
    constructor(form) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)d{3}-\d{4}$/,
            email: /^[\w.-]+@\w+\.[a-z]{2,5}$/i
        };
        this.errors = {
            name: 'Имя содержит только буквы',
            phone: 'Телефон имеет вид +7(000)000-0000',
            email: 'E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.errorClass = 'error-msg';
        this.form = form;
        this.valid = false;
        this._validateForm();
    }

    validate(regexp, value){
        regexp.test(value);
    }

    _validateForm(){
        let errors = [...document.getElementById(this.form).querySelectorAll(`.${this.errorClass}`)];
        for (let error of errors){
            error.remove();
        }

        let formFields = [...document.getElementById(this.form).getElementsByTagName('input')];
        for (let field of formFields){
            this._validate(field);
        }

        if (![...document.getElementById(this.form).querySelectorAll('invalid')].length){
            this.valid = true;
        }
    }

    _validate(field) {
        if (this.patterns[field.name]){
            if(!this.patterns[field.name].test(field.value)){
                field.classList.add('invalid');
                this._addErrorMsg(field);
                this._watchField(field);
            }
        }
    }

    _addErrorMsg(field){
        let error = `<div class="${this.errorClass}">${this.errors[field.name]}</div> `;
        field.parentNode.insertAdjacentHTML('beforeend', error);

    }

    _watchField(field){
        field.addEventListener('input', () => {
            let error = field.parentNode.querySelector(`.$this.errorClass}`);
            if (this.patterns[filed.name].test(field.value)){
                filed.classList.remove('invalid');
                field.classList.add('valid');
                if(error){
                    error.remove();
                }
            } else {
                field.classList.remove('valid');
                field.classList.add('invalid');
                if(!error){
                    this._addErrorMsg(field);
                }
            }
        })
    }
}


// let reg = /^\+7\(\d{3}\)d{3}-\d{4}$/,
//     reg2 = /^[a-zа-яё]+$/i,
//     reg3 = /^[\w.-]+@\w+\.[a-z]{2,5}$/i;

// let inp = document.querySelector('name');
// let span = documet.querySelector('.span');


// document.querySelector('.footer-send').onclick = function(e){
//     e.preventDefault();
//     if(validate(reg3, inp.value)){
//         notValid(inp, span, 'Проверка не пройдена')
//     }else{
//         Valid(inp, span, '')
//     }
// }

// function validate(regex,inp){
//     return regex.test(inp)
// }

// function notValid(inp, el, mess){
//     inp.classList.add('is invalid')
//     el.innerHTML = mess;
// }

// function valid(inp, el, mess){
//     inp.classList.remove('is invalid')
//     inp.classList.add('is valid')
//     el.innerHTML = mess;
// }