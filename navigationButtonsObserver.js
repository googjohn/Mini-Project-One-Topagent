const navigationButtons = document.querySelectorAll('.navigation-buttons')

navigationButtons.forEach(button => {
  button.addEventListener('click', navigationButtonsObserver)
})


function navigationButtonsObserver(event) {
  sectionObserver.disconnect();

  let hash = window.location.hash
  console.log(hash)
  if (hash) {
    let section = document.querySelector(hash);
    console.log(section)
    console.log(section.offsetTop)
    if (section) {
      window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop,
        left: 0,
      })
    }
    sections.forEach(section => sectionObserver.observe(section))
  }
}
