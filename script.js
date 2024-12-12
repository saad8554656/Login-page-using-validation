"use strict";

// Show registration form
document.querySelector("#show-register").onclick = function() {
    document.querySelector("#login-form").style.display = "none";
    document.querySelector("#registration-form").style.display = "block";
};

// Show login form
document.querySelector("#show-login").onclick = function() {
    document.querySelector("#registration-form").style.display = "none";
    document.querySelector("#login-form").style.display = "block";
};

// Login validation
document.querySelector("#login-btn").onclick = function() {
    var email = document.querySelector("#em").value;    
    var password = document.querySelector("#pw").value;

    var emailError = document.querySelector("#email");
    var passwordError = document.querySelector("#password");

    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    var emailRegexp = /^([a-zA-Z0-9]([a-zA-Z0-9_.+-]*)?[a-zA-Z0-9])@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    var passwordRegexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    var emailResult = emailRegexp.test(email);
    var passwordResult = passwordRegexp.test(password);

    if (email === "") {
        emailError.innerHTML = "Please enter an email.";
    } else if (!emailResult) {
        emailError.innerHTML = "Please enter a valid email.";
    }

    if (password === "") {
        passwordError.innerHTML = "Please enter a password.";
    } else if (!passwordResult) {
        passwordError.innerHTML = "Please enter a valid password (8-16 characters, including uppercase, lowercase, and number).";
    }

    if (emailResult && passwordResult) {
        alert("Login successful");
    }
};

// Registration validation
document.querySelector("#register-btn").onclick = function() {
    var name = document.querySelector("#name").value;
    var dob = document.querySelector("#dob").value;
    var phone = document.querySelector("#phone").value;
    var regEmail = document.querySelector("#reg-em").value;    
    var regPassword = document.querySelector("#reg-pw").value;
    var confirmPassword = document.querySelector("#confirm-pw").value;

    var nameError = document.querySelector("#name-error");
    var dobError = document.querySelector("#dob-error");
    var phoneError = document.querySelector("#phone-error");
    var regEmailError = document.querySelector("#reg-email-error");
    var regPasswordError = document.querySelector("#reg-password-error");
    var confirmPasswordError = document.querySelector("#confirm-password-error");

    nameError.innerHTML = "";
    dobError.innerHTML = "";
    phoneError.innerHTML = "";
    regEmailError.innerHTML = "";
    regPasswordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    var emailRegexp = /^([a-zA-Z0-9]([a-zA-Z0-9_.+-]*)?[a-zA-Z0-9])@([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/;
    var passwordRegexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    var phoneRegexp = /^[6789][0-9]{9}$/;

    var nameResult = name !== "";
    var dobResult = dob !== "";
    var phoneResult = phoneRegexp.test(phone);
    var regEmailResult = emailRegexp.test(regEmail);
    var regPasswordResult = passwordRegexp.test(regPassword);
    var confirmPasswordResult = regPassword === confirmPassword;

    if (!nameResult) {
        nameError.innerHTML = "Please enter your name.";
    }

    if (!dobResult) {
        dobError.innerHTML = "Please enter your date of birth.";
    }

    if (!phoneResult) {
        phoneError.innerHTML = "Please enter a valid phone number.";
    }

    if (!regEmailResult) {
        regEmailError.innerHTML = "Please enter a valid email.";
    }

    if (!regPasswordResult) {
        regPasswordError.innerHTML = "Please enter a valid password (8-16 characters, including uppercase, lowercase, and number).";
    }

    if (!confirmPasswordResult) {
        confirmPasswordError.innerHTML = "Passwords do not match.";
    }

    if (nameResult && dobResult && phoneResult && regEmailResult && regPasswordResult && confirmPasswordResult) {
        alert("Registration successful");
    }
};
