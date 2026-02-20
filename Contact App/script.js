let contacts = [];
let nextId = 1;

function addContact() {
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    alert("Please fill all fields.");
    return;
  }

  const newContact = {
    id: nextId,
    name: name,
    email: email
  };

  contacts.push(newContact);
  nextId++;

  nameInput.value = "";
  emailInput.value = "";

  renderContacts();
}

function deleteContact(id) {
  contacts = contacts.filter(function (contact) {
    return contact.id !== id;
  });

  renderContacts();
}

function updateContact(id) {
  const contact = contacts.find(function (c) {
    return c.id === id;
  });

  if (!contact) return;

  const newName = prompt("Enter new name:", contact.name);
  const newEmail = prompt("Enter new email:", contact.email);

  if (newName && newEmail) {
    contact.name = newName.trim();
    contact.email = newEmail.trim();
    renderContacts();
  }
}

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  contacts.forEach(function (contact) {
    const li = document.createElement("li");

   li.innerHTML = `
        <div class="contact-info">
            <strong>${contact.name}</strong>
            <small>${contact.email}</small>
        </div>
        <div class="actions">
            <button onclick="updateContact(${contact.id})">Edit</button>
            <button onclick="deleteContact(${contact.id})">Delete</button>
        </div>
`;


    list.appendChild(li);
  });
}