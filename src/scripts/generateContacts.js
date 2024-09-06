import createFakeContact from '../utils/createFakeContact.js';
import getAllContacts from './getAllContacts.js';
import updateContacts from './upContacts.js';


const generateContacts = async (number) => {
    const contacts = await getAllContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    contacts.push(...newContacts);

  await updateContacts(contacts);
};

generateContacts(5);


