const add_contact_button = document.getElementById('add_contact_button');

const contact_menu = document.getElementById('contact_menu');

const error = document.getElementById('error');

contact_menu.addEventListener('click', () => {
    
    window.location.href = "index.html";

});

add_contact_button.addEventListener('click', () => {
    
    const name = document.getElementById('name');

    const surname = document.getElementById('surname');

    const email = document.getElementById('email');

    const number = document.getElementById('number');

    const description = document.getElementById('description');

    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameCheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńñòóôöõøśšùúûüųūÿýżźžÀÁÂÄÃÅĄČĆĘÈÉÊËĖĮÌÍÎÏŁŃÑÒÓÔÖÕØŚŠÙÚÛÜŲŪŸÝŻŹŽ\-'\s]{1,50}$/;
    
    const surnameCheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńñòóôöõøśšùúûüųūÿýżźžÀÁÂÄÃÅĄČĆĘÈÉÊËĖĮÌÍÎÏŁŃÑÒÓÔÖÕØŚŠÙÚÛÜŲŪŸÝŻŹŽ\-'\s]{1,50}$/;
    
    const numberCheck = /^(\+\d{1,3}[- ]?)?\d{10}$/;

    if (emailCheck.test(email.value)) {
        email.style.borderColor = 'green';
    } else {
        email.style.borderColor = 'red';
    }
    if (nameCheck.test(name.value)) {
        name.style.borderColor = 'green';   
    } else {
        name.style.borderColor = 'red';
    }
    if (surnameCheck.test(surname.value)) {
        surname.style.borderColor = 'green';
    } else {
        surname.style.borderColor = 'red';
    }
    if (numberCheck.test(number.value)) {
        number.style.borderColor = 'green';
    } else {
        number.style.borderColor = 'red';
    }

    const isNameValid = nameCheck.test(name.value);

    const isSurnameValid = surnameCheck.test(surname.value);
    
    const isEmailValid = emailCheck.test(email.value);
    
    const isNumberValid = numberCheck.test(number.value);

    if (isEmailValid && isNameValid && isSurnameValid && isNumberValid) {
        const contact = {
            name: name.value,

            surname: surname.value,

            email: email.value,

            number: number.value,

            description: description.value
        };
        localStorage.setItem('contacts', JSON.stringify(contact));

        error.innerHTML = `Information added successfully`;

        error.style.color = 'green';
    } else {
        error.innerHTML = `The data was entered incorrectly`;

        error.style.color = 'red';
    }
});
