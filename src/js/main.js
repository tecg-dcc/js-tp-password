const app = {
    buttonElement: document.querySelector('button.showPass'),
    inputElement: document.getElementById('passwordElement'),
    init() {
        this.buttonElement.addEventListener('click', () => {
            this.showHidePasswordInput();
        });
    },
    toggleText() {

        [this.buttonElement.textContent, this.buttonElement.dataset.altText] =
            [this.buttonElement.dataset.altText, this.buttonElement.textContent];

    }, toggleType() {
        if (this.inputElement.type === 'text') {
            this.inputElement.type = 'password';
        } else {
            this.inputElement.type = 'text';
        }
    }, showHidePasswordInput() {
        this.toggleType();
        this.toggleText();
    },
}
app.init();