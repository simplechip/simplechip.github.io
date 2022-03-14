function isValid() {
    if (firstName() &&
        lastName() &&
        email()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname = false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in first name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    var validLastname = false;

    var lastname = document.getElementById("LastName").value;
    var errorMessages = "";

    if (lastname==="null" || lastname==="" || lastname.length > 20 ) {
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length")
        } else if (lastname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                validLastname = true;
                console.log("Last name valid")
        };

    document.getElementById("lname").innerHTML = errorMessages;

    return (validLastname);
};

EMail.addEventListener('blur', email, false);
function email(){
    var validEMail = false;

    var email = document.getElementById("EMail").value;
    var errorMessages = "";

    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    if (email==="null" || email==="" ) {
        errorMessages += "<p>The Email is required</p>";
        console.log("Email empty")
        } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            errorMessages += "<p>Invalid email</p>";
            console.log("Email invalid")
        } else {
                validEMail = true;
                console.log("Email valid")
        };

    document.getElementById("email").innerHTML = errorMessages;

    return (validEMail);
};