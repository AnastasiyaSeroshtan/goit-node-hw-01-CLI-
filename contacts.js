const fs = require('fs/promises');
const path = require("path");
const { v4: uuidv4 } = require('uuid');
// console.log(uuid)

// const contactsPath = `${__dirname}/db/contacts.json`;

const contactsPath = path.join(__dirname, "db/contacts.json");
// console.log(__dirname)
/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию

  
// 
  
//   function removeContact(contactId) {
//     // ...твой код
//   }
  
//


async function listContacts() {
    const contactsList = await fs.readFile(contactsPath);
    return JSON.parse(contactsList);
  }

async function  getContactById(contactId) {
    const contactsList = await listContacts();
    const contactById = contactsList.find(contact => contact.id === contactId);
    return contactById || null;       
};

async function addContact({name, email, phone}) {
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
};

async function removeContact(contactId) {
    const contactsList = await listContacts();
    const indexById = contactsList.findIndex(contact => contact.id === contactId);

    if (indexById  === -1) {
        return null;
    }
    const [deleteContact ]= contactsList.splice(indexById, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contactsList, null, 2));
    return deleteContact;
};

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
}; 