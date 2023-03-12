import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

const FEEDBACK_FORM_KEY = 'feedback-form-state';
const formData = {};

const handleFormData = (event) => {
    formData[event.target.name] = event.target.value;

    const formDataJson = JSON.stringify(formData);

    localStorage.setItem(FEEDBACK_FORM_KEY, formDataJson);
}

formEl.addEventListener('input', throttle(handleFormData, 500));

const getLocalStorage = () => {
    const isLocalStorage = localStorage.getItem(FEEDBACK_FORM_KEY);

    if (isLocalStorage) {
        const formDataParsed = JSON.parse(isLocalStorage);

        emailEl.value = formDataParsed.email;
        messageEl.value = formDataParsed.message;
    }
}

getLocalStorage();

const handleFormSubmit = (event) => {
    event.preventDefault();

    event.target.reset();

    localStorage.removeItem(FEEDBACK_FORM_KEY);

    console.log(formData);
}

formEl.addEventListener('submit', handleFormSubmit);