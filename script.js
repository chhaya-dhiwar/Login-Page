function showSignup() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('logout-form').style.display = 'none';
}

function showLogin() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('logout-form').style.display = 'none';
}

function showLogout() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('logout-form').style.display = 'block';
}

function showHome() {
    document.querySelector('.container').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('logout-form').style.display = 'none';
}

function togglePassword(inputId, eyeIcon) {
    let input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}
function validateSignup() {
let fullname = document.getElementById('signup-fullname').value;
let email = document.getElementById('signup-email').value;
let phone = document.getElementById('signup-phone').value;
let password = document.getElementById('signup-password').value;
let confirmPassword = document.getElementById('signup-confirm-password').value;

let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let phoneError = document.getElementById('phone-error');
let passwordError = document.getElementById('password-error');
let confirmPasswordError = document.getElementById('confirm-password-error');

let valid = true;

if (!fullname.includes(" ")) {
    nameError.style.display = 'block';
    valid = false;
} else {
    nameError.style.display = 'none';
}

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    emailError.style.display = 'block';
    valid = false;
} else {
    emailError.style.display = 'none';
}

if (!/^[0-9]{10}$/.test(phone)) {
    phoneError.style.display = 'block';
    valid = false;
} else {
    phoneError.style.display = 'none';
}

let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
if (!passwordPattern.test(password)) {
    passwordError.style.display = 'block';
    valid = false;
} else {
    passwordError.style.display = 'none';
}

if (password !== confirmPassword) {
    confirmPasswordError.style.display = 'block';
    valid = false;
} else {
    confirmPasswordError.style.display = 'none';
}

let signedUpEmails = JSON.parse(localStorage.getItem('signedUpEmails')) || [];
if (signedUpEmails.includes(email)) {
    emailError.textContent = 'Email already signed up';
    emailError.style.display = 'block';
    valid = false;
} else {
    emailError.textContent = 'Invalid email format';
    emailError.style.display = 'none';
}

if (valid) {
        alert("Signup successful!");
        signedUpEmails.push(email);
        localStorage.setItem('signedUpEmails', JSON.stringify(signedUpEmails));
        localStorage.setItem('userFullname', fullname);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);
        document.getElementById("signup").reset();
        showLogin(); // Redirect to login page
    } else {
        alert("Signup unsuccessful! Please correct errors.");
    }
    return false;
}
function validateLogout() {
    let fullname = document.getElementById('logout-fullname').value;
    let email = document.getElementById('logout-email').value;
    let password = document.getElementById('logout-password').value;
    let confirmPassword = document.getElementById('logout-confirm-password').value;

    let storedFullname = localStorage.getItem('userFullname');
    let storedEmail = localStorage.getItem('userEmail');
    let storedPassword = localStorage.getItem('userPassword');

    if (fullname === storedFullname && email === storedEmail && password === storedPassword && password === confirmPassword) {
        alert("Logout successful!");
        document.getElementById("logout").reset();
        showHome();
    } else {
        alert("Logout unsuccessful! Please correct errors.");
    }
    return false;
}

function resetPassword() {
    let newPassword = prompt("Enter your new password:");
    if (newPassword) {
        alert("Your password has been reset successfully!");
    }
}