import getAllContacts from './getAllContacts.js';
import createFakeContact from '../utils/createFakeContact.js';
import updateContacts from './upContacts.js';
export const addOneContact = async () => {
    const contacts = await getAllContacts();
    const newContact = createFakeContact();
    contacts.push(newContact);

    await updateContacts(contacts);
};


addOneContact();

