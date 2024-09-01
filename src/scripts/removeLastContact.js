import getAllContacts from './getAllContacts.js';

import updateContacts from './upContacts.js';


export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  contacts.pop();
  await updateContacts(contacts);
};


removeLastContact();


