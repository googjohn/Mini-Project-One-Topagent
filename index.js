const typingText = document.querySelector('#type-text');
const textArray = [
  "beautifully designed houses",
  "housing loan calculation",
  "free online booking for site viewing"
]
const delay = 1000;

let index = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const text = textArray[index];
  if (isDeleting) {
    currentText = text.substring(0, currentText.length - 1);
  } else {
    currentText = text.substring(0, currentText.length + 1);
  }

  typingText.innerHTML = currentText;

  let typeSpeed = 120;

  if (isDeleting) {
    typeSpeed /= 2;
  }

  if (!isDeleting && currentText === text) {
    typeSpeed = delay;
    isDeleting = true;
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    index++;
    if (index === textArray.length) {
    index = 0;
    }
  }

  setTimeout(() => {
    type();
  }, typeSpeed);
}

type();

window.addEventListener('wheel', scrollToNextSection);

function scrollToNextSection(event) {
  
  const delta = event.deltaY || event.wheelDelta;

  if (delta < 0) {
    // Scrolling up
    const previousSection = document.querySelector('.active')?.previousElementSibling;
    const activeNav = document.querySelector('.active')?.previousElementSibling;
    const activeStyle = document.querySelector('.navlink a')
    if (previousSection) {
      previousSection.scrollIntoView({ behavior: 'smooth' });
      previousSection.classList.add('active');
    }
  } else if (delta > 0) {
    // Scrolling down
    const activeSection = document.querySelector('.active');

    if (activeSection) {
      const nextSection = activeSection.nextElementSibling;

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
        activeSection.classList.remove('active');
        nextSection.classList.add('active');
      }
    } else {
      // Scroll to the first section if no active section found
      const firstSection = document.querySelector('section:first-child');

      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
        firstSection.classList.add('active');
      }
    }
  }
}

let btn = document.getElementById('back-to-top');

window.addEventListener('scroll', scrollToTop);
function scrollToTop () {
  if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none"
  }
}

btn.addEventListener('click', backToTop)
function backToTop () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  const firstSection = document.querySelector('section:first-child')
  if (firstSection) {
    firstSection.scrollIntoView({ behavior: 'smooth' });
    firstSection.classList.add('active');
  }
}

// const navBlur = document.getElementById('navbar');

// console.log(navBlur);
// // navBlur.classList.remove('blurred')
// const buttons = document.querySelectorAll('.dropdown')
// console.log(buttons);

// const dropdown = document.querySelectorAll('.dropdown')
// const dropdownBlur = document.querySelectorAll('.dropdown-menu');
// console.log(dropdownBlur)



// buttons.forEach((button) => {
//   button.addEventListener('mouseover', ()=>{
//     navBlur.classList.remove('blurred')
//     dropdownBlur.forEach(menu => {
//       menu.classList.add('blurred')
//     })
//   })
//   button.addEventListener('mouseout', ()=>{
//     navBlur.classList.add('blurred')
//     dropdownBlur.forEach(menu => {
//       menu.classList.add('blurred')
//     })
//   })
// })


// make element blur after some scrolling or near out of view
/* const gallerySectionBlur = document.getElementById('gallery-section');
console.log(gallerySectionBlur) 
const initialScrollPosition = window.innerHeight
window.addEventListener('scroll', scrollOut);
function scrollOut(){
  const delta = window.scrollY - initialScrollPosition;
  if(delta > 500){
    gallerySectionBlur.style.filter = 'blur(4px)'
  } else {
    gallerySectionBlur.style.filter = 'blur(0)'
  }
} */

// let gallery = document.getElementById('gallery-section');

// window.addEventListener("scroll", function() {
//   const scrollPosition = window.scrollY;
//   // Your scroll event handling code here
//   console.log(scrollPosition);
//   if(scrollPosition < 200){
//     gallery.style.filter = 'blur(8px)'
//   } else if(scrollPosition > 1000){
//     gallery.style.filter = 'blur(8px)'
//     // gallery.style.height = '35vh'
//     // gallery.style.transition = 'height 1s ease'
//   } else {
//     // gallery.style.transition = 'height 1s ease'
//     // gallery.style.height = '100vh'
//     // gallery.style.transform = 'translateY(0)'
//     gallery.style.filter = 'blur(0)'
//   }
// });
const gallery = document.getElementById('gallery-section')

window.addEventListener('wheel', scroll)
function scroll () {
  const elements = window.scrollY
  console.log(elements);
}
