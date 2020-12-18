

let quiz = new Vue({
    el: '#quiz',
    data: {
        counter: 2,
        nextBtn: document.querySelector('button[data-control="next-btn"]'),
        prevBtn: document.querySelector('button[data-control="prev-btn"]'),
    },
    methods: {
        switchToNext: function () {
            this.counter += 1;
        },
        switchToPrev: function () {
            this.counter -= 1;
        },
        checkPages: function (counter) {
            switch (counter) {
                case 1:

                    break;

                default:
                    break;
            }
        },
        checkCheckboxes: function (selector) {
            let self = this;
            let checkBoxes = self.getElems(selector);
            return checkboxes > 0 ? true : false;
        },
        checkInput: function (selector) {
            let self = this;
            let input = event.target ? event.target : self.getOneElem(selector);
            if (input.value.trim() ) {
                return true;
            } else {
                return false;
            }
        },
        getElems: function (selector) {
            return document.querySelectorAll(selector);
        },
        getOneElem: function (selector) {
            return document.querySelector(selector);
        },
        disableNextBtn: function () {
            this.nextBtn.setAttribute('disabled', 'disabled');
        },
        enableNextBtn: function () {
            this.nextBtn.removeAttribute('disabled');  
        },
        disablePrevBtn: function () {
            this.prevBtn.setAttribute('disabled', 'disabled');
        },
        enablePrevBtn: function () {
            this.prevBtn.removeAttribute('disabled');
        }
    }
})