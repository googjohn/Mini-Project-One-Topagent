const mobileBtn = document.querySelector('#mobile-nav-btn');
const mobileNav = document.querySelector('.navigation');
const userSearch = document.querySelector('.user-search')


mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('active');
  mobileBtn.classList.toggle('close-button');
  mobileNav.classList.toggle('active')
  mobileBtn.classList.toggle('fixed')
  userSearch.classList.toggle('fixed')

  if(window.innerWidth < 640) {
      userSearch.classList.toggle('block')
    }

  if(!mobileBtn.classList.contains('active') && !mobileNav.classList.contains('active')) {
    mobileBtn.classList.remove('fixed')
    userSearch.classList.remove('fixed')
    if(window.innerWidth < 640) {
      userSearch.classList.remove('block')
    }

  }
})

mobileNav.addEventListener('click', (event) => {
  if(window.innerWidth < 830) {
    if(mobileNav.classList.contains('active')){
      const target = event.target;
      target.scrollIntoView();
      mobileBtn.classList.remove('close-button')
      mobileNav.classList.remove('active')
      mobileBtn.classList.remove('fixed')
      userSearch.classList.remove('fixed')
      
    }
  }
  if(window.innerWidth < 640) {
    if(!mobileNav.classList.contains('block')) {
      userSearch.classList.remove('block')
    }
  }
})
