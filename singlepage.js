let hamburgerSingle=document.querySelector(".hamburger-single");
var menuSingle=document.querySelector(".menu-container-single");

hamburgerSingle.addEventListener("click", function(){
    menuSingle.classList.toggle('show-single');
})


// Define a function that takes the old and new domain names as parameters
function changeDomain(oldDomain, newDomain) {
  // Select all the anchor tags on the page
  var links = document.getElementsByTagName("a");
  // Loop through each link
  for (var i = 0; i < links.length; i++) {
    // Get the href attribute of the link
    var href = links[i].getAttribute("href");
    // Check if the href contains the old domain name
    if (href.indexOf(oldDomain) !== -1) {
      // Replace the old domain name with the new one
      var newHref = href.replace(oldDomain, newDomain);
      // Set the new href attribute to the link
      links[i].setAttribute("href", newHref);
    }
  }
}

// Call the function with your desired domain names
changeDomain("gotaku1.com", "go.com");
changeDomain("goone.com", "goone.com");
