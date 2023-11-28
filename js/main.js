function addContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').value;

    if (name && phone) {
        const contact = { name: name, phone: phone, photo: photo };
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));

        displayContacts();
        clearInputs();
    } else {
        alert('Пожалуйста, введите имя и телефон.');
    }
}

function displayContacts() {
    const contactsContainer = document.getElementById('contacts');
    contactsContainer.innerHTML = '';

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(function(contact, index) {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'contact';

        const photoElement = document.createElement('img');
        photoElement.src = contact.photo || 'default-photo.jpg';
        photoElement.alt = contact.name + ' photo';

        const nameElement = document.createElement('p');
        nameElement.textContent = contact.name;

        const phoneElement = document.createElement('p');
        phoneElement.textContent = contact.phone;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function() {
            deleteContact(index);
        };

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить';
        editButton.onclick = function() {
            editContact(index);
        };

        contactDiv.appendChild(photoElement);
        contactDiv.appendChild(nameElement);
        contactDiv.appendChild(phoneElement);
        contactDiv.appendChild(deleteButton);
        contactDiv.appendChild(editButton);

        contactsContainer.appendChild(contactDiv);
    });
}

function deleteContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
}

function editContact(index) {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = contacts[index];

    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('photo').value = contact.photo;

    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));

    displayContacts();
}

function updateContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').value;

    if (name && phone) {
        const contact = { name: name, phone: phone, photo: photo };
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));

        displayContacts();
        clearInputs();
    } else {
        alert('Пожалуйста, введите имя и телефон.');
    }
}

function clearInputs() {
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('photo').value = '';
}
displayContacts();
