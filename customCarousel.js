// buttons
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// carousel slide images
const slideOne = document.createElement('img');
slideOne.src = '/images/gallery-slider/slide-1.jpg';
const slideTwo = document.createElement('img');
slideTwo.src = '/images/gallery-slider/slide-2.jpg';
const slideThree = document.createElement('img');
slideThree.src = '/images/gallery-slider/slide-3.jpg';

// object slides
const slides = [
{
  'name': 'Gretta',
  'image': slideOne.src,
  'location': 'Tagaytay City',
  'description': 'A glamorous looking penthouse.'
},
{
  'name': 'Freyya',
  'image': slideTwo.src,
  'location': 'Boracay Island',
  'description': 'A cozy and luxurious dwelling in the Island of Boracay.'
},
 {
  'name': 'Ella',
  'image': slideThree.src,
  'location': 'Baguio City',
  'description': 'A modern look in the summer capital of the Philippines.'
}
]


// carousel display
const carouselDisplay = document.querySelector('.carousel-slide');
let countCurrent = 0;
carouselDisplay.innerHTML = `
  
  <img src=${slides[countCurrent].image}>
  <div class="carousel-description overlay">
  <p>${slides[countCurrent].location}</p>
  <h3><span>${slides[countCurrent].name}</span> Model House</h3>
  <p>${slides[countCurrent].description}</p>
  <a class="btn" href="#view-more">View more</a>

  </div>
`;
prevBtn.onclick = () => {
  countCurrent--;
  if(countCurrent < 0){
    countCurrent = slides.length - 1;
    return carouselDisplay.innerHTML = `
  
    <img src=${slides[countCurrent].image}>
    <div class="carousel-description overlay">
  <p>${slides[countCurrent].location}</p>
  <h3><span>${slides[countCurrent].name}</span> Model House</h3>
  <p>${slides[countCurrent].description}</p>
  <a class="btn" href="#view-more">View more</a>
  </div>
    `
  }
  carouselDisplay.innerHTML = `
  
  <img src=${slides[countCurrent].image}>
  <div class="carousel-description overlay">
  <p>${slides[countCurrent].location}</p>
  <h3><span>${slides[countCurrent].name}</span> Model House</h3>
  <p>${slides[countCurrent].description}</p>
  <a class="btn" href="#view-more">View more</a>
  </div>
  `

}

setInterval(
nextBtn.onclick = () => {
  countCurrent++;
  if(countCurrent > slides.length - 1){
    countCurrent = 0;
    return carouselDisplay.innerHTML = `
  
    <img src=${slides[countCurrent].image}>
  <div class="carousel-description overlay">
  <p>${slides[countCurrent].location}</p>
  <h3><span>${slides[countCurrent].name}</span> Model House</h3>
  <p>${slides[countCurrent].description}</p>
  <a class="btn" href="#view-more">View more</a>

   </div>`;
  }
  carouselDisplay.innerHTML = `
  
  <img src=${slides[countCurrent].image}>
  <div class="carousel-description overlay">
  <p>${slides[countCurrent].location}</p>
  <h3><span>${slides[countCurrent].name}</span> Model House</h3>
  <p>${slides[countCurrent].description}</p>
  <a class="btn" href="#view-more">View more</a>
  </div>
  `;
}
, 5000);
