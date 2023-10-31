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
  event.preventDefault();

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
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
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

