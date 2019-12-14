import { initialize } from './Modules/initialize.js';

window.onload = () => {
  fetch('../../assets/data/conversionData.json')
    .then(response => response.json())
    .then(data => initialize(data))
}

// Registering Service Worker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../serviceWorker.js').then((registration) => {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, (err) => {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }