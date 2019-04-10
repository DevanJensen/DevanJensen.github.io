window.addEventListener('load', function(){
    
    
    // Note: it can be very helpful to 'preserve logs' in Chrome
    // and 'enable persistent logging' in FF in order to
    // troubleshoot javascript errors when working with forms


    var sampleForm = document.getElementById("sampleForm");
    

    // form inputs
    var txtName = document.getElementById("txtName");
    var txtComments = document.getElementById("txtComments");
    var txtAge = document.getElementById("txtAge");
    var txtEmail = document.getElementById("txtEmail");


    // validation divs
    var vName = document.getElementById("vName");
    var vComments = document.getElementById("vComments")
    var vAge = document.getElementById("vAge")
    var vEmail = document.getElementById("vEmail")


    // event handler for when the form is submitted
    sampleForm.addEventListener("submit", function(eventObj){
        if(validateSampleForm() == false){
            eventObj.preventDefault();
        }
    });

    // this function should return false if the input is not valid
    // it should return true if the input is valid
    function validateSampleForm(){
        var formIsValid = true;
        clearValidationMessages();
        //validate name
        if(txtName.value == "") {
            formIsValid = false;
            vName.innerHTML = "Please enter your name";
        }
        //validate age
        if(txtAge.value == "") {
            formIsValid = false;
            vAge.innerHTML = "Please enter your age";
        }else if(txtAge.value > 0 == false) {
            formIsValid = false;
            vAge.innerHTML = "Your age must be an number greater than 0";
        }
        //validate email
        if(txtEmail.value == "") {
            formIsValid = false;
            vEmail.innerHTML = "Please enter your Email address";
        }else if(validateEmailAddress(txtEmail.value) == false) {
            formIsValid = false;
            vEmail.innerHTML = "Please enter a valid Email address"
        }
        //validate comment
        if(txtComments.value == "") {
            formIsValid = false;
            vComments.innerHTML = "Please enter a comment";
        }
        return formIsValid;
    }

    // clears out all the validation messages
    function clearValidationMessages(){
        var divs = document.querySelectorAll(".validation-message");
        for(var x = 0;  x < divs.length; x++){
            divs[x].innerHTML = "";
            //divs[x].style.display = "none";
        }
    }

    // validates an email address (returns true it is valid, false if it is not)
    function validateEmailAddress(email){
        var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regExp.test(email)
    }


});// this is the end of window.addEventListener('load',function(){})