var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// Auto Slide   if you need auto slide ,remove the commit "//"



//var slideIndex = 0;
//showSlides();

//function showSlides() {
    //var i;
  //  var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
   //     slides[i].style.display = "none";
   // }
  //  slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
   // slides[slideIndex - 1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image every 2 seconds
   window.addEventListener('scroll',() =>{
       header.classlist.toggle('shadow',window.scrollY > 0);
   });
   const sr=ScrollReveal(
       {
           distance:'60px',
           duration:2500,
           delay:400,
           reset:true
       }
   )

   sr.reveal('.detel',{delay:200,origin:'top'})
   sr.reveal('.images ,.social',{delay:400, origin: 'top'})
   sr.reveal('.about-text,.btn, .imge ',{delay:200, origin: 'top'})
   sr.reveal('.slider',{delay:400,origin:'top'})

  //typig-text
  
     const typedTextSpan = document.querySelector(".typed-text");
     const cursorSpan = document.querySelector(".cursor");
   
     const textArray = ["Programmmer", "Freelancer", "Web developer"];
     const typingDelay = 200;
     const erasingDelay = 10;
     const newTextDelay = 100; // Delay between current and next text
     let textArrayIndex = 0;
     let charIndex = 0;
   
     function type() {
       if (charIndex < textArray[textArrayIndex].length) {
         if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
         typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
         charIndex++;
         setTimeout(type, typingDelay);
       } else {
         cursorSpan.classList.remove("typing");
         setTimeout(erase, newTextDelay);
       }
     }
   
     function erase() {
       if (charIndex > 0) {
         // add class 'typing' if there's none
         if (!cursorSpan.classList.contains("typing")) {
           cursorSpan.classList.add("typing");
         }
         typedTextSpan.textContent = textArray[textArrayIndex].substring(0, 0);
         charIndex--;
         setTimeout(erase, erasingDelay);
       } else {
         cursorSpan.classList.remove("typing");
         textArrayIndex++;
         if (textArrayIndex >= textArray.length) textArrayIndex = 0;
         setTimeout(type, typingDelay);
       }
     }
   
     document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
       if (textArray.length) setTimeout(type, newTextDelay + 250);
     });


 var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        icon.src = "my photo/sun.png";
    }else{
        icon.src = "my photo/moon.png";
              
    }
}
