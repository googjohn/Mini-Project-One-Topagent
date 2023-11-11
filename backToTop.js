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
