// // const accordion = document.querySelectorAll('.faq-accordion-item');
// const accordionContent = document.querySelectorAll('.faq-accordion-content');
// const accordionBtn = document.querySelectorAll('.faq-accordion-btn');
// const accordionBtnArrow = document.querySelectorAll('.faq-accordion-btn i');
// const accordionItemLast = document.querySelectorAll('.faq-accordion-item:last-of-type');
// const accordionItem = document.querySelectorAll('.faq-accordion-item')
// // const accordion = Array.from(accordionBtn);
// // for (let i = 0; i < accordionHeading.length; i++) {
//   //   accordionHeading[i].addEventListener('click', function() {
//     //     this.nextElementSibling.style.display = "block"
//     //   })
//     //   accordionHeading[i].addEventListener('blur', function () {
//       //     this.nextElementSibling.style.borderBottom = '1px solid black'
//       //   })
//       // }
// let activeContent = null;
// accordionBtn.forEach(function(heading){
 
//   heading.addEventListener('click', () => {
    
//     accordionBtn.forEach(heading => {
//         heading.classList.remove('faq-active')
//     })
    


//     const content = heading.nextElementSibling;
//     heading.classList.toggle('active');
//     // content.classList.toggle('faq-active');

//     if(activeContent && activeContent !== heading.nextElementSibling) {
//       activeContent.style.display = "none";
//     };

//     if(content.style.display === "block") {
//       content.style.display = "none";

//     } else {
//       content.style.display = "block";
//     };

//     if(!accordionItemLast) {
//       heading.style.borderRadius = '0 0 10px 10px'
//     } else {
//       heading.style.borderRadius = '0'
//     }

//     // if(content.style.display === "none") {
//     //   heading.style.borderBottom = '1px solid red'

//     // } else {
//     //   heading.style.borderBottom = '0'

//     // }

    
//     heading.classList.add('faq-active');


    

//       if(heading.classList.contains('active') && heading.classList.contains('faq-active')) {
//         heading.style.borderBottom = '0';
//       } else if(!heading.classList.contains('active') && heading.classList.contains('faq-active')) {
//         heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
//       } 
//         else if(!heading.classList.contains('faq-active') && heading.classList.contains('active')){
//           heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
//         }
       
//         else if(!heading.classList.contains('faq-active') && !heading.classList.contains('active')){
//           heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
        
//       } else {
//         heading.style.borderBottom = '1px solid rgba(73, 72, 72, 0.8)'
//       }
   
   
//     // heading.classList.contains('active faq-active') && (content.style.display === 'block')? heading.style.borderBottom = '0' : heading.style.borderBottom = '1px solid red';
//     accordionBtnArrow.forEach(function (arrow) {
//       if(content.style.display === 'block'){
//         arrow.classList.add('down-side-up')

//       } else {
//         arrow.classList.remove('down-side-up')
//       }
     
//     })
  
//     activeContent = content;
//   });
// })


// const accordionContainer = document.getElementById('accordion-container');
// // console.log(accordionContainer);
// let activeContent = null;
// let previousContent = null;
// accordionContainer.addEventListener('click', (e) => {
//   const target = e.target;
//   const content = target.nextElementSibling;
//   target.classList.toggle('active')
//   content.classList.toggle('active');
//   console.log(target);
//   console.log(content);
  
//   if(target){

//     if(activeContent && activeContent !== content){
//       activeContent.style.display = 'none';
//     }
    
//     // const indicator = document.querySelector('.faq-accordion-btn i');
//       // console.log(indicator)
//     if(content.style.display === 'block') {
//       // console.log(content)
//       content.style.display = 'none';
//     } else {
//       content.style.display = 'block'; 
//     };
//     activeContent = content;
//   } 
// })

// const accordionContainer = document.getElementById('accordion-container');
// let activeContent = null;

// accordionContainer.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target.classList.contains('faq-accordion-btn')) {
//     const content = target.nextElementSibling;
//     const indicator = target.querySelector('.faq-accordion-btn i')
    
//     console.log(content)
//     console.log(target)
//     if (content) {
    
//       if (activeContent && activeContent !== content) {
//         activeContent.style.display = 'none';
//         activeContent.previousElementSibling.classList.remove('active');
//         indicator.classList.remove('down-side-up');
//       } 

//       if (content.style.display === 'block') {
//         content.style.display = 'none';
//         target.classList.remove('active');
//         indicator.classList.remove('down-side-up');
//       } else {
//         content.style.display = 'block';
//         target.classList.add('active');
//         indicator.classList.add('down-side-up');
//       }
      
//       activeContent = content;
//     }
//   }
// });

const accordionContainer = document.getElementById('accordion-container');

let activeContent = null;

accordionContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('faq-accordion-btn')) {
    const content = target.nextElementSibling;
    const indicator = target.querySelector('.indicator');
    const accordionItemLast = document.querySelectorAll('.faq-accordion-item:last-of-type');

    if (content) {
      if (activeContent && activeContent !== content) {
        activeContent.style.display = 'none';
        activeContent.previousElementSibling.classList.remove('active');
        // activeContent.previousElementSibling.querySelector('.indicator').style.transform = 'rotate(0deg)';
        activeContent.previousElementSibling.querySelector('.indicator').classList.remove('down-side-up');
      }
      if (content.style.display === 'block') {
        content.style.display = 'none';
        target.classList.remove('active');
        // indicator.style.transform = 'rotate(0deg)';
        indicator.classList.remove('down-side-up')
      } else {
        content.style.display = 'block';
        target.classList.add('active');
        // indicator.style.transform = 'rotate(180deg)';
        indicator.classList.add('down-side-up')
      }
      if(!accordionItemLast) {
        target.style.borderRadius = '0 0 10px 10px'
      } else {
        target.style.borderRadius = '0'
      }
      activeContent = content;
    }
  }
});
