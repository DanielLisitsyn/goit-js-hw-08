import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(handleInput, 500));

const inputEmail = document.querySelector("[name='email']");
const textAreaMessage = document.querySelector("[name='message']");

let objForm = {

};

function handleInput(event) {
    
    objForm[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(objForm))
};

const parsedData = JSON.parse(localStorage.getItem("feedback-form-state")) || '';
if (parsedData) {
    inputEmail.value = parsedData.email || '';
    textAreaMessage.value = parsedData.message || '';
};



form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    console.log({ email: inputEmail.value, textAreaMessage: textAreaMessage.value });
    form.reset();

};