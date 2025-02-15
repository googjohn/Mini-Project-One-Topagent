const images = document.querySelectorAll('.lazy-load')

const lazyLoad = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let image = entry.target;
      image.src = image.dataset.src;
      observer.unobserve(image)
    }
  })
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: .1,
}

let observer = new IntersectionObserver(lazyLoad, options)

images.forEach(image => observer.observe(image))