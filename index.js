const add_contact_button = document.getElementById('add_contact_button');

const search_button = document.getElementById('search_button');

const search_input = document.getElementById('search_input');

const add_contact = document.getElementById('add_contact');

let all_contact = [];

const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const nameCheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńñòóôöõøśšùúûüųūÿýżźžÀÁÂÄÃÅĄČĆĘÈÉÊËĖĮÌÍÎÏŁŃÑÒÓÔÖÕØŚŠÙÚÛÜŲŪŸÝŻŹŽ\-'\s]{1,50}$/;

const surnameCheck = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńñòóôöõøśšùúûüųūÿýżźžÀÁÂÄÃÅĄČĆĘÈÉÊËĖĮÌÍÎÏŁŃÑÒÓÔÖÕØŚŠÙÚÛÜŲŪŸÝŻŹŽ\-'\s]{1,50}$/;

const numberCheck = /^(\+\d{1,3}[- ]?)?\d{10}$/;

add_contact_button.addEventListener('click', () => {

    window.location.href = "add_contact.html";

});

document.addEventListener('DOMContentLoaded', () => {

    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {

        const contacts = JSON.parse(storedContacts);

        all_contact = contacts;

        displayContacts(contacts);

    }
});

function displayContacts(contacts) {

    add_contact.innerHTML = '';

    contacts.forEach((contact, index) => {
        const container = document.createElement('div');

        const item = document.createElement('div');

        item.classList.add('item');

        const contactDiv = document.createElement('div');

        const descriptionDiv = document.createElement('div');

        descriptionDiv.classList.add('descriptionDiv');

        const imgcontainer = document.createElement('div');

        imgcontainer.classList.add('imgcontainer');

        const img = document.createElement('img');

        img.classList.add('img');

        img.src = './image/people.png';

        contactDiv.classList.add('contactDiv');

        const namediv = document.createElement('div');

        namediv.style.display = 'flex'

        namediv.style.gap = '0.5rem'

        const name = document.createElement('span');

        const namevalue = document.createElement('span');

        namediv.appendChild(name);

        namediv.appendChild(namevalue);

        name.innerHTML = `Name:`;

        namevalue.innerHTML = `${contact.name}`;

        const surnamediv = document.createElement('div');

        const surname = document.createElement('span');

        const surnamevalue = document.createElement('span');

        surnamediv.style.display = 'flex'

        surnamediv.style.gap = '0.5rem'

        surnamediv.appendChild(surname);

        surnamediv.appendChild(surnamevalue);

        surname.innerHTML = `Surname:`;

        surnamevalue.innerHTML = `${contact.surname}`;

        const emaildiv = document.createElement('div');

        emaildiv.style.display = 'none';

        const email = document.createElement('span');

        const emailvalue = document.createElement('span');

        emaildiv.appendChild(email);

        emaildiv.appendChild(emailvalue);

        email.innerHTML = `Email:`;

        emailvalue.innerHTML = `${contact.email}`;

        email.classList.add('email_p');

        const numberdiv = document.createElement('div');

        const number = document.createElement('span');

        const numbervalue = document.createElement('span');

        numberdiv.style.display = 'flex'

        numberdiv.style.gap = '0.5rem'

        numberdiv.appendChild(number);

        numberdiv.appendChild(numbervalue);

        number.innerHTML = `Phone:`;

        numbervalue.innerHTML = `${contact.number}`;

        const down = document.createElement('img');

        down.classList.add('down');

        down.src = './image/down-arrow.png';

        const del = document.createElement('img');

        del.classList.add('down');

        del.src = './image/delete.png';


        const edit = document.createElement('img');

        edit.classList.add('down');

        edit.src = './image/edit.png';

        const save = document.createElement('img');

        save.src = './image/diskette.png';

        save.classList.add('down');

        save.classList.add('save');


        const descriptiondivitem = document.createElement('div');

        descriptiondivitem.style.display = 'none';

        const description = document.createElement('p');

        description.classList.add('description_p');

        const descriptionvalue = document.createElement('span');

        descriptionvalue.style.textAlign = 'center';

        descriptiondivitem.appendChild(description);

        descriptiondivitem.appendChild(descriptionvalue);

        description.innerHTML = `Description:`;

        descriptionvalue.innerHTML = `${contact.description}`;

        imgcontainer.appendChild(img);

        item.appendChild(imgcontainer);

        item.appendChild(namediv);

        item.appendChild(surnamediv);


        descriptionDiv.appendChild(emaildiv);

        item.appendChild(numberdiv);

        const icon = document.createElement('div');

        icon.classList.add('icon');

        item.appendChild(icon);

        icon.appendChild(del);

        icon.appendChild(edit);

        icon.appendChild(save);

        icon.appendChild(down);

        descriptionDiv.appendChild(descriptiondivitem);

        contactDiv.appendChild(item);

        contactDiv.appendChild(descriptionDiv);

        container.appendChild(contactDiv);

        add_contact.appendChild(container);


        down.addEventListener('click', () => {
            if (contactDiv.style.minHeight === '200px') {

                contactDiv.style.minHeight = '86px';

                descriptiondivitem.style.display = 'none';

                emaildiv.style.display = 'none';
            } else {
                contactDiv.style.minHeight = '200px';

                descriptiondivitem.style.display = 'block';

                descriptiondivitem.classList.add('description');

                emaildiv.style.display = 'flex'

                emaildiv.style.gap = '0.5rem'

            }
        });

        del.addEventListener('click', () => {

            all_contact.splice(index, 1);

            localStorage.setItem('contacts', JSON.stringify(all_contact));

            displayContacts(all_contact);
        });

        edit.addEventListener('click', () => {
            contactDiv.style.minHeight = '200px';

            descriptiondivitem.style.display = 'block';

            emaildiv.style.display = 'block';

            const nameinput = document.createElement('input');
           
            nameinput.classList.add('inputedit')
            
            nameinput.value = namevalue.textContent;

            nameinput.id = 'namevalue';

            namevalue.replaceWith(nameinput);

            const surnameinput = document.createElement('input');

            surnameinput.value = surnamevalue.textContent;
            
            surnameinput.classList.add('inputedit')
            
            surnameinput.id = 'surnamevalue';

            surnamevalue.replaceWith(surnameinput);

            const numberinput = document.createElement('input');

            numberinput.value = numbervalue.textContent;

            numberinput.classList.add('inputedit')

            numberinput.id = 'numbervalue';

            numbervalue.replaceWith(numberinput);

            const emailinput = document.createElement('input');

            emailinput.value = emailvalue.textContent;

            emailinput.classList.add('inputedit')

            emailinput.id = 'emailvalue';

            emailvalue.replaceWith(emailinput);

            const descriptioninput = document.createElement('textarea');

            descriptioninput.value = descriptionvalue.textContent;

            descriptioninput.classList.add('inputedit')

            descriptioninput.setAttribute('maxlength', 10 * 10)

            descriptioninput.id = 'descriptionvalue';

            descriptionvalue.replaceWith(descriptioninput);

            edit.style.display = 'none';

            save.style.display = 'block';

        });

        save.addEventListener('click', () => {

            const nameinput = document.getElementById('namevalue');

            const surnameinput = document.getElementById('surnamevalue');

            const numberinput = document.getElementById('numbervalue');

            const emailinput = document.getElementById('emailvalue');

            const descriptioninput = document.getElementById('descriptionvalue');

            const isNameValid = nameCheck.test(nameinput.value);

            const isSurnameValid = surnameCheck.test(surnameinput.value);

            const isEmailValid = emailCheck.test(emailinput.value);

            const isNumberValid = numberCheck.test(numberinput.value);

            nameinput.style.borderColor = isNameValid ? 'green' : 'red';

            surnameinput.style.borderColor = isSurnameValid ? 'green' : 'red';

            emailinput.style.borderColor = isEmailValid ? 'green' : 'red';

            numberinput.style.borderColor = isNumberValid ? 'green' : 'red';



            if (isNameValid && isSurnameValid && isEmailValid && isNumberValid) {

                all_contact[index].name = nameinput.value;

                all_contact[index].surname = surnameinput.value;

                all_contact[index].number = numberinput.value;

                all_contact[index].email = emailinput.value;

                all_contact[index].description = descriptioninput.value;

                localStorage.setItem('contacts', JSON.stringify(all_contact));

                displayContacts(all_contact);


                successPanelfunc()
            } else {
                errorPanelfunc()
            }
        });
    });
}

search_input.addEventListener('input', () => {
    const searchValue = search_input.value.toLowerCase();

    const filteredContacts = all_contact.filter(contact =>

        contact.name.toLowerCase().includes(searchValue)

    );

    displayContacts(filteredContacts);
});



function successPanelfunc() {

    const successPanel = document.getElementById('successPanel')

    successPanel.style.display = 'block';

    setTimeout(function () {

        successPanel.style.display = 'none';

    }, 3000);
}

function errorPanelfunc() {

    const errorPanel = document.getElementById('errorPanel')

    errorPanel.style.display = 'block';

    setTimeout(function () {

        errorPanel.style.display = 'none';

    }, 3000);
}

descriptionvalue.addEventListener('input', () => {
    
    const maxLength = 20;
    
    if (descriptionvalue.value.length > maxLength) {

        descriptionvalue.style.borderColor = 'red';
    
        descriptionvalue.value = description.value.slice(0, maxLength);
    } 
});