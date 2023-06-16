
// import throttle from 'lodash/throttle';

// const keyStorage = "feedback-form-state"
// const feedbackForm = document.querySelector('.feedback-form');
// const emailInput = document.querySelector("input")
// const messageInput = document.querySelector("textarea");
// const submitButton = document.querySelector("button");




// feedbackForm.addEventListener('submit', evt => {
//     evt.preventDefault();

//     console.log(emailInput.value);

//     const markup = {
//         email: emailInput.value,
//         message: messageInput.value,
//     }
//     localStorage.setItem(keyStorage, JSON.stringify(markup));

//     feedbackForm.elements.email.value = '';
//     feedbackForm.elements.message.value = '';

    
   
//     console.log(markup);
    
// });



// const updateLocalStorage = throttle(() => {
//   const markup = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem(keyStorage, JSON.stringify(markup));
// }, 500);

// emailInput.addEventListener(emailInput, updateLocalStorage);
// messageInput.addEventListener(messageInput, updateLocalStorage);

// feedbackForm.addEventListener('submit', throttle(evt => {
//     evt.preventDefault();

//     console.log(emailInput.value);

//     const markup = {
//         email: emailInput.value,
//         message: messageInput.value,
//     }
//     localStorage.setItem(keyStorage, JSON.stringify(markup));

//     feedbackForm.elements.email.value = '';
//     feedbackForm.elements.message.value = '';

//     console.log(markup);
// }, 500));

// window.addEventListener('load', () => {
//   const savedState = localStorage.getItem(keyStorage);
//   if (savedState) {
//     const markup = JSON.parse(savedState);
//     emailInput.value = markup.email;
//     messageInput.value = markup.message;
//   }
// });

// const valuesObject = () => {
//     const markup = {
//         email: feedBackForm.elements.email.value,
//         message: feedBackForm.elements.textarea.value,
//     }
//     localStorage.setItem(keyStorage, JSON.stringify(markup));
// } 

// feedBackForm.addEventListener("input", valuesObject)

// console.log(valuesObject);



  




import throttle from "lodash/throttle";

const keyStorage = "feedback-form-state";
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector("input");
const messageInput = document.querySelector("textarea");
returnState();

const updateLocalStorage = throttle(() => {
  const markup = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(keyStorage, JSON.stringify(markup));
}, 500);



emailInput.addEventListener('input', updateLocalStorage);
messageInput.addEventListener('input', updateLocalStorage);

feedbackForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    

    const markup = {
        email: emailInput.value,
        message: messageInput.value,
    }
  
  if (!markup) return;
  
    localStorage.setItem(keyStorage, JSON.stringify(markup));

    feedbackForm.elements.email.value = '';
    feedbackForm.elements.message.value = '';

    
   
    console.log(markup);
    
});



// window.addEventListener('load', () => {


  function returnState(){
  const savedState = localStorage.getItem(keyStorage);
  if (savedState) {
    const markup = JSON.parse(savedState);
    emailInput.value = savedState.email;
    messageInput.value = savedState.message;
  }
};