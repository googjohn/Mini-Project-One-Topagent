/* const slideOne = document.getElementById('slide-1');
slideOne.src = '/images/gallery-slider/slide-1.jpg';
const slideTwo = document.getElementById('slide-2');
slideTwo.src = '/images/gallery-slider/slide-2.jpg';
const slideThree = document.getElementById('slide-3');
slideThree.src = '/images/gallery-slider/slide-3.jpg';

const slides = [
  slideOne.src,
  slideTwo.src,
  slideThree.src
];

const carouselSlide = document.getElementById('slide-1')
const slide=[]
function carousel(){
  for (let i = 0; i < slides.length; i++) {
    slide.push(slides[i]);
  }
  const divElement = document.createElement('div');
  divElement.id = 'slideOne';
  divElement.innerHTML = `
    <img src=${slide[0]}>
    `
  carouselSlide.appendChild(divElement)
} */
// carousel()

// function scrollFix(){
//   if(window.document.body.scrollTop > 100 ||
//     window.documentElement.scrollTop > 100) {
      
//     }
// }

window.addEventListener('wheel', scrollToNextSection);

function scrollToNextSection(event) {
  event.preventDefault();

  const delta = event.deltaY || event.wheelDelta;

  if (delta < 0) {
    // Scrolling up
    const previousSection = document.querySelector('.active')?.previousElementSibling;

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

const backToTop = () => {
  
}