// src/scripts/generateContacts.js

import fs from 'fs/promises';
import createFakeContact from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (count) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < count; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Generated ${count} contacts.`);
  } catch (error) {
    console.error('Error generating contacts:', error.message);
  }
};

// Example usage
generateContacts(5); // Change the number as needed



