import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const message = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', throttle((e) => {
    const inputData = { email: form.email.value, message: form.message.value };
    localStorage.setItem(localStorageKey, JSON.stringify(inputData));
}, 500));

const storageData = localStorage.getItem(localStorageKey);
const parseData = JSON.parse(storageData);

form.addEventListener('input', (e) => {
    e.preventDefault();
    const { elements: { email, message } } = e.currentTarget;
    console.log({ email: email.value, message: message.value });
});

const resetForm = () => {
    if (parseData !== '') {
        input.value = parseData.email;
        message.value = parseData.message;
    }
}

resetForm();