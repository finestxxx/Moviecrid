const hamburger=document.querySelector(".hamburger");
var menu=document.querySelector(".menu-list");

hamburger.addEventListener("click", function(){
    menu.classList.toggle('show');
})



var links = document.getElementsByTagName("a");


for (var i = 0; i < links.length; i++) {
  // Get the current link's href attribute
  var href = links[i].href;

  
  if (href.includes("gotaku1.com")) {
   
    var newHref = href.replace("gotaku1.com", "goone.pro");

    
    links[i].href = newHref;
  }
}
