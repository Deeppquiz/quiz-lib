let Vue = require('vue');
import textLabel from '../vue-templates/text-label-1.vue';
import imgLabel from '../vue-templates/img-label.vue';
 
Vue.component('page-label', textLabel);
Vue.component('page-img-label', imgLabel);

let quiz = new Vue({
    el: '#quiz',
    data: {
        counter: 1,
        
    },
    methods: {
        switchToNext: function () {
            this.counter += 1;
            this.checkPages(this.counter);
        },
        switchToPrev: function () {
            this.counter -= 1;
            this.checkPages(this.counter);
        },
        checkPages: function (counter) {
            switch (counter) {
                case 1:
                    
                    this.disablePrevBtn();
                    break;
                case 2:
                  
                    this.enablePrevBtn();
                    break;
                case 3:
                 
                    break;
                case 4:
              
                    break;
                case 5:
           

                    break;
                case 6:
                 
                    break;

                default:
                    break;
            }
        },
        disableNextBtn: function () {
            let btn = document.querySelector('.quiz-footer__next-btn');
            btn.setAttribute('disabled', 'disabled');
        },
        enableNextBtn: function () {
            let btn = document.querySelector('.quiz-footer__next-btn');
            btn.removeAttribute('disabled');
        },
        disablePrevBtn: function () {
            let btn = document.querySelector('.quiz-footer__prev-btn');
            btn.setAttribute('disabled', 'disabled');
        },
        enablePrevBtn: function () {
            let btn = document.querySelector('.quiz-footer__prev-btn');
            btn.removeAttribute('disabled');
        },
        checkCheckboxes: function (selector) {
            let self = this;
            let checkboxes = document.querySelectorAll(selector + ':checked');

            return checkboxes.length > 0 ? true : false;
        },
        checkInput: function (selector) {
            let input = document.querySelector(selector);

            if (input.value.trim()) {
                return true;
            } else {
                return false;
            };
        },
        checkRadioPage: function (selector) {


            if (this.checkCheckboxes(selector)) {
                this.enableNextBtn();
            } else {

                this.disableNextBtn();
            }
        },
        checkInputPage: function (selector) {

            if (this.checkInput(selector)) {
                this.enableNextBtn();
            } else {
                this.disableNextBtn();
            }
        },
        checkInputRadioPage: function (radioSelector, inputSelector) {
            if (this.checkCheckboxes(radioSelector) || this.checkInput(inputSelector)) {
                this.enableNextBtn();
            } else {
                this.disableNextBtn();
            };
        },
        inputsChecker: function () {
            let inputs = document.querySelectorAll('');
            for (let i of inputs) {
                i.addEventListener('input', function () {
                    if (event.target.value.trim()) {
                        quiz.enableNextBtn();
                    } else {
                        quiz.disableNextBtn();
                    }
                });
            };

            for (let i of inputs) {
                i.addEventListener('keydown', function () {
                    if (event.key == 'Enter') {
                        event.preventDefault();
                        if (event.target.value.trim()) {
                            quiz.switchToNext();

                        }
                    }
                });
            };
        },
        submitter: function () {
            var form = document.querySelector('.quiz');
            form.addEventListener('submit', function () {
                event.preventDefault();
                let telInput = document.querySelector('');
                let emailInput = document.querySelector('');

                let submitBtn = document.querySelector('');
                let submitText = document.querySelector('');
                let submitDots = document.querySelector('');
                let submitArrow = document.querySelector('');

                let req = new XMLHttpRequest();
                let php = './send.php';
                if (telInput.value.trim() && telInput.value.length >= 15 && emailInput.value.trim()) {
                    telInput.placeholder = '';
                    telInput.style = '';

                    emailInput.placeholder = '';
                    emailInput.style = '';

                    submitText.innerHTML = 'Идёт отправка';
                    submitBtn.setAttribute('disabled', 'disabled');
                    submitArrow.style = '';
                    let timer = setInterval(() => {
                        submitDots.innerHTML += '.';
                        if (submitDots.innerHTML.length === 3) {
                            submitDots.innerHTML = '';
                        };
                    }, 400);

                    req.open('POST', php, true);
                    req.onload = function () {
                        if (req.status >= 200 && req.status < 400) {
                            json = JSON.parse(this.response);
                            console.log(json);
                            if (json.result == "success") {
                                quiz.switchToNext();
                                submitText.innerHTML = '';
                                submitDots.innerHTML = '';
                                submitArrow.style = '';

                                clearInterval(timer);
                            } else {
                                alert("Ошибка. Попробуйте отправить заявку повторно");
                                submitBtn.removeAttribute('disabled');
                                submitText.innerHTML = '';
                                submitArrow.style = '';
                                clearInterval(timer);
                                submitDots.innerHTML = '';
                            }
                        } else {
                            alert("Ошибка сервера. Номер: " + req.status);
                            submitBtn.removeAttribute('disabled');
                            submitText.innerHTML = '';
                            clearInterval(timer);
                            submitDots.innerHTML = '';
                            submitArrow.style = '';

                        }
                    };

                    req.onerror = function () { alert("Ошибка отправки запроса"); };
                    req.send(new FormData(this));
                } else {
                    if (!telInput.value.trim() || !telInput.value.length >= 15) {
                        telInput.placeholder = '';
                        telInput.style = '';
                    }
                    if (!emailInput.value.trim()) {
                        emailInput.placeholder = '';
                        emailInput.style = '';
                    }
                }
            });
        },
    },
    mounted() {
        this.checkPages(this.counter);
    }
});