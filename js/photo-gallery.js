window.addEventListener('load', function(){


  var photo = [
    /* ADD IMAGE HERE LATER */
    "images/overview-lacrosse.jpg",
    "images/tunnel-entrance.jpg",
    "images/tunnel-exit.jpg",
    "images/caved-in-road.jpg",
    "images/snowy-day.jpg"

    
  ];

  var mainPhto = document.getElementById("mainPhto");

  var currentPhto = 0;

  mainPhto.src = photo[currentPhto];
 
  var btnPrev = document.getElementById("btnPrev");
  var btnNext = document.getElementById("btnNext");

  btnNext.addEventListener("click", function() {
    currentPhto++;
    if(currentPhto == photo.length) {
      currentPhto = 0;
    }
    mainPhto.src = photo[currentPhto];
  });

  btnPrev.addEventListener("click", function() {
    currentPhto--;
    if(currentPhto < 0) {
      currentPhto = photo.length - 1;
    }
    mainPhto.src = photo[currentPhto];
  });


});