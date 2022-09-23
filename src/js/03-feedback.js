import { throttle } from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('input'),
  textareaEl: document.querySelector('textarea'),
};

const { form, inputEl, textareaEl } = refs;

let feedbackForm;

try {
  feedbackForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

window.onload = onLoad();
form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onLoad() {
  const { email, message } = feedbackForm;
  if (email === undefined && message === undefined) {
    return;
  } else if (email === undefined) {
    textareaEl.value = message;
    console.log(message);
  } else if (message === undefined) {
    inputEl.value = email;
    console.log(email);
  } else {
    textareaEl.value = message;
    inputEl.value = email;
  }
}

function onInput() {
  feedbackForm.email = inputEl.value;
  feedbackForm.message = textareaEl.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function onSubmit(e) {
  e.preventDefault();
  console.log(feedbackForm);
  inputEl.value = '';
  textareaEl.value = '';
  localStorage.clear();
}
