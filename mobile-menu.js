const mobileBtn = document.querySelector('#mobile-nav-btn');
const mobileNav = document.querySelector('.navigation');
console.log(mobileNav)

mobileBtn.addEventListener('click',(event) => {
  if(mobileNav.style.display === 'block') {
    mobileNav.style.display = 'none'
    mobileNav.classList.remove('show')
    mobileBtn.classList.remove('close-button')
  } else {
    mobileNav.style.display = 'block'
    mobileNav.classList.add('show')
    mobileBtn.classList.toggle('close-button')
  }
  console.log(event.target)
  // if (mobileNav.style.display === 'min-width: 830px'){
  //   mobileNav.style.display = 'flex'
  // }
}
);
  /* transform:rotate(45deg) translate(10px, 4px); */

// if(window.innerWidth > 768){
//   mobileNav.classList.remove('show')
// } else {
//   mobileNav.classList.add('show')
// }



window.addEventListener('scroll', () => {
  const pageHeight = window.innerHeight;
  const scrollHeight = window.scrollY

  if((scrollHeight < pageHeight)) {
    mobileBtn.style.position = 'fixed';
   
  } else {
    mobileBtn.style.position = 'absolute'
  } 

  
})



// const userSearch = document.querySelector('.user-search')
// if(window.innerWidth <= 640) {
//   userSearch.style.position = 'fixed'
//   userSearch.style.top = '60px'
//   userSearch.style.right = '5%'
// }