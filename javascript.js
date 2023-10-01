const hamburger=document.querySelector(".hamburger");
var menu=document.querySelector(".menu-list");

hamburger.addEventListener("click", function(){
    menu.classList.toggle('show');
})



var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://www.freefind.com/live/scripts/freefind_searchbox_v2.js
';
document.getElementsByTagName('head')[0].appendChild(script);
