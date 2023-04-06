const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const dob = document.getElementById('dob');
const address1 = document.getElementById('address1');
const address2 = document.getElementById('address2');
const city = document.getElementById('city');
const state = document.getElementById('state');
const zipcode = document.getElementById('zip');
const country = document.getElementById('country');
const button = document.getElementById('btn')


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(String(email).toLowerCase());
}

const isPhoneNo = phoneno => {
    const ph = /^\d{10}$/;
    return ph.test(phoneno);
}
    


button.addEventListener('transitionrun', e => {
    e.preventDefault();

    validateInputs();


});


const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phonenoValue = phoneno.value.trim();
    const dobValue = dob.value.trim();
    const address1Value = address1.value.trim();
    const address2Value = address2.value.trim();
    const cityValue = city.value.trim();
    const stateValue = state.value.trim();
    const zipcodeValue = zipcode.value.trim();
    const countryValue = country.value.trim();


if (fnameValue === '') {
    setError(fname, 'First Name is required');
} else {
    setSuccess(fname);
}

if (lnameValue === '') {
    setError(lname, 'Last Name is required');
} else {
    setSuccess(lname);
}

if (emailValue === '') {
    setError(email, 'Email is required');
}
 else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
} 
else {
    setSuccess(email);
}

if (phonenoValue === '') {
    setError(phoneno, 'Phone Number is required');
}
else if (!isPhoneNo(phonenoValue)) {
    setError(phoneno, 'Provide a valid phone number');
}
else {
    setSuccess(phoneno);
}

if (dobValue === '') {
    setError(dob, 'Date of Birth is required');
} else {
    setSuccess(dob);
}

if (address1Value === '') {
    setError(address1, 'Address line 1 is required');
} else {
    setSuccess(address1);
}

if (address2Value === '') {
    setError(address2, 'Address line 2 is required');
} else {
    setSuccess(address2);
}

if (cityValue === '') {
    setError(city, 'City is required');
} else {
    setSuccess(city);
}

if (stateValue === '') {
    setError(state, 'State is required');
} else {
    setSuccess(state);
}

if (zipcodeValue === '') {
    setError(zipcode, 'Zip Code is required');
} else {
    setSuccess(zipcode);
}
    
if (countryValue === '') {
    setError(country, 'country is required');
} else {
    setSuccess(country);
}

}




