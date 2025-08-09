function formValidation() {
    //step-1 to store user input
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["password"].value;
    var confirmpassword = document.forms["myForm"]["confirmpassword"].value
    var phonenumber = document.forms["myForm"]["phonenumber"].value;

    //for giving alert -step 2
    //syntax: /^ $/
    //syntax for password :(?=.*[a-z])
    var usernameRegex = /^[a-zA-Z0-9]{3,}$/; //for Username
    var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;        //email
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#_]).{6,8}$/;     //password
    var phonenumberRegex = /^[0-9]{10}$/;



    //step-3
    if (!usernameRegex.test(username)) {
        alert("Username is wrong");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("email is wrong");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("password is wrong");
        return false;
    }
    if (confirmpassword !== password) {
        alert("password doesn't match");
        return false;
    }
    if (!phonenumberRegex.test(phonenumber)) {
        alert("enter correct phonenumber");
        return false;
    }
    alert("Form submitted successfully" + username + email + password + confirmpassword + phonenumber);
    return true;
}