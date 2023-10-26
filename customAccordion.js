// const accordion = document.querySelectorAll('.faq-accordion-item');
const accordionContent = document.querySelectorAll('.faq-accordion-content');
const accordionBtn = document.querySelectorAll('.faq-accordion-btn');
const accordionBtnArrow = document.querySelectorAll('.faq-accordion-btn i');
const accordionItemLast = document.querySelectorAll('.faq-accordion-item:last-of-type');
const accordionItem = document.querySelectorAll('.faq-accordion-item')
// const accordion = Array.from(accordionBtn);
// for (let i = 0; i < accordionHeading.length; i++) {
  //   accordionHeading[i].addEventListener('click', function() {
    //     this.nextElementSibling.style.display = "block"
    //   })
    //   accordionHeading[i].addEventListener('blur', function () {
      //     this.nextElementSibling.style.borderBottom = '1px solid black'
      //   })
      // }
let activeContent = null;
accordionBtn.forEach(function(heading){
 
  heading.addEventListener('click', () => {
    
    accordionBtn.forEach(heading => {
        heading.classList.remove('faq-active')
    })
    


    const content = heading.nextElementSibling;
    heading.classList.toggle('active');
    // content.classList.toggle('faq-active');

    if(activeContent && activeContent !== heading.nextElementSibling) {
      activeContent.style.display = "none";
    };

    if(content.style.display === "block") {
      content.style.display = "none";

    } else {
      content.style.display = "block";
    };

    if(!accordionItemLast) {
      heading.style.borderRadius = '0 0 10px 10px'
    } else {
      heading.style.borderRadius = '0'
    }

    // if(content.style.display === "none") {
    //   heading.style.borderBottom = '1px solid red'

    // } else {
    //   heading.style.borderBottom = '0'

    // }

    
    heading.classList.add('faq-active');


    

      if(heading.classList.contains('active') && heading.classList.contains('faq-active')) {
        heading.style.borderBottom = '0';
      } else if(!heading.classList.contains('active') && heading.classList.contains('faq-active')) {
        heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
      } 
        else if(!heading.classList.contains('faq-active') && heading.classList.contains('active')){
          heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
        }
       
        else if(!heading.classList.contains('faq-active') && !heading.classList.contains('active')){
          heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
        
      } else {
        heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
      }
   
   
    // heading.classList.contains('active faq-active') && (content.style.display === 'block')? heading.style.borderBottom = '0' : heading.style.borderBottom = '1px solid red';
    accordionBtnArrow.forEach(function (arrow) {
      if(content.style.display === 'block' && heading.classList.contains('active')){
        arrow.classList.add('down-side-up')

      } else {
        arrow.classList.remove('down-side-up')
      }
     
    })
  
    activeContent = content;
  });
})

