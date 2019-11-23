import { initialize } from './modules/initialize.js';

window.onload = () => {
  initialize();
}

// const input = document.getElementById('lbsInput');
// const output = document.getElementById('output');

// output.style.visibility = 'hidden';

// input.addEventListener('input', (e) => {
//   let lbs = e.target.value;

//   output.style.visibility = 'visible';

//   let grams = document.getElementById('gOutput');
//   grams.innerHTML = lbs / 0.0022046;

//   let kiloGrams = document.getElementById('kgOutput');
//   kiloGrams.innerHTML = lbs / 2.2046;

//   let ounces = document.getElementById('ozOutput');
//   ounces.innerHTML = lbs * 16;

//   e.preventDefault();
// });


// Registering Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../serviceWorker.js').then((registration) => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (err) => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}