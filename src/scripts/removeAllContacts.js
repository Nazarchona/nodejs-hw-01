import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Removed all contacts.');
  } catch (error) {
    console.error('Error removing all contacts:', error.message);
  }
};


