
import throttle from "lodash";

const keyStorage = "feedback-form-state"
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input")
const messageInput = document.querySelector("textarea");
const submitButton = document.querySelector("button");




feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();

    console.log(emailInput.value);

    const markup = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.setItem(keyStorage, JSON.stringify(markup));

    feedbackForm.elements.email.value = '';
    feedbackForm.elements.message.value = '';

    
   
    console.log(markup);
    
});

window.addEventListener('load', () => {
  const savedState = localStorage.getItem(keyStorage);
  if (savedState) {
    const markup = JSON.parse(savedState);
    emailInput.value = markup.email;
    messageInput.value = markup.message;
  }
});

// const valuesObject = () => {
//     const markup = {
//         email: feedBackForm.elements.email.value,
//         message: feedBackForm.elements.textarea.value,
//     }
//     localStorage.setItem(keyStorage, JSON.stringify(markup));
// } 

// feedBackForm.addEventListener("input", valuesObject)

// console.log(valuesObject);



  
