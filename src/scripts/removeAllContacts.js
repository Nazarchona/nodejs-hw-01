import updateContacts from './upContacts.js';


export const removeAllContacts = async () => {
  await updateContacts([]);
};


removeAllContacts();


