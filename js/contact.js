window.addEventListener('load', function(){
    
    
    // Note: it can be very helpful to 'preserve logs' in Chrome
    // and 'enable persistent logging' in FF in order to
    // troubleshoot javascript errors when working with forms


    var contactForm = document.getElementById("contactForm");
    

    // form inputs
    var txtFirstName = document.getElementById("txtFirstName");
    var txtLastName = document.getElementById("txtLastName");
    var txtComments = document.getElementById("txtComments");
    var txtEmail = document.getElementById("txtEmail");


    // validation divs
    var vName = document.getElementById("vName");
    var vComments = document.getElementById("vComments")
    var vAge = document.getElementById("vAge")
    var vEmail = document.getElementById("vEmail")


    // event handler for when the form is submitted
    contactForm.addEventListener("submit", function(eventObj){
        if(validateSampleForm() == false){
            eventObj.preventDefault();
        }
    });

    // this function should return false if the input is not valid
    // it should return true if the input is valid
    function validateSampleForm(){
        var formIsValid = true;
        clearValidationMessages();
        //validate first name
        if(txtFirstName.value == "") {
            formIsValid = false;
            vFirstName.innerHTML = "<h6>Please enter your first name</h6>";
        }
        //validate last name
        if(txtLastName.value == "") {
            formIsValid = false;
            vLastName.innerHTML = "<h6>Please enter your last name</h6>";
        }
        //validate email
        if(txtEmail.value == "") {
            formIsValid = false;
            vEmail.innerHTML = "<h6>Please enter your Email address</h6>";
        }else if(validateEmailAddress(txtEmail.value) == false) {
            formIsValid = false;
            vEmail.innerHTML = "<h6>Please enter a valid Email address</h6>";
        }
        //validate comment
        if(txtComments.value == "") {
            formIsValid = false;
            vComments.innerHTML = "<h6>Please enter a comment</h6>";
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