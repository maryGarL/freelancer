var portafolio=document.getElementById("portafolio");
var about=document.getElementById("about");
var contact=document.getElementById("contact");
window.onscroll=function () {
"use strict";
console.log(document.body.scrollTop)
if (document.body.scrollTop <= 559) {
   portafolio.classList.remove("color");
}
else if (document.body.scrollTop >559 ||document.body.scrollTop < 1399) {

         about.classList.remove("color");
         portafolio.classList.add("color");
}
else if (document.body.scrollTop >= 1399 ||document.body.scrollTop < 1959){
  portafolio.classList.remove("color");
  about.classList.add("color");
  contact.classList.remove("color");
}else if (document.body.scrollTop >= 1959  ){
about.classList.remove("color");
contact.classList.add("color");
}};
