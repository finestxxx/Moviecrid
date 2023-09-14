var links = document.getElementsByTagName("a");


for (var i = 0; i < links.length; i++) {
  // Get the current link's href attribute
  var href = links[i].href;

  
  if (href.includes("gotaku1.com")) {
   
    var newHref = href.replace("gotaku1.com", "goone.pro");

    
    links[i].href = newHref;
  }
}
 hamburgerSingle=document.querySelector(".hamburger-single");
var menuSingle=document.querySelector(".menu-container-single");

hamburgerSingle.addEventListener("click", function(){
    menuSingle.classList.toggle('show-single');
})


