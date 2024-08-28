import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = [];

    try {
      const data = await fs.readFile(PATH_DB, 'utf8');
      contacts = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.writeFile(PATH_DB, JSON.stringify([]));
      } else {
        throw error;
      }
    }

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('Removed the last contact.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error.message);
  }
};


