const fs = require('fs/promises');
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
try {
    const contactsList = await fs.readFile(contactsPath);
    return JSON.parse(contactsList);
} catch (error) {
    console.error(error)
}
  }

async function  getContactById(contactId) {
try {
    const contactsList = await listContacts();
    const contactById = contactsList.find(contact => contact.id === contactId);
    return contactById || null;
} catch (error) {
    console.error(error)
}       
};

async function addContact({name, email, phone}) {
try {
    const contactsList = await listContacts();
    const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
    }
    contactsList.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return newContact;
} catch (error) {
    console.error(error)
}
};

async function removeContact(contactId) {
try {
    const contactsList = await listContacts();
    const indexById = contactsList.findIndex(contact => contact.id === contactId);

    if (indexById  === -1) {
        return null;
    }
    const [deleteContact ]= contactsList.splice(indexById, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return deleteContact;
} catch (error) {
    console.error(error)
}
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
}; 