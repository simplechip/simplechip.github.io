function isValid() {
    if (firstName() &&
        lastName() &&
        phone() &&
        email() &&
        userName() &&
        passWord() &&
        address() &&
        city() &&
        state() &&
        country() &&
        ZCode()
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

Phone.addEventListener('blur', phone, false);
function phone(){
    var validPhone=false;

    var phone = document.getElementById("Phone").value;
    var errorMessages = "";

    if (isNaN(phone) || phone.length < 10 || phone.length > 15 || phone===null || phone==="") {
        errorMessages += "<p>Invalid phone number</p>";
        console.log("phone number invalid — length")
        } else {
                validPhone = true;
                console.log("phone number valid")
        };

    document.getElementById("phone").innerHTML = errorMessages;

    return (validPhone);
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

UserName.addEventListener('blur', userName, false);
function userName(){
    var validUserName = false;

    var userName = document.getElementById("UserName").value;
    var errorMessages = "";

    if (userName==="null" || userName==="" || userName.length > 12 ) {
        errorMessages += "<p>The username is required and cannot be greater than 12 characters</p>";
        console.log("username invalid — length")
        } else {
                validUserName = true;
                console.log("username valid")
        };

    document.getElementById("UName").innerHTML = errorMessages;

    return (validUserName);
}

Password.addEventListener('blur', passWord, false);
function passWord(){
    var validPassWord = false;

    var passWord = document.getElementById("Password").value;
    var errorMessages = "";

    if (passWord==="null" || passWord==="" || passWord.length > 7 ) {
        errorMessages += "<p>The password is required and cannot be greater than 7 characters</p>";
        console.log("password invalid")
        } else {
                validPassWord = true;
                console.log("password valid")
        };

    document.getElementById("PWord").innerHTML = errorMessages;

    return (validPassWord);
}

Address.addEventListener('blur', address, false);
function address(){
    var validAddress = false;

    var address = document.getElementById("Address").value;
    var errorMessages = "";

    if (address==="null" || address==="") {
        errorMessages += "<p>Invalid address</p>";
    } else {
        validAddress = true;
    };
    document.getElementById("addressWarn").innerHTML = errorMessages;

    return (validAddress);
}

City.addEventListener('blur', city, false);
function city(){
    var validCity = false;

    var city = document.getElementById("City").value;
    var errorMessages = "";

    if (city==="null" || city==="") {
        errorMessages += "<p>Invalid city</p>";
    } else {
        validCity = true;
    };
    document.getElementById("cityWarn").innerHTML = errorMessages;

    return (validCity);
}

State.addEventListener('blur', state, false);
function state() {
    var validState = false;

    var state = document.getElementById("State").value;
    var errorMessages = "";

    if (state=="state") {
        errorMessages += "<p>please select a state</p>";
    } else {
        validState = true;
    };
    document.getElementById("stateWarn").innerHTML = errorMessages;

    return (validState);
}

Country.addEventListener('blur', country, false);
function country() {
    var validCountry = false;

    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country=="country") {
        errorMessages += "<p>please select a country</p>";
    } else {
        validCountry = true;
    };
    document.getElementById("countryWarn").innerHTML = errorMessages;

    return (validCountry);
}

zipCode.addEventListener('blur', ZCode, false);
function ZCode() {
    var validZip = false
    
    var zipC = document.getElementById("zipCode").value;
    var country = document.getElementById("Country").value;
    var errorMessages = "";

    if (country=="US") {
        if (isNaN(zipC) || zipC.length != 5 || zipC > 99950 || zipC < 0 || zipC=="" || zipC==null) {
            errorMessages += "<p>please enter valid zipcode</p>";
        } else {
            validZip = true;
        }

    }
    document.getElementById("zipCodeWarn").innerHTML = errorMessages;

    return(validZip);
}