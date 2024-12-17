'use strict';
const vitimg = document.querySelector('.vit');
const narimg = document.querySelector('.narayana');

document.querySelector('.nav-links').addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('navlink')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
      });
    }
  });


















// document.querySelector('.nav__links').addEventListener('click', function(e){
//     e.preventDefault();
//     if(e.target.classList.contains('seclink')){
//         const id = e.target.getAttribute('href');
//         document.querySelector(id).scrollIntoView({
//             behavior: 'smooth',
//         });
//     }
// });































// const instimg = new Array()

// const Unblurimg = function (img) {

//     img.style.filter = "blur(0px)";

// }
//     const edusec = document.querySelector('.sec2');
//     const projsec = document.querySelector('.sec3');

//     const options = {
//         threshold: 0.4
//     };

//     const observer = new IntersectionObserver(function(entries, observer){
//         entries.forEach(entry => {
//             if(entry.isIntersecting){

//                 Unblurimg()
//             }
//         });
//     }, options);

//     observer.observe(edusec);
//     observer.observe(projsec);
