// script.js 

const passwordInput = document.getElementById("password");
const power = document.getElementById("power-point");
const generateButton = document.getElementById("generate-button");
const widthPower = ["1","25%", "50%", "75%", "100%"];
const colorPower = ["#D73F40","#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

function generateCustomPassword(length) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';
    let password = '';

    password += chars[Math.floor(Math.random() * 10)];
    password += chars[Math.floor(Math.random() * 26) + 10];
    password += chars[Math.floor(Math.random() * 26) + 36];
    password += chars[Math.floor(Math.random() * 21) + 62];

    for (let i = 4; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password.split('').sort(() => 0.5 - Math.random()).join('');
}

function checkPasswordStrength(value) {
    let point = 0;
    const arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
    
    if (value.length >= 6) {
        point = arrayTest.reduce((acc, regex) => acc + regex.test(value), 0);
    }
    
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
}

passwordInput.oninput = () => {
    checkPasswordStrength(passwordInput.value);
};

generateButton.onclick = () => {
    const generatedPassword = generateCustomPassword(16);
    passwordInput.value = generatedPassword;
    checkPasswordStrength(generatedPassword);
    alert('Successfully generated!');
};