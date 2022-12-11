const contacts = require('./contacts');

// function invokeAction({ action, id, name, email, phone }) {
//     switch (action) {
// 
;
  
//     //   case "remove":
//     //     // ... id
//     //     break;
  
//       default:
//         console.warn("\x1B[31m Unknown action type!");
//     }
//   }

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
        break;

        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
        break;

        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact);
        break;

        case "remove":
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
        break;

  
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  }

//   invokeAction({action: 'list'});
// invokeAction({action: 'get', id: "5"});
// invokeAction({action: 'add', name: "Yulia Vik", email: "yuliavik@gmail.com", phone: "(587) 789-5784"});
// invokeAction({action: 'add', name: "Yana Kav", email: "yk@gmail.com", phone: "(236) 874-5874"});
invokeAction({action: 'remove', id: "2bc431a8-92e9-46a5-8a7d-d471c441cdc8"});
