function formValidation() {
    //step-1 to store user input
    var username = document.forms["myForm"]["username"].value.trim();
    var email = document.forms["myForm"]["email"].value.trim();
    var password = document.forms["myForm"]["password"].value.trim();

    //for giving alert -step 2
    //syntax: /^ $/
    //syntax for password :(?=.*[a-z])
    var usernameRegex = /^[a-zA-Z0-9]{3,}$/; //for Username
    var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;        //email
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#_]).{6,8}$/;     //password



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
const userData = { username, email, password };
  localStorage.setItem("currentUser", JSON.stringify(userData));
    alert("Login Successful" + username  + email  + password);
    return true;
}








