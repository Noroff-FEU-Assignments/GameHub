
const form = document.querySelector("#Form")
const fullName = document.querySelector("#fullName")
const fullNameError = document.querySelector("#fullNameError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const address = document.querySelector("#address")
const addressError = document.querySelector("#addressError")
const city = document.querySelector("#city")
const cityError = document.querySelector("#cityError")
const country = document.querySelector("#country")
const countryError = document.querySelector("#countryError")
const postCode = document.querySelector("#postCode")
const postCodeError = document.querySelector("#postCodeError")
const cardNumber = document.querySelector("#cardNumber")
const cardNumberError = document.querySelector("#cardError")
const nameOnCard = document.querySelector("#nameOnCard")
const nameOnCardError = document.querySelector("#nameError")
const expiryMonth = document.querySelector("#expiry")
const expiryMonthError = document.querySelector("#expiryMonthError")
const expiryYear = document.querySelector("#expiryYear")
const expiryYearError = document.querySelector("#expiryYearError")
const cvv = document.querySelector("#cvv")
const cvvError = document.querySelector("#cvvError")

function validateForm () {
    event.preventDefault();

    if (checklength(fullName.value, 10)=== true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checklength(email.value, 0)=== true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checklength(address.value, 0)=== true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (checklength(city.value, 0)=== true) {
        cityError.style.display = "none";
    } else {
        cityError.style.display = "block";
    }

    if (checklength(country.value, 0)=== true) {
        countryError.style.display = "none";
    } else {
        countryError.style.display = "block";
    }

    if (checklength(postCode.value, 0)=== true) {
        postCodeError.style.display = "none";
    } else {
        postCodeError.style.display = "block";
    }

    if (checklength(nameOnCard.value, 0)=== true) {
        nameOnCardError.style.display = "none";
    } else {
        nameOnCardError.style.display = "block";
    }

    if (checklength(expiryMonth.value, 0)=== true) {
        expiryMonthError.style.display = "none";
    } else {
        expiryMonthError.style.display = "block";
    }

    if (checklength(expiryYear.value, 0)=== true) {
        expiryYearError.style.display = "none";
    } else {
        expiryYearError.style.display = "block";
    }

    if (checklength(cvv.value, 0)=== true) {
        cvvError.style.display = "none";
    } else {
        cvvError.style.display = "block";
    }
}



function checklength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}



