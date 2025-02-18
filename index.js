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

let isScrolling = false;

// const checkBtnBacktoTop = (entry) => {
//   console.log(entry.target)
//   if (entry.target.style.display === 'none') {
//     sections.forEach(section => sectionObserver.observe(section))
//   }
// }


// let btnObserver = new MutationObserver(checkBtnBacktoTop);

// btnObserver.observe(btn, {
//   childList: true,
//   subtree: true,
//   characterDataOldValue: true,
// })


/* intersection observer for scrolling */
let sections = document.querySelectorAll('.scroll-to-section');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: .1
}

function scrollToSection(entries) {
  entries.forEach(entry => {
    let section = entry.target;

    if (entry.isIntersecting) {
      window.scrollTo({ behavior: 'smooth', top: section.offsetTop, left: 0 });
      section.setAttribute('data-active', 'active');
      let currentOrigin = window.location.origin;
      let currentPath = window.location.pathname;
      let sectionId = section.getAttribute('id');
      window.location.href = `${currentOrigin}${currentPath}#${sectionId}`
    } else {
      section.setAttribute('data-active', 'null');
    }
  })
}

let sectionObserver = new IntersectionObserver(scrollToSection, options);

sections.forEach(section => sectionObserver.observe(section))

/* button for back to top */
let btnToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', scrollToTop);

function scrollToTop() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    btnToTop.style.display = "block";
    btnToTop.removeAttribute('hidden')
  } else {
    btnToTop.style.display = "none";
    btnToTop.setAttribute('hidden', 'true')
  }
}

btnToTop.addEventListener('click', backToTop)

function backToTop() {
  sectionObserver.disconnect();
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  const firstSection = document.querySelector('section:first-child');

  if (firstSection) {
    firstSection.scrollIntoView({ behavior: 'smooth' });
    firstSection.classList.add('active');
  }
  setTimeout(() => {
    sections.forEach(section => sectionObserver.observe(section))
  }, 800)

}

const navigationButtons = document.querySelectorAll('.navigation-buttons')

navigationButtons.forEach(button => {
  button.addEventListener('click', navigationButtonsObserver)
})

function navigationButtonsObserver(event) {
  sectionObserver.disconnect();

  let sectionId = event.target.dataset.link;

  let section = document.querySelector(sectionId)
  window.scrollTo({ behavior: 'smooth', top: section.offsetTop, left: 0 })

  setTimeout(() => {
    sections.forEach(section => sectionObserver.observe(section))
  }, 1000)
}

window.addEventListener('load', () => {
  let hash = window.location.hash
  let activeSection = document.querySelector(hash)

  setTimeout(() => {
    let section = document.querySelector('[data-active="active"]')
    if (section.id !== hash.slice(1)) {
      sectionObserver.disconnect()
      window.scrollTo({
        behavior: 'smooth',
        top: activeSection.offsetTop,
        left: 0,
      })
      setTimeout(() => {
        sections.forEach(section => sectionObserver.observe(section))
      }, 800)
    } else {
      window.scrollTo({
        behavior: "smooth",
        top: section.offsetTop,
        left: 0,
      })
    }
  }, 200)
})

/* mutation observer */

// window.addEventListener('load', () => {
//   const dataChange = (entries) => {
//     entries.forEach(entry => {
//       let hash = window.location.hash
//       let hashedSection = document.querySelector(hash)
//       let hashedAttribute = hashedSection.dataset.active

//       let activeSection = entry.target.dataset.active;
//       console.log(activeSection)
//       console.log(hashedAttribute)
//       if (hashedAttribute !== activeSection) {
//         sectionObserver.disconnect()
//         window.scrollTo({
//           behavior: "smooth",
//           top: hashedSection.offsetTop,
//           left: 0,
//         })
//         setTimeout(() => {
//           sections.forEach(section => sectionObserver.observe(section))
//         }, 1000)
//       }
//       console.log(hash)
//       console.log(entry.target)
//     })
//   }
//   const mutationObserver = new MutationObserver(dataChange)
//   sections.forEach(section => mutationObserver.observe(section, {
//     attributes: true,
//   }))
// })

/* window.addEventListener('load', () => {
  // sectionObserver.disconnect()
  console.log(sectionObserver)
  let hash = window.location.hash
  console.log("loaded")
  console.log(event.type)
  console.log(hash)
  if (hash) {
    let section = document.querySelector(hash);
    console.log(section)
    console.log(section.offsetTop)
    section.scrollIntoView({
      behavior: 'smooth',
      // top: section.offsetTop,
      // left: 0,
    })
    // sections.forEach(section => sectionObserver.observe(section))
    console.log(sections)
    console.log(sectionObserver)
  }
}) */
// window.onload = () => {
//   sectionObserver.disconnect()
//   let hash = window.location.hash
//   console.log(hash)
//   if (hash) {
//     let section = document.querySelector(hash);
//     console.log(section)
//     console.log(section.offsetTop)
//     if (section) {
//       window.scrollTo({
//         behavior: 'smooth',
//         top: section.offsetTop,
//         left: 0,
//       })
//     }
//     sections.forEach(section => sectionObserver.observe(section))
//   }
// }
// const pageAccessedByReload = (window.performance.navigation && window.performance.navigation.type === 1) || window.performance.getEntriesByType('navigation').map((nav) => nav.type).includes('reload');

// if (pageAccessedByReload) {
//   console.log("This page was refreshed");
// } else {
//   console.log("This page was loaded normally");
//   sectionObserver.disconnect();
//   const navigationButtons = document.querySelectorAll('.navigation-buttons')

//   navigationButtons.forEach(button => {
//     button.addEventListener('click', navigationButtonsObserver)
//   })

//   function navigationButtonsObserver(event) {
//     console.log(event.target)

//     let sectionId = event.target.dataset.link;
//     console.log(sectionId)

//     let section = document.querySelector(sectionId)
//     console.log(section)

//     window.scrollTo({ behavior: 'smooth', top: section.offsetTop, left: 0 })

//     setTimeout(() => {
//       sections.forEach(section => sectionObserver.observe(section))
//     }, 1000)
//   }
// }
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
// const gallery = document.getElementById('gallery-section')

// window.addEventListener('wheel', scroll)
// function scroll () {
//   const elements = window.scrollY
//   console.log(elements);
// }

