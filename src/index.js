import { generateContacts } from './scripts/generateContacts.js';
import { addOneContact } from './scripts/addOneContact.js';
import { getAllContacts } from './scripts/getAllContacts.js';
import { countContacts } from './scripts/countContacts.js';
import { removeAllContacts } from './scripts/removeAllContacts.js';
import { removeLastContact } from './scripts/removeLastContact.js';

// Example usage
const run = async () => {
  try {
    // Generate 5 contacts
    await generateContacts(5);

    // Add one contact
    await addOneContact();

    // Get all contacts
    const contacts = await getAllContacts();
    console.log('All contacts:', contacts);

    // Count contacts
    const count = await countContacts();
    console.log('Total number of contacts:', count);

    // Remove last contact
    await removeLastContact();

    // Remove all contacts
    await removeAllContacts();
  } catch (error) {
    console.error('Error in script execution:', error.message);
  }
};

run();



