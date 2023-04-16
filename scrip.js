function fadeOutImage(image) {
    image.style.opacity = 0;
    
    image.nextElementSibling.style.display = "inline-block";
    image.nextElementSibling.style.opacity = 1;
  }
  
  function fadeInImage(image) {
    image.style.opacity = 1;
    
    image.previousElementSibling.style.display = "none";
    image.previousElementSibling.style.opacity = 1;
  }

  function redirectTo(link) {
    window.location.href = link;
  }