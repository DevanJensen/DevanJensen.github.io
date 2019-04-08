window.addEventListener('load', function(){

  // STEP 1
  // We need to store all of our images in an array
  var images = [
    "images/Desert.jpg",
    "images/Jellyfish.jpg",
    "images/Koala.jpg",
    "images/Lighthouse.jpg",
    "images/Penguins.jpg",
    "images/Tulips.jpg"
  ];
  

  // STEP 2
  // get a handle on the main image, call the variable name 'mainImg'
  var mainImg = document.getElementById("mainImg");


  // STEP 3
  // create a variable called 'currentImg' and set it to 0
  // this will keep track of the index in the images array that
  // is currently being displayed
  var currentImg = 0;


  // STEP 4
  // Set up the first image (set mainImg.src = images[currentImg])
  mainImg.src = images[currentImg];


  // STEP 5
  // get handles on the buttons
  var btnPrev = document.getElementById("btnPrev");
  var btnNext = document.getElementById("btnNext");

  // STEP 6
  // add an event handler function to the 'next' button
  // write code so that the function will increment currentImg by one,
  // BUT only if it is less than the highest index in the images array
  // after incrementing currentImg, set the src of mainImg to 
  btnNext.addEventListener("click", function() {
    currentImg++;
    if(currentImg == images.length) {
      currentImg = 0;
    }
    mainImg.src = images[currentImg];
  });


  // STEP 7
  // add an event handler function to the 'prev' button
  // write code so that if currentImg is greater than 0,
  // it gets decremented by 1 and then sets the src of mainImg to images[currentImg].src
  btnPrev.addEventListener("click", function() {
    currentImg--;
    if(currentImg < 0) {
      currentImg = images.length - 1;
    }
    mainImg.src = images[currentImg];
  });


});