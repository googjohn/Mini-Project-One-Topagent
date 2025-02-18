// buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// carousel slide images
/* const slideOne = document.createElement('img');
slideOne.src = '/images/gallery-slider/slide-1.jpg';
const slideTwo = document.createElement('img');
slideTwo.src = '/images/gallery-slider/slide-2.jpg';
const slideThree = document.createElement('img');
slideThree.src = '/images/gallery-slider/slide-3.jpg'; */

// object array of slides
const slides = [
{
  'name': 'Gretta',
  'imageSrc': '/images/gallery-slider/slide-1.jpg',
  'location': 'Tagaytay City',
  'description': 'A glamorous looking penthouse.'
},
{
  'name': 'Freyya',
  'imageSrc': '/images/gallery-slider/slide-2.jpg',
  'location': 'Boracay Island',
  'description': 'A cozy and luxurious dwelling in the Island of Boracay.'
},
 {
  'name': 'Ella',
  'imageSrc': '/images/gallery-slider/slide-3.jpg',
  'location': 'Baguio City',
  'description': 'A modern look in the summer capital of the Philippines.'
}
]


// carousel display
const carouselDisplay = document.querySelector('.carousel-slide');
// carouselDisplay.classList.add('slide-effect');
let countCurrent = 0;
let intervalId;

function createCarouselItem(slide) {
  const item = document.createElement('div');
  item.setAttribute('data-item', countCurrent )
  item.classList.add('carousel-item');
  item.innerHTML = `
  <img src=${slide.imageSrc}>
  <div class="carousel-description overlay">
  <p>${slide.location}</p>
  <h3><span>${slide.name}</span> Model House</h3>
  <p>${slide.description}</p>
  <a class="btn" href="houseandlot.html">View more</a> 
  </div>
  `;
  countCurrent++
  return item;
}
// carouselDisplay.append(createCarouselItem(slides[0]))

slides.forEach(slide => {
  let slideItem = createCarouselItem(slide)
  if(slideItem.dataset.item == 0){
    console.log(slideItem.dataset.item)
    slideItem.style.transform = 'translateX(0%)';
    slideItem.style.transition = 'transform ease-in-out .250s';
    slideItem.style.zIndex = 1000;
  } else {
    slideItem.style.transform = 'translateX(100%)';
    slideItem.style.zIndex = 0;
  }
  carouselDisplay.append(slideItem);
});

const carouselItems = document.querySelectorAll('.carousel-item');

let currentSlideIndex = 0;


const sliding = () => {
  carouselItems.forEach(item => {
    let itemIndex = item.dataset.item

    if (currentSlideIndex == itemIndex) {
      item.setAttribute('data-active-slide', 'active')
      item.style.transform = 'translateX(0%)';
      item.style.transition = 'transform ease-in-out .250s';
      item.style.zIndex = 1000;
    } else {
      setTimeout(() => {
        item.setAttribute('data-active-slide', 'null')
        item.style.transform = 'translateX(100%)';
        item.style.zIndex = 0;
      }, 300)
    }
  })
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
}
setInterval(sliding, 3000)

/* setInterval(()=> {

  let slideItem = createCarouselItem(slides[currentSlideIndex]);
  slideItem.setAttribute('data-active-slide', 'active');
  slideItem.style.transform = `translateX(${0}%)`;
  slideItem.style.transition = 'transform ease-in-out .5s';
  carouselDisplay.append(slideItem)
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  setTimeout(()=> {
    let nextSlideItem = createCarouselItem(slides[currentSlideIndex]);
    nextSlideItem.setAttribute('data-active-slide', 'active');
    nextSlideItem.style.transform = `translateX(${100}%)`;
    nextSlideItem.style.transition = 'transform ease-in-out .5s';
    carouselDisplay.append(nextSlideItem)

    setTimeout(()=> {
      nextSlideItem.remove()
    }, 3500)
    
    setTimeout(() => {
      nextSlideItem.style.transform = `translateX(${0}%)`;
      slideItem.remove()
    }, 1000)
  }, 3000)

}, 4000) */

/* const slideTransition = (element) => {
  element.forEach((elem, index) => {
    console.log(elem.dataset.item, index, currentSlideIndex)
    if(currentSlideIndex == index){
      elem.style.transform = `translateX(100%)`
      elem.style.transition = 'transform ease-in-out .5s'
    } else {
      
    }
    if(elem.dataset.activeSlide === 'active' && index <= currentSlideIndex){
      console.log(elem)
    } else {
      elem.style.transform = `translateX(${0}%)` 
      elem.style.transition = 'transform ease-in-out .5s'
      currentSlideIndex = (currentSlideIndex + 1) % element.length 
    }
  })
  
} */


/* function carouselStart() {
  const carouselDisplay = document.querySelector('.carousel-slide');
  let countCurrent = 0;
  let currentSlide = null;
  
  
  function switchSlide() {
    const carouselDescription = document.querySelector('.carousel-description');
    const nextSlideIndex = (countCurrent + 1) % slides.length;
    const nextSlide = createCarouselItem(slides[nextSlideIndex]);

    
    nextSlide.style.transform = 'translateX(100%)';
    carouselDisplay.appendChild(nextSlide);
    
    setTimeout(() => {
      carouselDescription.style.transform = 'translateX(-50%)';
      carouselDescription.style.transition = 'transform .4s ease';
      currentSlide.style.transform = 'translateX(-50%)';
      currentSlide.style.marginRight = '-100%';
      // currentSlide.style.opacity = 0;
      nextSlide.style.transform = 'translateX(0)';
      // nextSlide.style.opacity = 1;
    }, 100);

    setTimeout(() => {
      currentSlide.remove();
      currentSlide.style.transform = '';
      currentSlide.classList.remove('current');

      nextSlide.style.transform = '';
      nextSlide.classList.add('current');
      countCurrent = nextSlideIndex;

      currentSlide = nextSlide; // Update the current slide
    }, 3500);
  }

  currentSlide = createCarouselItem(slides[countCurrent]); // Create initial slide
  carouselDisplay.appendChild(currentSlide); // Append initial slide

  switchSlide(); // Initial slide setup

  setInterval(switchSlide, 4000); // Switch to next slide periodically
}

// carouselStart();


nextBtn.addEventListener('click', () => {
  
  const carouselDisplay = document.querySelector('.carousel-slide');
  // let countCurrent = 0;
  let currentSlide;
  countCurrent++;
  if(countCurrent >= slides.length){
    countCurrent = 0
  }
  function switchSlide() {
    const nextSlideIndex = (countCurrent + 1) % slides.length;
    const nextSlide = createCarouselItem(slides[nextSlideIndex]);

    nextSlide.style.transform = 'translateX(100%)';
    carouselDisplay.appendChild(nextSlide);

    setTimeout(() => {
      currentSlide.style.transform = 'translateX(-50%)';
      currentSlide.style.marginRight = '-100%';
      // currentSlide.style.opacity = 0;
      nextSlide.style.transform = 'translateX(0)';
      // nextSlide.style.opacity = 1;
    }, 100);
    currentSlide = nextSlide
  } switchSlide()
})

prevBtn.addEventListener('click', () => {
  
  const carouselDisplay = document.querySelector('.carousel-slide');
  // let countCurrent = 0;
  let currentSlide;
  countCurrent--;
  if(countCurrent < 0){
    countCurrent = slides.length - 1;
  }
  function switchSlide() {
    const prevSlideIndex = countCurrent;
    const prevSlide = createCarouselItem(slides[prevSlideIndex]);

    prevSlide.style.transform = 'translateX(0)';
    carouselDisplay.appendChild(prevSlide);

    setTimeout(() => {
      currentSlide.style.transform = 'translateX(-50%)';
      currentSlide.style.marginRight = '-100%';
      // currentSlide.style.opacity = 0;
      prevSlide.style.transform = 'translateX(100%)';
      // nextSlide.style.opacity = 1;
    }, 100);
    currentSlide = prevSlide
  } switchSlide()
}) */








// carouselDisplay.innerHTML = `
  
//   <img src=${slides[countCurrent].image}>
//   <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>

//   </div>
// `;

// prevBtn.onclick = () => {
//   countCurrent--;
//   if(countCurrent < 0){
//     countCurrent = slides.length - 1;
//     return carouselDisplay.innerHTML = `
  
//     <img src=${slides[countCurrent].image}>
//     <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>
//   </div>
//     `
//   }
//   carouselDisplay.innerHTML = `
  
//   <img src=${slides[countCurrent].image}>
//   <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>
//   </div>
//   `

// }

// setInterval(
// nextBtn.onclick = () => {
//   countCurrent++;
//   if(countCurrent > slides.length - 1){
//     countCurrent = 0;
//     return carouselDisplay.innerHTML = `
  
//     <img src=${slides[countCurrent].image}>
//   <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>

//    </div>`;
//   }
//   carouselDisplay.innerHTML = `
  
//   <img src=${slides[countCurrent].image}>
//   <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>
//   </div>
//   `;
// }
// , 5000);


// function carouselStart() {
//   clearInterval(intervalId);
//   const carouselDisplay = document.querySelector('.carousel-slide');
//   let countCurrent = 0;
 
//   const currentSlide = createCarouselItem(slides[countCurrent]);
//   carouselDisplay.appendChild(currentSlide);
 
//   intervalId = setInterval(() => {
//     carouselDisplay.innerHTML = '';
//     const nextSlideIndex = (countCurrent + 1) % slides.length;
//     const nextSlide = createCarouselItem(slides[nextSlideIndex]);
 
//     nextSlide.style.transform = 'translateX(100%)';
//     carouselDisplay.appendChild(nextSlide);
 
//     setTimeout(() => {
//       currentSlide.style.transform = 'translateX(-100%)';
//       nextSlide.style.transform = 'translateX(0)';
//     }, 100);
//     setTimeout(() => {
//       currentSlide.remove();
//       currentSlide.style.transform = '';
//       currentSlide.classList.remove('current');

//       nextSlide.style.transform = '';
//       nextSlide.classList.add('current');
//       countCurrent = nextSlideIndex;
//     }, 1000);
//   }, 5000);
// }

// carouselStart();


// function carouselStart () {
//     countCurrent++;
//     if(countCurrent >= slides.length){
//       countCurrent = 0
//     }
//     carouselDisplay.innerHTML = 
//     `<img src=${slides[countCurrent].image}>
//     <div class="carousel-description overlay">
//     <p>${slides[countCurrent].location}</p>
//     <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//     <p>${slides[countCurrent].description}</p>
//     <a class="btn" href="#view-more">View more</a> 
//     </div>
//     `
//     setTimeout(() => {
//       clearInterval(intervalId)
//       intervalId = setInterval(() => {
//         nextBtn.onclick = carouselStart()
//     }, 3000)
//     }, countCurrent * 3000)
// }
// carouselStart()


// setTimeout(()=> {
//   clearInterval(intervalId);

//   intervalId = setInterval(()=> {
//     nextBtn.onclick = () => {
//        countCurrent++;
//   if(countCurrent > slides.length - 1){
//     countCurrent = 0;
//     return carouselDisplay.innerHTML = `
  
//     <img src=${slides[countCurrent].image}>
//   <div class="carousel-description overlay">
//   <p>${slides[countCurrent].location}</p>
//   <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//   <p>${slides[countCurrent].description}</p>
//   <a class="btn" href="#view-more">View more</a>

//    </div>`;
//   }
//       carouselDisplay.innerHTML = `
//       <img src=${slides[countCurrent].image}>
//       <div class="carousel-description overlay">
//       <p>${slides[countCurrent].location}</p>
//       <h3><span>${slides[countCurrent].name}</span> Model House</h3>
//       <p>${slides[countCurrent].description}</p>
//       <a class="btn" href="#view-more">View more</a>
      
//       </div>
//       `;
//     }
//   }, 3000)
// }, 3000)

