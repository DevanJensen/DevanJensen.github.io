window.addEventListener('load', function(){

bttnChangeMeOne.addEventListener("click", function() {
    var h4 = document.getElementById("changeMeOne")
    h4.id = "changedMeOne"
  });

bttnReverseOne.addEventListener("click", function() {
    var h4 = document.getElementById("changedMeOne")
    h4.id = "changeMeOne"
  });

});