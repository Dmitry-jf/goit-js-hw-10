// // Описаний у документації
// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";


// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const form = document.querySelector(".form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const delay = Number(form.delay.value);
//   const state = form.state.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === "fulfilled") {
        
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   promise
//     .then((delay) => {
//       iziToast.success({
//         title: "OK",
//         message: `Fulfilled promise in ${delay}ms`,
//         position: "topRight",
//         icon: "icon-check",   // ✅ щоб була іконка як на скріні
//       });
//     })
//     .catch((delay) => {
//       iziToast.error({
//         title: "Error",
//         message: `Rejected promise in ${delay}ms`,
//         position: "topRight",
//         icon: "icon-close",   // ❌ іконка для помилки
//       });
//     });

//   form.reset();
// });


// `✅ Fulfilled promise in ${delay}ms`
//     `❌ Rejected promise in ${delay}ms`

// __________________________________________________________________________________________________



// import iziToast from "izitoast";
// import "izitoast/dist/css/iziToast.min.css";

// const inputEl = document.querySelector('input[type="number"]');
// const formEl = document.querySelector('.form');

// // Функции вывода уведомлений
// const showError = (delay) => {
//   iziToast.error({
//     message: `Rejected promise in ${delay}ms`,
//     position: 'topRight',
//     backgroundColor: 'red',
//     messageColor: 'white',
//     icon: '❌',
//   });
// };

// const showSuccess = (delay) => {
//   iziToast.success({
//     message: `Fulfilled promise in ${delay}ms`,
//     position: 'topRight',
//     backgroundColor: 'green',
//     messageColor: 'white',
//     icon: '✅',
//   });
// };

// // Промис, который резолвится или реджектится через delay
// function createPromise(delay, shouldReject) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldReject) {
//         reject(delay);
//       } else {
//         resolve(delay);
//       }
//     }, delay);
//   });
// }

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const delay = Number(inputEl.value);
//   const shouldReject = document.querySelector('input[value="rejected"]').checked;

//   createPromise(delay, shouldReject)
//     .then((delay) => {
//       // Показываем уведомление ПОСЛЕ задержки
//       showSuccess(delay);
//     })
//     .catch((delay) => {
//       // Показываем уведомление ПОСЛЕ задержки
//       showError(delay);
//     });
// });



// promise.then(onFulFilled).catch(onRejected);
// promise.then(() => { }).catch(() => { });


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form")
const delayEl = document.querySelector('input[type="number"]')
 const fulfilledEl = document.querySelector('input[value="fulfilled"]')



form.addEventListener('submit', (e) => {
    e.preventDefault();

    const delay = Number(delayEl.value);
    const btnGreen = fulfilledEl.checked
  
    const promise = new Promise((res, rej) => {

        setTimeout(() => {
            if (btnGreen) {
                res(delay)
            } else {
                rej(delay)
            }
        }, delay)
    })
    
 promise.then(() => {
     iziToast.success({
    message: `Fulfilled promise in ${delay}ms`,
    position: 'topRight',
    backgroundColor: 'green',
    messageColor: 'white',
    icon: '✅',
  });
 })
     .catch(() => {
           iziToast.error({
    message: `Rejected promise in ${delay}ms`,
    position: 'topRight',
    backgroundColor: 'red',
    messageColor: 'white',
    icon: '❌',
  });
        
    })

    form.reset()
})

