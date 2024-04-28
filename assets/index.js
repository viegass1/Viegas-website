console.log("hello")

if(jQuery) {
    console.log("jquery loaded")
}

else {
    console.log("no jquery")
}


let mobileMenuOpen = false;

$("#mobile-menu-button").click(function(){
    // if mobile menu is closed, open it
    if(mobileMenuOpen == false) {
    
        $("#main-menu").removeClass("display-none-mobile");
        mobileMenuOpen = true;
        $("#mobile-menu-text").text("CLOSE");
        $("#mobile-menu-icon").attr("src", "assets/index/close.svg");
    }
    // if mobile menu is open, close it
    else {
    
        $("#main-menu").addClass("display-none-mobile");
        mobileMenuOpen = false;
        $("#mobile-menu-text").text("MENU");
        $("#mobile-menu-icon").attr("src", "assets/index/menu.svg");
    }

    

})

document.getElementById("myButton").addEventListener("click", function() {
  // Ask for confirmation
  var confirmation = confirm("Are you sure you want to leave this page?");
  
  // If user confirms, navigate to the link
  if (confirmation) {
      window.location.href = "file:///Users/saraviegas/Desktop/WEB-1/Viegas-website/acc.html";
  }
})