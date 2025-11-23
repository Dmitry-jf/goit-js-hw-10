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
